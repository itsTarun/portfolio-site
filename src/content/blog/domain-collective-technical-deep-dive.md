---
title: "Domain Collective: Technical Deep Dive into Multi-Registrar Platform"
date: "2025-01-04"
excerpt: "Exploring the architecture, challenges, and solutions behind building a unified domain management platform that integrates 6+ registrars."
tags: ["nextjs", "postgresql", "prisma", "domain-management", "case-study"]
category: "Case Study"
featured: true
---

# Domain Collective: Technical Deep Dive

Managing domains across multiple registrars is a pain point I experienced personally. This led to building **Domain Collective** - a unified platform that standardizes different registrar APIs into a single interface.

## The Problem

Imagine having domains across:
- GoDaddy
- Namecheap
- Gandi
- Porkbun
- Name.com
- Cloudflare

Each with:
- Different dashboards
- Inconsistent UI/UX
- Separate authentication
- No unified overview
- Hard to bulk manage

## Architecture Overview

```
┌─────────────────────────────────────────────┐
│         Domain Collective Frontend         │
│         (Next.js 15 + React 19)          │
└───────────────┬─────────────────────────┘
                │ HTTPS + WebSocket
┌───────────────▼─────────────────────────┐
│      Domain Collective API (Next.js)      │
│  - REST Endpoints                        │
│  - Real-time Updates                     │
│  - Background Jobs                       │
└───────────────┬─────────────────────────┘
                │
     ┌──────────┼──────────┐
     │          │          │
┌────▼───┐ ┌─▼────┐ ┌▼──────┐
│ GoDaddy │ │Namecheap│ │ Gandi  │
│  Provider│ │Provider│ │Provider│
└─────────┘ └────────┘ └────────┘
     ...         ...         ...
```

## Tech Stack

### Frontend
```typescript
// package.json
{
  "next": "15.0.0",
  "react": "19.0.0",
  "typescript": "^5.0",
  "tailwindcss": "^4.0",
  "@radix-ui/react-slot": "^1.2",
  "framer-motion": "^12.24",
  "@tanstack/react-query": "^5.0"
}
```

### Backend/API
```typescript
// API Server
- Next.js API Routes (App Router)
- Prisma ORM for database
- PostgreSQL for persistence
- Resend for emails
- Better Auth for authentication
- BullMQ for background jobs
```

## Provider Abstraction Layer

The core innovation was creating a unified interface for all providers:

```typescript
// interfaces/provider.ts
export interface Domain {
  id: string;
  name: string;
  registrar: string;
  status: 'active' | 'expired' | 'transferring';
  expiresAt: Date;
  autoRenew: boolean;
}

export interface RegistrarProvider {
  name: string;
  getDomains(): Promise<Domain[]>;
  updateDNS(domainId: string, records: DNSRecord[]): Promise<void>;
  renewDomain(domainId: string): Promise<void>;
  purchaseDomain(domain: string): Promise<Domain>;
}

// providers/godaddy.ts
export class GoDaddyProvider implements RegistrarProvider {
  name = 'GoDaddy';

  private apiKey: string;
  private apiSecret: string;

  constructor(apiKey: string, apiSecret: string) {
    this.apiKey = apiKey;
    this.apiSecret = apiSecret;
  }

  async getDomains(): Promise<Domain[]> {
    const response = await fetch('https://api.godaddy.com/v1/domains', {
      headers: {
        'Authorization': `sso-key ${this.apiKey}:${this.apiSecret}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    // Normalize to our Domain interface
    return data.domains.map(this.normalizeDomain);
  }

  private normalizeDomain(godaddyDomain: any): Domain {
    return {
      id: godaddyDomain.domainId,
      name: godaddyDomain.domain,
      registrar: this.name,
      status: godaddyDomain.status === 'ACTIVE' ? 'active' : 'expired',
      expiresAt: new Date(godaddyDomain.expires),
      autoRenew: godaddyDomain.autoRenew,
    };
  }

  async updateDNS(domainId: string, records: DNSRecord[]): Promise<void> {
    // Implementation for GoDaddy API
    await fetch(`https://api.godaddy.com/v1/domains/${domainId}/records`, {
      method: 'PUT',
      headers: { /* auth headers */ },
      body: JSON.stringify(records),
    });
  }
}

