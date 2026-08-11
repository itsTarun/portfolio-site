# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev              # start dev server
pnpm build            # production build
pnpm test             # run Vitest unit tests
pnpm biome:check      # lint + format check (Biome)
pnpm biome:fix        # auto-fix lint/format issues
pnpm test:links       # internal link smoke test (requires build first)
```

Run a single test file: `pnpm test src/lib/project-metadata.test.ts`

Internal link smoke test requires `pnpm build` first, then `pnpm test:links`. It starts `next start`, crawls core routes, and fails on any `>= 400` status.

## Architecture

**Framework:** Next.js App Router (React 19). All routes live under `src/app/`. Project uses the `@` path alias pointing to `src/`.

**No blog.** It was removed in `8b08cc7` along with `src/content/blog/`, `src/lib/load-blog-posts.ts`, `src/lib/blog-utils.ts` and `src/lib/render-markdown.ts`. The `unified`/`remark`/`rehype` dependencies it needed are gone too. Its old URLs 308 to `/projects` via `redirects()` in `next.config.ts`. Do not go looking for a markdown pipeline — there isn't one.

**Project data:** All project metadata lives in `src/config/projects.ts` as the `PROJECTS` record. There is **no** `[slug]` dynamic route — each project is a static directory under `src/app/projects/` (`chargespot`, `domain-collective`, `opentribe`, `repo-press`) that consumes `PROJECTS` and calls `createProjectMetadata()`.

**Resume:** `/resume` (`src/app/resume/`) is the canonical resume. `resume-data.ts` holds the content as data and the page renders it as crawlable HTML, with `public/resume.pdf` embedded below as a preview and offered as a download. Add resume content to `resume-data.ts`, not to the JSX.

**OG image and metadata helpers:** Shared constants (`OG_IMAGE_RUNTIME`, `OG_IMAGE_SIZE`, `OG_IMAGE_CONTENT_TYPE`) are in `src/lib/og-image-constants.ts`. Page-level OG images use `createPageOgImage()` from `src/lib/page-og-image.tsx`; project OG images use `src/lib/project-og-image.tsx`. Structured metadata for project pages uses `createProjectMetadata()` from `src/lib/project-metadata.ts`. See `docs/METADATA_CONVENTIONS.md` for required fields and canonical URL rules.

**Site config:** `src/lib/site-config.ts` is the single source for `SITE_URL`, `SITE_NAME`, `SITE_DESCRIPTION`, `CONTACT_EMAIL`, and `SOCIAL_LINKS`. Import from here instead of hardcoding.

**Fonts:** `Bricolage_Grotesque` (CSS var `--font-display`) and `Instrument_Sans` (CSS var `--font-body`) loaded via `next/font/google` in `src/app/layout.tsx`.

**SEO:** JSON-LD schema components (`PersonSchema`, `OrganizationSchema`, `WebSiteSchema`, `BreadcrumbSchema`, `CreativeWorkSchema`) live in `src/components/seo/`.

## Linting and formatting

Biome handles both linting and formatting (not ESLint/Prettier). Config is in `biome.json`: tabs for indentation, double quotes for JS strings. Run `pnpm biome:fix` to auto-fix before committing.

## Tests

Vitest with no test framework (no jsdom). Tests sit alongside source files as `*.test.ts`. The `@` alias is configured in `vitest.config.ts`. Existing tests: `src/lib/project-metadata.test.ts`, `src/lib/project-breadcrumbs.test.ts`, `src/lib/site-config.test.ts`, `src/app/sitemap.test.ts`, `src/app/robots.test.ts`, `src/app/llms.txt/route.test.ts`, `vercel.test.ts`.

`vercel.test.ts` is the only place the security headers and CSP are checked — `next start` does not read `vercel.json`, so nothing else can catch a CSP regression before deploy. Its header comments explain why `script-src` allows `'unsafe-inline'` and why `object-src` is `'self'`; read them before changing either.

## Environment variables

```env
RESEND_API_KEY=...
CONTACT_EMAIL=itstarun1994@gmail.com
NEXT_PUBLIC_GSC_VERIFICATION_CODE=...
```

**Canonical host is `www`, and it is not an env var.** The apex 307s to `www`, so `SITE_URL` in `src/lib/site-config.ts` is `https://www.itstarun.fyi` — and that constant is the *only* definition. `robots.ts`, `sitemap.ts` and `llms-txt.ts` used to prefer a `NEXT_PUBLIC_APP_URL` env var, which let a stale dashboard value ship a sitemap pointing at one host while every canonical pointed at another. Do not reintroduce that override; change the domain by editing the constant.

Preview deployments get `noindex, nofollow` from `IS_PREVIEW_DEPLOYMENT` in `src/lib/site-config.ts`, which keys off `VERCEL_ENV` and therefore covers every preview URL shape (branch, commit hash, alias). It is **not** host-gated — the old `droidsize-web.vercel.app` rule in `vercel.json` was dead config for a different Vercel project and has been removed.
