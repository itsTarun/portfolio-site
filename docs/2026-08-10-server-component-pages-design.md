# Server-component pages with CSS entrance animations

**Date:** 2026-08-10
**Origin:** Google Search Console SEO audit, finding #14 — pages are fully
client components; `/about` (and the others) render blank HTML until JS
hydrates and the Framer Motion entrance runs. Real LCP/INP cost, and crawlers
that don't execute JS see no content.

## Goal

Content for `/`, `/about`, `/projects`, and `/contact` renders in the initial
HTML. Entrance animations are preserved in feel (fade + rise) but no longer
gate visibility on hydration.

## Approach (approved)

Server components everywhere; entrance animation moves to CSS.

### New CSS utility (`src/app/globals.css`)

- One `rise` keyframe: `opacity 0 → 1`, `translateY(20px) → 0`.
- `.animate-rise` class: `animation: rise 0.5s ease-out backwards`.
- Stagger via inline `style={{ animationDelay: "…ms" }}`.
- `backwards` fill means content is visible whenever the animation is not
  running — no blank state, no JS dependency.
- The existing global `prefers-reduced-motion: reduce` block already zeroes
  all animation durations; no extra guard needed.

### Per page

| File | Change |
|---|---|
| `src/app/about/page.tsx` | Drop `"use client"` + framer. `animate` blocks → `animate-rise` divs; `whileInView` blocks → wrap in existing `ScrollReveal`. |
| `src/app/projects/page.tsx` | Same; card stagger via inline `animationDelay` (index × 80ms). |
| `src/app/page.tsx` + `src/components/home/*` | Page loses `"use client"` (trivial). Hero entrance → `animate-rise`; `AnimatedCounter` remains a client island inside it. Timeline/Projects/CTA `whileInView` → `ScrollReveal`. |
| `src/app/contact/page.tsx` | Split: page becomes a server component (left column, layout, `animate-rise`); form (state, fetch, success panel) extracted to new client component `src/app/contact/contact-form.tsx`. |

### Reused pieces

- `src/components/animation/scroll-reveal.tsx` — existing SSR-safe client
  wrapper: children are server-rendered and visible by default; it only hides
  and reveals elements after JS confirms motion is OK and the element is
  off-screen. This is the only in-view mechanism; no new one is written.

### Out of scope

- Site chrome keeps Framer Motion: header, footer, scroll-progress,
  animated-counter, not-found. The `framer-motion` dependency stays.
- Project detail pages (`/projects/[slug]`) — already server-rendered.

## Acceptance

1. `curl` of each built route (`next start`) contains the page `h1` text in
   raw HTML: `/` ("Mobile apps that feel calm"), `/about` ("Building mobile
   products"), `/projects` ("Flagship projects"), `/contact` ("Let's work
   together").
2. `pnpm build` — clean, still 17 static pages.
3. `pnpm test` — all green.
4. `pnpm biome:check` — clean (4 pre-existing `!important` warnings in
   globals.css are expected).
5. Contact form still submits (client island unchanged in behaviour).
