# itstarun.fyi — Impeccable Redesign Baseline

**Goal:** AI slop → polished personal portfolio  
**Register:** Brand (design IS the product)  
**Identity:** Neo-brutalist — 2px borders, 6px offset shadows, 0 blur, 48px grid overlay  
**Fonts:** Bricolage Grotesque (display) + Instrument Sans (body)  
**Palette:** Engineering Blue (#1169D4) / Cool Structure (#EEF2F7) / Blueprint Ink (#161D27)

---

## Detector Scan

**Tool:** `node ~/.claude/skills/impeccable/scripts/detect.mjs --json`  
**Files scanned:** 27 TSX + CSS files across all routes and components  
**Result:** `[]` — 0 automated findings  
**Note:** `npx impeccable detect <url>` requires the package published to npm; running local detect.mjs is equivalent.

The detector is clean. All issues below are LLM-assessed (judgment-level tells the deterministic scanner cannot catch).

---

## Audit Health Score (baseline)

| Dimension | Score | Key Finding |
|-----------|-------|-------------|
| Accessibility | 3/4 | ScrollProgress no ARIA role; footer icons 40px < 44px |
| Performance | 3/4 | About: all Framer Motion animations on mount, not whileInView |
| Theming | 2/4 | About CTA uses rounded-lg outside design system; Contact uses shadcn Card |
| Responsive | 3/4 | Projects listing: 4 full-width stacked cards; no 2-col option |
| Anti-Patterns | 1/4 | 4 absolute-ban violations (see Critical below) |
| **Total** | **12/20** | Acceptable — significant work needed |

**Design Health Score (critique):** 30/40 — Good, address weak areas

---

## ✅ Already Fixed (this session, pre-baseline commit)

| Issue | Location | Status |
|-------|----------|--------|
| CTA body contrast: 4.23:1 → 5.26:1 | cta-section.tsx:49 | Fixed |
| ScrollReveal ships content at opacity:0 (SSR bug) | scroll-reveal.tsx | Fixed |
| AnimatedCounter ignores prefers-reduced-motion | animated-counter.tsx | Fixed |
| Eyebrow on Timeline, Projects, CTA sections | home/*.tsx | Fixed |
| 6 timeline entries → 3 + "Full timeline →" link | timeline-section.tsx | Fixed |

---

## 🔴 Critical — Must Fix

| # | Severity | Finding | Location | Command |
|---|----------|---------|----------|---------|
| C1 | P1 | **Hero-metric template** — "Results" grid (100%/50+/4.8) is the banned big-number-label pattern verbatim | `projects/chargespot/page.tsx:184` | `/impeccable distill chargespot` |
| C2 | P1 | **Identical card grid + icon tiles** — About skills: 3 identical cards (icon box + h3 + badge chips); two absolute bans in one component | `about/page.tsx:228` | `/impeccable distill about` |
| C3 | P1 | **Eyebrow on every page** — "About", "Contact", "Projects", "Mobile product" headers all carry eyebrows; 8 eyebrow instances site-wide after home fixes; every BlogPostCard has one | `about/page.tsx:178`, `contact/page.tsx:64`, `projects/page.tsx:169`, `chargespot/page.tsx:73`, `blog-post-card.tsx:26` | `/impeccable distill` |
| C4 | P1 | **Nested cards** — neo-panel (6px shadow) contains shadcn Card (4px shadow) in "Why Chargespot?" | `chargespot/page.tsx:131` | `/impeccable polish chargespot` |
| C5 | P1 | **About CTA card outside design system** — `rounded-lg border border-border` (1px, 0.35rem radius) breaks neo-brutalist system at bottom of highest-traffic interior page | `about/page.tsx:340` | `/impeccable polish about` |
| C6 | P1 | **About education icon: `rounded-full`** — circle container with 1px border; only circle on site | `about/page.tsx:318` | `/impeccable polish about` |
| C7 | P1 | **Contact page uses wrong component language** — shadcn Card/CardHeader/CardContent; looks like a different site from every other page | `contact/page.tsx` | `/impeccable polish contact` |

---

## 🟡 Polish — Should Fix

| # | Severity | Finding | Location | Command |
|---|----------|---------|----------|---------|
| P1 | P2 | **ScrollProgress missing ARIA** — no `role="progressbar"`, `aria-valuenow`, `aria-label`; invisible to screen readers | `layout/scroll-progress.tsx` | `/impeccable harden` |
| P2 | P2 | **ScrollProgress no rAF throttle** — scroll handler fires ~60/sec, triggers state updates on every event | `layout/scroll-progress.tsx:10` | `/impeccable optimize` |
| P3 | P2 | **About: all animations on mount, not whileInView** — `initial/animate` pattern fires all 6 experience cards + 3 skill cards + education simultaneously; below-fold work wasted | `about/page.tsx:165–355` | `/impeccable animate about` |
| P4 | P2 | **Footer social icons 40×40px** — 4px below WCAG 2.5.5 minimum touch target (44px) | `layout/footer.tsx:50` | `/impeccable adapt` |
| P5 | P2 | **Projects listing: Cards not neo-panels** — Card shadow is 4px, neo-panel is 6px; inconsistent visual weight | `projects/page.tsx` | `/impeccable polish projects` |
| P6 | P2 | **Projects listing: single-column only** — 4 full-width stacked cards; no 2-col grid option on desktop | `projects/page.tsx` | `/impeccable layout projects` |
| P7 | P2 | **Blog card eyebrow for category** — category chip on every blog card; redundant with tag chips | `blog/blog-post-card.tsx:26` | `/impeccable distill blog` |
| P8 | P3 | **`dangerouslySetInnerHTML` for project descriptions** — hardcoded now, XSS risk if ever made dynamic | `projects/page.tsx:252` | `/impeccable harden` |
| P9 | P3 | **No contact form** — Contact page is social links only; RESEND_API_KEY is configured; Resend is in package.json | `contact/page.tsx` | `/impeccable craft contact-form` |
| P10 | P3 | **Footer hover: `scale-105`** — generic scale hover; system pattern is translate+reduced-shadow | `layout/footer.tsx:51` | `/impeccable polish` |
| P11 | P3 | **`scroll-behavior: smooth` not in motion preference gate** — technically overridden by `!important` in reduce query, but semantically wrong position | `globals.css:130` | `/impeccable harden` |

---

## Systemic Issues

- **Two container languages**: `neo-panel` (6px shadow, 2px border, square) and shadcn `Card` (4px shadow, `rounded-none` custom) coexist with no rule for which to use. Contact and Projects listing pages use Card; everything else uses neo-panel. Result: inconsistent elevation and border weight.
- **Eyebrow class**: `.eyebrow` appears in 8 locations with no restraint rule. Should be max 1 per page surface, used only where it carries information the h1/h2 doesn't.
- **Uniform animation reflex**: `initial/animate` (not `whileInView`) is the default on all interior pages (About, Contact, Projects). Home uses `whileInView`. Inconsistent motion architecture.

---

## Phase 2 Plan

Execute in order. After each: run detector, note delta, commit `design(<command>): <description>`.

| Step | Command | Target | Scope |
|------|---------|--------|-------|
| 1 | `/impeccable distill about` | About page | Remove skills card grid+icons, about eyebrow, fix CTA card, fix education icon |
| 2 | `/impeccable distill chargespot` | Chargespot project | Kill hero metrics, remove nested cards |
| 3 | `/impeccable polish contact` | Contact page | neo-panel for cards, remove duplicate title + eyebrow |
| 4 | `/impeccable distill projects` | Projects listing | Eyebrow, neo-panel cards, 2-col grid |
| 5 | `/impeccable animate about` | About page | whileInView for all below-fold sections |
| 6 | `/impeccable harden` | Site-wide | ARIA on ScrollProgress, rAF throttle, touch targets, smooth-scroll gate |
| 7 | `/impeccable polish` | Site-wide | Footer hover, blog card eyebrow, final alignment |

Conditional:
- `/impeccable typeset` — only if typography feels inconsistent after distill passes
- `/impeccable colorize` — only if palette feels flat after structural fixes
- `/impeccable bolder` — only if visual confidence drops; current system has strong identity

---

## Anti-Pattern Kill List Status

| Pattern | Status |
|---------|--------|
| Inter / system-ui as sole typeface | ✅ Clean — Bricolage + Instrument Sans |
| Purple-to-blue gradient | ✅ Clean — none found |
| Cards nested inside cards | ❌ **Chargespot** `neo-panel > Card` |
| Gray text on colored backgrounds | ✅ Clean (CTA fixed) |
| Bounce / elastic easing | ✅ Clean — Framer Motion defaults used |
| Rounded-square icon tile above every heading | ❌ **About skills** 3× |
| Pure black / pure gray | ✅ Clean — HSL tokens, all tinted |
| Decorative drop shadows as fake depth | ✅ Structural use only (system-defined) |

---

## Blockers

_None yet._

---

## Changelog

| Commit | Change | Score Impact |
|--------|--------|-------------|
| `design(critique-landing)` | 5 P1/P2 fixes on home page | +3 estimated |
| `chore: impeccable baseline audit` | This document | Baseline captured |

---

_Last updated: 2026-06-26 — Baseline run_
