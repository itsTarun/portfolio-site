# P1 Issues Progress Tracker (#3-#14)

## P1 Scope

| Issue | Title | Track | Todo | In Progress | In Review | Done | Blocked |
|---|---|---|---|---|---|---|---|
| #3 | Fix broken OpenTribe project route and internal navigation | A |  |  |  | ✅ |  |
| #4 | Standardize project page metadata and fix missing OG image routes | C |  |  |  | ✅ |  |
| #5 | Expand sitemap coverage for project detail and policy pages | A |  |  |  | ✅ |  |
| #6 | Fix blog markdown rendering pipeline and harden content output | B |  |  |  | ✅ |  |
| #7 | Fix invalid Link/Button nesting in homepage CTA section | C |  |  |  | ✅ |  |
| #8 | Align privacy policy claims with actual app implementation | C |  |  |  | ✅ |  |
| #9 | Remove any-casts from project navigation and enforce typed slugs | A |  |  |  | ✅ |  |
| #10 | Add CI internal-link smoke checks for core site routes | A |  |  |  | ✅ |  |
| #11 | Improve landmark accessibility: single main region + skip link | B |  |  |  | ✅ |  |
| #12 | Harden header navigation accessibility and keyboard behavior | C |  |  |  | ✅ |  |
| #13 | Optimize blog routes for static generation (remove force-dynamic) | B |  |  |  | ✅ |  |
| #14 | Fix WebSite SearchAction schema mismatch with blog behavior | B |  |  |  | ✅ |  |

## Track Assignment

| Track | Branch | Sequence |
|---|---|---|
| A: Routing + Type Safety + Link Guardrails | `p1-routing-guardrails` | #3 → #9 → #5 → #10 |
| B: Blog Rendering + Landmark + SEO Behavior | `p1-blog-seo-core` | #6 → #11 → #14 → #13 |
| C: A11y UI + Metadata + Compliance Copy | `p1-accessibility-metadata-policy` | #12 → #7 → #4 → #8 |

## PR Links

| Issue | Planned Branch | PR URL |
|---|---|---|
| #3 | `p1-routing-guardrails` | _TBD_ |
| #4 | `p1-accessibility-metadata-policy` | _TBD_ |
| #5 | `p1-routing-guardrails` | _TBD_ |
| #6 | `p1-blog-seo-core` | _TBD_ |
| #7 | `p1-accessibility-metadata-policy` | _TBD_ |
| #8 | `p1-accessibility-metadata-policy` | _TBD_ |
| #9 | `p1-routing-guardrails` | _TBD_ |
| #10 | `p1-routing-guardrails` | _TBD_ |
| #11 | `p1-blog-seo-core` | _TBD_ |
| #12 | `p1-accessibility-metadata-policy` | _TBD_ |
| #13 | `p1-blog-seo-core` | _TBD_ |
| #14 | `p1-blog-seo-core` | _TBD_ |

## Validation Log

| Timestamp (UTC) | Command | Result |
|---|---|---|
| 2026-02-21 15:15:08 UTC | `npm run lint` | ✅ Pass |
| 2026-02-21 15:15:08 UTC | `npm run test` | ✅ Pass (3 files, 5 tests) |
| 2026-02-21 15:15:08 UTC | `npm run build` | ✅ Pass (`/blog` static ISR, `/blog/[slug]` SSG with `generateStaticParams`) |
| 2026-02-21 15:15:08 UTC | `npm run test:links` | ✅ Pass (16 internal routes checked) |

## Daily Updates

### 2026-02-21

- Implemented P1 changes for issues #3-#14 in local workspace.
- Added internal-link smoke test script and CI workflow.
- Added documentation for link checks, metadata conventions, and this tracker.
- Verified all quality gates: lint, tests, build, and link smoke checks.
- Confirmed guardrail failure behavior with `INTERNAL_LINK_EXTRA_ROUTES=/__intentionally-broken npm run test:links` (expected 404 failure).