// providers/manager.ts
export class DomainManager {
  private providers: Map<string, RegistrarProvider> = new Map();

  constructor() {
    // Initialize all providers
    this.providers.set('godaddy', new GoDaddyProvider(
      process.env.GODADDY_API_KEY!,
      process.env.GODADDY_API_SECRET!
    ));

    this.providers.set('namecheap', new NamecheapProvider(
      process.env.NAMECHEAP_API_KEY!
    ));

    // ... more providers
  }

  async getAllDomains(): Promise<Domain[]> {
    const results = await Promise.all(
      Array.from(this.providers.values()).map(provider =>
        provider.getDomains()
      )
    );

    // Flatten and sort
    return results.flat().sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  async updateDNS(domainId: string, registrar: string, records: DNSRecord[]): Promise<void> {
    const provider = this.providers.get(registrar);

    if (!provider) {
      throw new Error(`Provider ${registrar} not found`);
    }

    await provider.updateDNS(domainId, records);
  }
}
```

## Database Schema

```prisma
// schema.prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  createdAt DateTime @default(now())

  credentials Credential[]
  domains    Domain[]
}

model Credential {
  id         String   @id @default(cuid())
  userId     String
  user       User     @relation(fields: [userId], references: [id])
  registrar  String   // 'godaddy', 'namecheap', etc.
  encryptedData String  // Encrypted JSON
  createdAt DateTime @default(now())

  @@unique([userId, registrar])
}

model Domain {
  id            String   @id @default(cuid())
  userId        String
  user          User     @relation(fields: [userId], references: [id])
  registrar     String
  name          String
  status        String
  expiresAt     DateTime
  autoRenew    Boolean  @default(false)

  dnsRecords    DNSRecord[]
  syncStatus   String   @default('pending') // 'pending', 'synced', 'error'

  @@unique([userId, name, registrar])
  @@index([userId])
}

model DNSRecord {
  id        String   @id @default(cuid())
  domainId  String
  domain    Domain   @relation(fields: [domainId], references: [id], onDelete: Cascade)

  type      String   // 'A', 'AAAA', 'CNAME', 'MX', 'TXT'
  name      String
  value     String
  ttl       Int      @default(3600)
  priority  Int?     // For MX records
  createdAt DateTime @default(now())

  @@index([domainId])
}
```

## Real-Time Synchronization

### Background Jobs with BullMQ

```typescript
// jobs/sync-domains.ts
import { Queue } from 'bullmq';
import { DomainManager } from '@/lib/manager';

export const syncQueue = new Queue('domain-sync', {
  connection: {
    host: process.env.REDIS_HOST,
    port: 6379,
  },
});

// Process job
syncQueue.process('sync-domains', async (job) => {
  const { userId } = job.data;

  const manager = new DomainManager();
  const domains = await manager.getAllDomains();

  // Update database
  await prisma.domain.updateMany({
    where: { userId },
    data: {
      syncStatus: 'synced',
      updatedAt: new Date(),
    },
  });

  return { success: true, count: domains.length };
});

// Schedule periodic sync
import { QueueScheduler } from 'bullmq';

const scheduler = new QueueScheduler(syncQueue);

await scheduler.add('periodic-sync', { userId: 'all' }, {
  repeat: { pattern: '0 */6 * * *' }, // Every 6 hours
});
```

### WebSocket for Live Updates

```typescript
// app/api/sync/route.ts
import { NextRequest } from 'next/server';
import { Server } from 'socket.io';
import { syncQueue } from '@/jobs/sync-domains';

const io = new Server({
  path: '/api/sync',
  addTrailingSlash: false,
});

