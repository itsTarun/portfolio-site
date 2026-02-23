# Internal Link Smoke Checks

This project includes a deterministic internal-link smoke checker.

## Run locally

1. Build the app:

```bash
npm run build
```

2. Run link checks:

```bash
npm run test:links
```

The script starts `next start`, crawls internal links from core routes, and fails on any `>= 400` status.

## Core routes covered

- `/`
- `/projects`
- `/projects/chargespot`
- `/projects/domain-collective`
- `/projects/opentribe`
- `/blog`
- `/privacy`

## Verify failure behavior intentionally

You can force-check an intentionally invalid route:

```bash
INTERNAL_LINK_EXTRA_ROUTES=/__intentionally-broken npm run test:links
```

Expected result: command exits with failure and reports the broken route.
