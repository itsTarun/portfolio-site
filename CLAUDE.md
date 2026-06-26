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

Run a single test file: `pnpm test src/lib/blog-utils.test.ts`

Internal link smoke test requires `pnpm build` first, then `pnpm test:links`. It starts `next start`, crawls core routes, and fails on any `>= 400` status.

## Architecture

**Framework:** Next.js App Router (React 19). All routes live under `src/app/`. Project uses the `@` path alias pointing to `src/`.

**Blog system:** Posts are Markdown files under `src/content/blog/*.md` with gray-matter frontmatter (`title`, `date`, `excerpt`, `tags`, `category`, `featured`). `src/lib/load-blog-posts.ts` reads and parses them server-side; `src/lib/blog-utils.ts` contains the `BlogPost`/`BlogFrontmatter` types and pure utility functions. Markdown is rendered to HTML via the `unified`/`remark`/`rehype` pipeline in `src/lib/render-markdown.ts`.

**Project data:** All project metadata lives in `src/config/projects.ts` as the `PROJECTS` record. Project pages under `src/app/projects/[slug]/` consume this.

**OG image and metadata helpers:** Shared constants (`OG_IMAGE_RUNTIME`, `OG_IMAGE_SIZE`, `OG_IMAGE_CONTENT_TYPE`) are in `src/lib/og-image-constants.ts`. Page-level OG images use `createPageOgImage()` from `src/lib/page-og-image.tsx`; project OG images use `src/lib/project-og-image.tsx`. Structured metadata for project pages uses `createProjectMetadata()` from `src/lib/project-metadata.ts`. See `docs/METADATA_CONVENTIONS.md` for required fields and canonical URL rules.

**Site config:** `src/lib/site-config.ts` is the single source for `SITE_URL`, `SITE_NAME`, `SITE_DESCRIPTION`, `CONTACT_EMAIL`, and `SOCIAL_LINKS`. Import from here instead of hardcoding.

**Fonts:** `Bricolage_Grotesque` (CSS var `--font-display`) and `Instrument_Sans` (CSS var `--font-body`) loaded via `next/font/google` in `src/app/layout.tsx`.

**SEO:** JSON-LD schema components (`PersonSchema`, `OrganizationSchema`, `WebSiteSchema`, `BreadcrumbSchema`, `CreativeWorkSchema`) live in `src/components/seo/`.

## Linting and formatting

Biome handles both linting and formatting (not ESLint/Prettier). Config is in `biome.json`: tabs for indentation, double quotes for JS strings. Run `pnpm biome:fix` to auto-fix before committing.

## Tests

Vitest with no test framework (no jsdom). Tests sit alongside source files as `*.test.ts`. The `@` alias is configured in `vitest.config.ts`. Existing tests cover: `src/lib/blog-utils.test.ts`, `src/lib/render-markdown.test.ts`, `src/lib/utils.test.ts`, `src/lib/project-metadata.test.ts`, `src/lib/project-breadcrumbs.test.ts`, `src/app/sitemap.test.ts`, `vercel.test.ts`.

## Environment variables

```env
NEXT_PUBLIC_APP_URL=https://itstarun.fyi
RESEND_API_KEY=...
CONTACT_EMAIL=itstarun1994@gmail.com
NEXT_PUBLIC_GSC_VERIFICATION_CODE=...
```

Preview deployments on `droidsize-web.vercel.app` automatically get `noindex, nofollow` (detected in `src/app/layout.tsx`).
