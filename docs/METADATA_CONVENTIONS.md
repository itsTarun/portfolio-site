# Project Page Metadata Conventions

Use these conventions for every case-study page under `src/app/projects/**/page.tsx`.

## Required metadata fields

- `title`
- `description`
- `alternates.canonical`
- `openGraph`:
  - `type`
  - `url`
  - `title`
  - `description`
  - `siteName`
  - `images[]` with `url`, `width`, `height`, `alt`
- `twitter`:
  - `card`
  - `title`
  - `description`
  - `images[]`

## Canonical and OG URL rules

- Canonical URLs must be absolute production URLs (`https://itstarun.fyi/...`).
- Open Graph and Twitter metadata must map to the same route-level content as the canonical URL.
- If page-specific OG imagery is referenced, the corresponding `opengraph-image.tsx` route must exist.

## Schema alignment

- If a project page includes schema components (`CreativeWorkSchema`, `BreadcrumbSchema`), schema URLs and metadata URLs must match.
- Never advertise behavior in schema that the route does not implement.
