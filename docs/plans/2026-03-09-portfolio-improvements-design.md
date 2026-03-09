# Portfolio Improvements Design

## 1. Bug Fixes & Layout Updates

**Home Hero (`src/components/home/hero-section.tsx`)**:
- Remove the `<Image src="/images/headshot.webp">` component entirely to prevent vertical expansion of the hero section.
- Adjust the grid if necessary to accommodate the removal, leaving the "Impact board" neo-panel visible.

**Projects Page (`src/app/projects/page.tsx`)**:
- Standardize flagship project CTA buttons. Each project will have:
  - `View Live` button (pointing to `liveUrl`).
  - `View Case Study` button (pointing to `secondaryUrl` instead of "About").
- Ensure all 3 flagship projects (`chargespot`, `opentribe`, `domain-collective`) have a valid `liveUrl`.

**Project Detail Pages (`src/app/projects/[slug]/page.tsx`)**:
- Remove the "← Back to all projects" `Link` from all case study pages.
- Standardize the inclusion of the `<NextProjectNav>` component across all three projects, maintaining correct cyclic navigation.
  - Chargespot -> OpenTribe
  - OpenTribe -> Domain Collective -> Chargespot (or None/Back to Projects).

**NextProjectNav Refactor (`src/components/projects/next-project-nav.tsx`)**:
- Redesign the cramped buttons into spacious, neo-brutalist clickable blocks.
- Ensure proper separation between "Previous/Next" labels and project titles.
- Fix any nested `container mx-auto max-w-5xl` issues so the component spans appropriately inside the parent's layout.

**OpenTribe Expansion (`src/app/projects/opentribe/page.tsx`)**:
- Expand the content to match Domain Collective's depth.
- Add sections: "Why OpenTribe?", "Key Features", "What I Learned", and "Results".

## 2. Future Strategy: Authority Builder
- Transform the site into an engineering resource.
- Leverage existing markdown tools (`gray-matter`, `remark`, `rehype`) to publish deep-dive technical articles.
- Example content: "Achieving 99% Crash-Free Rates with Flutter", "Polkadot Grant Architecture".
- Link case studies directly to corresponding technical deep-dives to demonstrate thought leadership.