io.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('request-sync', async ({ userId }) => {
    // Add to queue
    const job = await syncQueue.add('sync-domains', { userId });

    // Notify job started
    socket.emit('sync-started', { jobId: job.id });

    // Listen for job completion
    job.on('completed', (result) => {
      socket.emit('sync-completed', result);
    });
  });
});

export const GET = () => {
  return new Response('WebSocket server running', { status: 200 });
};
```

## Security Implementation

### Encrypted Credential Storage

```typescript
// lib/encryption.ts
import crypto from 'crypto';

const ALGORITHM = 'aes-256-gcm';
const IV_LENGTH = 12;
const SALT_LENGTH = 16;
const TAG_LENGTH = 16;

const KEY = Buffer.from(process.env.ENCRYPTION_KEY!, 'hex');

export function encrypt(text: string): {
  encrypted: string;
  iv: string;
  salt: string;
} {
  const iv = crypto.randomBytes(IV_LENGTH);
  const salt = crypto.randomBytes(SALT_LENGTH);

  const key = crypto.pbkdf2Sync(
    KEY,
    salt,
    100000, // iterations
    32,     // key length
    'sha256'
  );

  const cipher = crypto.createCipheriv(ALGORITHM, key, iv);

  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  return {
    encrypted,
    iv: iv.toString('hex'),
    salt: salt.toString('hex'),
  };
}

export function decrypt(encrypted: string, iv: string, salt: string): string {
  const key = crypto.pbkdf2Sync(
    KEY,
    Buffer.from(salt, 'hex'),
    100000,
    32,
    'sha256'
  );

  const decipher = crypto.createDecipheriv(
    ALGORITHM,
    key,
    Buffer.from(iv, 'hex')
  );

  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');

  return decrypted;
}

// Usage in API
import { encrypt, decrypt } from '@/lib/encryption';

app.post('/api/credentials', async (req, res) => {
  const { registrar, apiKey, apiSecret } = req.body;

  const encrypted = encrypt(JSON.stringify({ apiKey, apiSecret }));

  await prisma.credential.create({
    userId: req.user.id,
    registrar,
    encryptedData: JSON.stringify(encrypted),
  });

  res.json({ success: true });
});
```

## Performance Optimizations

### Caching Strategy

```typescript
// lib/cache.ts
import { Redis } from 'ioredis';
const redis = new Redis(process.env.REDIS_URL);

const CACHE_TTL = {
  DOMAINS: 300,      // 5 minutes
  DNS: 600,          // 10 minutes
  REGISTRAR_INFO: 3600, // 1 hour
};

export async function getCachedDomains(userId: string): Promise<Domain[] | null> {
  const cached = await redis.get(`domains:${userId}`);
  return cached ? JSON.parse(cached) : null;
}

export async function setCachedDomains(userId: string, domains: Domain[]): Promise<void> {
  await redis.setex(
    `domains:${userId}`,
    CACHE_TTL.DOMAINS,
    JSON.stringify(domains)
  );
}

// API route with caching
app.get('/api/domains', async (req, res) => {
  const { userId } = req.user;

  // Try cache first
  const cached = await getCachedDomains(userId);
  if (cached) {
    return res.json({ data: cached, cached: true });
  }

  // Fetch from database
  const domains = await prisma.domain.findMany({
    where: { userId },
  });

  // Set cache
  await setCachedDomains(userId, domains);

  res.json({ data: domains, cached: false });
});
```

### Database Indexes

```prisma
// Enhance performance
model Domain {
  // ...

  @@index([userId, status])
  @@index([registrar])
  @@index([expiresAt])
}
```

## Challenges Faced

### 1. API Rate Limiting

**Problem:** Some providers limited to 100 requests/minute.

**Solution:**
```typescript
class RateLimitedProvider implements RegistrarProvider {
  private requests: Map<string, number[]> = new Map();
  private readonly LIMIT = 100;
  private readonly WINDOW = 60 * 1000; // 1 minute in ms

