---
title: "API Design Best Practices for Modern Web Applications"
date: "2025-01-05"
excerpt: "Learn how to design RESTful and GraphQL APIs that are scalable, maintainable, and developer-friendly."
tags: ["api", "backend", "rest", "graphql", "architecture"]
category: "Backend"
---

# API Design Best Practices for Modern Web Applications

A well-designed API is the backbone of any successful application. Let me share best practices I've learned from building APIs for OpenTribe and Domain Collective.

## REST vs GraphQL: Choosing the Right Tool

### REST API

Best when:
- You need simple CRUD operations
- Caching is important
- You have many different clients
- Want to follow established conventions

**Example - User Endpoint:**
```typescript
// GET /api/users/:id
interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

app.get('/api/users/:id', async (req, res) => {
  const { id } = req.params;

  const user = await db.user.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      email: true,
      avatar: true,
    },
  });

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json(user);
});
```

### GraphQL API

Best when:
- Clients need flexible data fetching
- You have complex data relationships
- Want to avoid over/under-fetching
- Need real-time subscriptions

**Example - User Query:**
```graphql
type Query {
  user(id: ID!): User
}

type User {
  id: ID!
  name: String!
  email: String!
  avatar: String!
  posts: [Post!]!
  projects: [Project!]!
}

# Query
query GetUser($id: ID!) {
  user(id: $id) {
    id
    name
    email
    avatar
    posts {
      id
      title
      publishedAt
    }
  }
}
```

## REST API Best Practices

### 1. Use Meaningful HTTP Verbs

```typescript
// CRUD operations mapping
GET    /api/users        // List users
GET    /api/users/:id    // Get single user
POST   /api/users        // Create user
PUT    /api/users/:id    // Update user
DELETE /api/users/:id    // Delete user

// Not recommended
POST /api/users/delete/:id  // ❌ Wrong
GET  /api/users/create    // ❌ Wrong
```

### 2. Consistent Response Format

```typescript
// Success response
interface SuccessResponse<T> {
  success: true;
  data: T;
  message?: string;
}

// Error response
interface ErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    details?: unknown;
  };
}

// Usage
res.json({
  success: true,
  data: user,
  message: 'User created successfully'
});
```

### 3. Proper Status Codes

```typescript
const HttpStatus = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  UNPROCESSABLE_ENTITY: 422,
  INTERNAL_SERVER_ERROR: 500,
};

app.post('/api/users', async (req, res) => {
  try {
    const user = await createUser(req.body);
    res.status(HttpStatus.CREATED).json({ success: true, data: user });
  } catch (error) {
    if (error instanceof ValidationError) {
      res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
        success: false,
        error: { code: 'VALIDATION_ERROR', message: error.message }
      });
    } else {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: { code: 'INTERNAL_ERROR', message: 'Something went wrong' }
      });
    }
  }
});
```

### 4. Pagination

```typescript
// Query params: ?page=1&limit=20
interface PaginationParams {
  page: number;
  limit: number;
}

interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

app.get('/api/users', async (req, res) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 20;
  const skip = (page - 1) * limit;

  const [users, total] = await Promise.all([
    db.user.findMany({ skip, take: limit }),
    db.user.count()
  ]);

  res.json({
    data: users,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
      hasNext: skip + limit < total,
      hasPrev: page > 1,
    },
  });
});
```

### 5. Versioning

```typescript
// URL versioning (recommended)
app.use('/api/v1', v1Routes);
app.use('/api/v2', v2Routes);

// GET /api/v1/users
// GET /api/v2/users (with new features)
```

## GraphQL Best Practices

### 1. Schema First Design

```graphql
# schema.graphql
type Query {
  me: User
  user(id: ID!): User
  users(first: Int, after: String): UserConnection!
}

type Mutation {
  updateUser(input: UpdateUserInput!): User!
  deleteUser(id: ID!): DeleteUserPayload!
}
```

### 2. Input Validation

```graphql
input UpdateUserInput {
  name: String @constraint(minLength: 2, maxLength: 50)
  email: String! @constraint(format: "email")
  bio: String @constraint(maxLength: 500)
}
```

### 3. Error Handling

