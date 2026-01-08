# 🤖 AI Co-Pilot Configuration

## 📋 Project Overview

**Project:** Personal Portfolio Website
**Domain:** https://itstarun.fyi
**Repository:** https://github.com/itsTarun/portfolio-site
**Status:** In Development

**Description:** Modern, multi-page personal portfolio website with dark/light mode, motion design, and contact form using Next.js 14+ and pnpm.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16.1.1 (App Router)
- **Language:** TypeScript 5.9.3
- **Package Manager:** pnpm 10.15.0
- **Styling:** Tailwind CSS 4.1.18
- **Animations:** Framer Motion 12.24.11
- **Forms:** React Hook Form 7.70.0 + Zod 4.3.5 validation
- **Email:** Resend API
- **Theming:** next-themes 0.4.6
- **Icons:** Lucide React 0.562.0
- **Fonts:** next/font (Inter, Plus Jakarta Sans)
- **Hosting:** Vercel (free tier)
- **DNS:** Porkbun

---

## 📁 Project Structure

```
itstarun-fyi/
├── public/                    # Static assets (images, fonts)
├── src/
│   ├── app/                   # Next.js App Router pages
│   │   ├── layout.tsx         # Root layout with providers
│   │   ├── page.tsx           # Home page
│   │   ├── about/             # About page
│   │   ├── projects/          # Projects page
│   │   ├── contact/           # Contact page
│   │   └── globals.css        # Global styles
│   ├── components/            # Reusable components
│   │   ├── ui/                # Base UI components
│   │   ├── layout/            # Layout components (Header, Footer)
│   │   ├── sections/          # Page sections
│   │   └── animations/        # Animation wrappers
│   ├── lib/                   # Utility functions and configs
│   │   ├── utils.ts           # Helper functions
│   │   ├── validation.ts      # Zod schemas
│   │   └── email.ts           # Email API functions
│   └── types/                 # TypeScript type definitions
├── .env.local                 # Environment variables (not committed)
└── package.json
```

---

## 🚀 Development Commands

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Run production server
pnpm start

# Run linter
pnpm lint

# Run type checker
pnpm typecheck
```

---

## 🎨 Code Conventions

### TypeScript
- Use strict mode
- Prefer interfaces over types for object shapes
- Use explicit return types for functions
- Avoid `any` type - use `unknown` if needed

### React/Next.js
- Use functional components with hooks
- Prefer Server Components by default
- Use "use client" directive only when necessary
- Component names should be PascalCase
- File names should match component names

### Styling (Tailwind)
- Use utility classes for styling
- Extract repeated patterns to component-level classes
- Follow mobile-first responsive design
- Use semantic color tokens (slate-500, not blue-900)

### Animations (Framer Motion)
- Create reusable animation variants in separate files
- Use `AnimatePresence` for enter/exit animations
- Optimize with `layout` prop for layout animations
- Keep animations performant (60fps)

### Forms (React Hook Form + Zod)
- Define Zod schemas in `lib/validation.ts`
- Use `useForm` hook with resolver
- Implement client-side validation
- Show error messages inline

---

## 📝 Environment Variables

Required variables in `.env.local`:

```env
NEXT_PUBLIC_APP_URL=https://itstarun.fyi
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=itstarun1994@gmail.com
```

**Important:** Never commit `.env.local` or expose API keys in client-side code.

---

## 🎯 Key Features to Implement

### Core Pages
1. **Home** (`/`) - Hero section, brief intro, featured projects
2. **About** (`/about`) - Bio, skills, experience timeline, education
3. **Projects** (`/projects`) - Project gallery with filters
4. **Contact** (`/contact`) - Contact form with Resend email

### Global Features
- Dark/light mode toggle (next-themes)
- Responsive navigation (mobile hamburger menu)
- Smooth page transitions (Framer Motion)
- SEO optimization (metadata, sitemap, robots.txt)
- Analytics integration

### Design Principles
- Clean, minimalist aesthetic
- Smooth micro-interactions
- Accessible (WCAG AA compliant)
- Fast loading (Lighthouse 90+)
- Mobile-first responsive design

---

## 📦 Component Patterns

### Page Structure
```tsx
// src/app/example/page.tsx
import { PageHeader } from '@/components/layout/PageHeader'
import { ExampleSection } from '@/components/sections/ExampleSection'

export default function ExamplePage() {
  return (
    <main>
      <PageHeader title="Example" />
      <ExampleSection />
    </main>
  )
}
```

### Reusable Components
- Keep components small and focused
- Use composition over inheritance
- Accept props for customization
- Use TypeScript interfaces for props

### Data Fetching
- Server Components: Fetch data directly
- Client Components: Use `useEffect` or SWR for client-side fetching
- Static Content: Use `generateStaticParams` for SSG

---

## 🧪 Testing Strategy

- Unit tests for utility functions (Jest/Vitest)
- Component tests for key components (React Testing Library)
- E2E tests for critical flows (Playwright/Cypress)
- Visual regression tests (Chromatic/Percy)

---

## 📊 Performance Targets

- **Lighthouse Score:** 90+ across all metrics
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s
- **Time to Interactive:** < 3.5s
- **Cumulative Layout Shift:** < 0.1

---

## 🚢 Deployment

1. **Vercel:** Primary hosting platform
   - Auto-deploy on push to main
   - Preview deployments for PRs
   - Environment variables configured in dashboard

2. **DNS:** Managed via Porkbun
   - Domain: itstarun.fyi
   - Configured to point to Vercel

3. **Environment Variables:** Same in Vercel dashboard as `.env.local`

---

## 📚 Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind Docs:** https://tailwindcss.com/docs
- **Framer Motion:** https://www.framer.com/motion/
- **React Hook Form:** https://react-hook-form.com
- **Zod:** https://zod.dev

---

## 🔄 Development Workflow

1. Create feature branch from main
2. Make changes following conventions
3. Run `pnpm lint` and `pnpm build` to verify
4. Test locally with `pnpm dev`
5. Commit with clear, descriptive messages
6. Push and create PR
7. Review and merge to main
8. Vercel auto-deploys to production

---

## ⚠️ Important Notes

- Always run `pnpm build` before pushing to main
- Test responsive design on mobile/tablet/desktop
- Verify dark/light mode works correctly
- Check animations for performance
- Ensure accessibility features are implemented
- Never commit secrets or API keys

---

**Last Updated:** January 8, 2026