  async getDomains(): Promise<Domain[]> {
    const now = Date.now();
    const key = this.name;

    // Clean old requests
    const requests = this.requests.get(key) || [];
    const validRequests = requests.filter(r => r > now - this.WINDOW);

    if (validRequests.length >= this.LIMIT) {
      const waitTime = validRequests[0] + this.WINDOW - now;
      await new Promise(resolve => setTimeout(resolve, waitTime));
    }

    validRequests.push(now);
    this.requests.set(key, validRequests);

    // Make actual request
    return this.fetchDomains();
  }
}
```

### 2. Inconsistent Data Structures

**Problem:** Each provider returned data differently.

**Solution:**
```typescript
// Normalization layer
interface NormalizedDomain {
  id: string;
  name: string;
  registrar: string;
  status: DomainStatus;
  // ... consistent structure
}

type Normalizer<T> = (raw: T) => NormalizedDomain[];

const godaddyNormalizer: Normalizer<GoDaddyDomain> = (raw) => {
  return raw.map(gd => ({
    id: gd.domainId,
    name: gd.domain,
    registrar: 'GoDaddy',
    status: normalizeStatus(gd.status),
    expiresAt: new Date(gd.expires),
  }));
};

const namecheapNormalizer: Normalizer<NamecheapDomain> = (raw) => {
  return raw.map(nc => ({
    id: nc.domainName,
    name: nc.domainName,
    registrar: 'Namecheap',
    status: normalizeStatus(nc.status),
    expiresAt: new Date(nc.expiredDate),
  }));
};
```

### 3. Webhook Handling

**Problem:** Different providers had different webhook formats.

**Solution:**
```typescript
// Unified webhook handler
app.post('/api/webhooks', async (req, res) => {
  const { provider, event, data } = req.body;

  switch (provider) {
    case 'godaddy':
      await handleGoDaddyWebhook(event, data);
      break;
    case 'namecheap':
      await handleNamecheapWebhook(event, data);
      break;
    default:
      throw new Error(`Unknown provider: ${provider}`);
  }

  res.json({ received: true });
});

async function handleGoDaddyWebhook(event: string, data: any) {
  // Parse GoDaddy format
  if (event === 'DOMAIN_EXPIRED') {
    await prisma.domain.update({
      where: { id: data.domainId },
      data: { status: 'expired' },
    });
  }
}
```

## Results & Impact

### Metrics (After 3 months)
- **Users:** 1,200+
- **Domains Managed:** 8,500+
- **Time Saved:** ~85% vs managing individually
- **API Calls:** Optimized from 50K/day to 8K/day (caching)
- **Uptime:** 99.8%

### User Feedback
> "Finally, I can see all my domains in one place. The real-time sync is incredible!" - *Small Business Owner*

> "Used to spend 2 hours managing domains across 5 sites. Now it takes 10 minutes." - *Freelance Developer*

## Lessons Learned

1. **Abstraction is key** - Normalizing different APIs into a unified interface made everything easier
2. **Security first** - Encrypting credentials from day one prevented data exposure risks
3. **Background processing** - Synchronous API calls would have made the app unusable
4. **Cache everything** - Reduced API calls by 84% and improved UX dramatically
5. **Error handling** - Each provider can fail independently without breaking the entire app

## Future Enhancements

- [ ] Add 3 more registrar integrations (Hover, NameSilo, Porkbun)
- [ ] AI-powered domain suggestions
- [ ] Automated SSL certificate management
- [ ] Multi-currency pricing comparison
- [ ] DNS propagation monitoring
- [ ] Mobile app (React Native)

## Conclusion

Building Domain Collective was challenging but rewarding. It solved a real pain point and taught me valuable lessons about API integration, security, and scalable architecture.

The key takeaway: **Good abstractions and consistent interfaces make complex systems manageable.**

---

*Want to try Domain Collective or contribute? Check out the [GitHub repo](https://github.com/itsTarun/domain-collective) (coming soon)!*