```typescript
// Custom error types
class AuthenticationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AuthenticationError';
  }
}

class ValidationError extends Error {
  constructor(message: string, public fields: Record<string, string>) {
    super(message);
    this.name = 'ValidationError';
  }
}

// In resolver
const resolvers = {
  Query: {
    user: async (_, { id }, { user }) => {
      if (!user) {
        throw new AuthenticationError('Not authenticated');
      }
      // ...
    },
  },
  Mutation: {
    updateUser: async (_, { input }, { user }) => {
      // Validate
      if (input.name && input.name.length < 2) {
        throw new ValidationError('Name too short', {
          name: 'Name must be at least 2 characters'
        });
      }
      // ...
    },
  },
};
```

## Security Best Practices

### 1. Authentication & Authorization

```typescript
// JWT middleware
interface AuthRequest extends Request {
  user?: JWTPayload;
}

export function authMiddleware(req: AuthRequest, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
}

// Protected route
app.get('/api/protected', authMiddleware, (req, res) => {
  res.json({ user: req.user });
});
```

### 2. Rate Limiting

```typescript
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests, please try again later',
});

app.use('/api/', limiter);
```

### 3. Input Sanitation

```typescript
import { z } from 'zod';

const userSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  bio: z.string().max(500).optional(),
});

app.post('/api/users', async (req, res) => {
  // Validate
  const result = userSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({ error: result.error });
  }

  // Sanitize (use validated data)
  const { name, email, bio } = result.data;

  // Process...
});
```

### 4. CORS Configuration

```typescript
import cors from 'cors';

app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(',') || '*',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
```

## Performance Optimization

### 1. Caching Strategy

```typescript
// Redis caching
import Redis from 'ioredis';
const redis = new Redis(process.env.REDIS_URL);

async function getCachedUser(id: string) {
  const cached = await redis.get(`user:${id}`);
  if (cached) {
    return JSON.parse(cached);
  }

  const user = await db.user.findUnique({ where: { id } });
  await redis.setex(`user:${id}`, 3600, JSON.stringify(user)); // 1 hour

  return user;
}
```

### 2. Database Query Optimization

```typescript
// Only select needed fields
const users = await db.user.findMany({
  select: {
    id: true,
    name: true,  // Not email if not needed
  },
  where: {
    active: true,
  },
  take: 20,
});

// Use indexes
const user = await db.user.findUnique({
  where: {
    email: email,  // Ensure email is indexed
  },
});
```

### 3. Compression

```typescript
import compression from 'compression';

app.use(compression({
  level: 6, // Balance between CPU and compression
  threshold: 1024, // Only compress responses > 1KB
}));
```

## Documentation

### OpenAPI/Swagger

```typescript
import { swaggerUi, specs } from 'swagger-ui-express';

const swaggerSpec = {
  definition: {
    info: {
      title: 'My API',
      version: '1.0.0',
    },
    securityDefinitions: {
      Bearer: {
        type: 'apiKey',
        name: 'Authorization',
        in: 'header',
      },
    },
  },
  apis: ['./routes/*.ts'], // Load all routes
};

app.use('/api-docs', swaggerUi.serve);
app.use('/api-docs.json', swaggerUi.setup);
```

## Testing

### Unit Tests

```typescript
import request from 'supertest';
import app from '../app';

describe('User API', () => {
  describe('POST /api/users', () => {
    it('should create user with valid data', async () => {
      const res = await request(app)
        .post('/api/users')
        .send({
          name: 'John Doe',
          email: 'john@example.com',
        })
        .expect(201);

      expect(res.body.success).toBe(true);
      expect(res.body.data.email).toBe('john@example.com');
    });

    it('should return 400 with invalid email', async () => {
      const res = await request(app)
        .post('/api/users')
        .send({
          name: 'John Doe',
          email: 'invalid-email',
        })
        .expect(400);

      expect(res.body.success).toBe(false);
    });
  });
});
```

## Conclusion

A great API is:
- ✅ **Consistent** - Predictable structure and behavior
- ✅ **Well-documented** - Easy to understand and use
- ✅ **Secure** - Protected against common attacks
- ✅ **Performant** - Fast and efficient
- ✅ **Scalable** - Handles growth gracefully

Start with these best practices, iterate based on real usage, and always listen to developer feedback.

Your API is the face of your backend - make it count!
