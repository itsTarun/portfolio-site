# Portfolio Bug Fixes and Improvements Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Fix layout and navigation issues across the portfolio, refine the neo-brutalist aesthetic of the project navigation, and expand the OpenTribe case study data.

**Architecture:** Modifying existing Next.js App Router components (`page.tsx` and `hero-section.tsx`, `next-project-nav.tsx`). Following the neo-brutalist Tailwind styling (`neo-panel`, `border-border`, `uppercase tracking-wider`).

**Tech Stack:** Next.js 15, React 19, Tailwind CSS, Framer Motion, Lucide React.

---

### Task 1: Fix Home Hero Section

**Files:**
- Modify: `src/components/home/hero-section.tsx`

**Step 1: Remove the profile image component**
Remove the `<Image>` block containing the headshot. Adjust the wrapping grid classes from `lg:grid-cols-[1.1fr_0.9fr]` to perhaps simply removing the Image container and leaving the Impact board.
```tsx
// Remove this entirely:
<div className="neo-panel overflow-hidden p-2">
	<Image
		src="/images/headshot.webp"
		alt="Tarun Sharma - Mobile App Developer"
		...
	/>
</div>
```

**Step 2: Commit**
```bash
git add src/components/home/hero-section.tsx
git commit -m "fix(home): remove profile image from hero section"
```

---

### Task 2: Standardize Projects Page

**Files:**
- Modify: `src/app/projects/page.tsx`

**Step 1: Update Flagship Projects Data**
Add `liveUrl: "https://domaincollective.io/"` to the `domain-collective` object. Remove `secondaryUrl` and `secondaryLabel` from all projects.

**Step 2: Update Card Action Buttons**
Render `View Case Study` pointing to `/projects/${project.id}` and `View Live` pointing to `project.liveUrl`.

**Step 3: Commit**
```bash
git add src/app/projects/page.tsx
git commit -m "fix(projects): standardize action buttons and add domain collective live URL"
```

---

### Task 3: Remove Back Links and Add Spacing

**Files:**
- Modify: `src/app/projects/chargespot/page.tsx`
- Modify: `src/app/projects/opentribe/page.tsx`
- Modify: `src/app/projects/domain-collective/page.tsx`

**Step 1: Remove Back Links**
Remove the `← Back to all projects` link block from all three files.

**Step 2: Fix Chargespot Results Spacing**
In `chargespot/page.tsx`, change `<div className="neo-panel p-8">` for Results to `<div className="mb-12 neo-panel p-8">`.

**Step 3: Add NextProjectNav to Chargespot**
Replace the hardcoded `<div className="flex justify-center gap-4">...` link with:
```tsx
<NextProjectNav nextProject={{ title: "OpenTribe", slug: "opentribe" }} />
```

**Step 4: Commit**
```bash
git add src/app/projects/chargespot/page.tsx src/app/projects/opentribe/page.tsx src/app/projects/domain-collective/page.tsx
git commit -m "fix(projects): remove back links and fix chargespot bottom spacing"
```

---

### Task 4: Refactor NextProjectNav

**Files:**
- Modify: `src/components/projects/next-project-nav.tsx`

**Step 1: Rewrite component for Neo-Brutalist Layout**
Replace the truncated Buttons with full-width clickable `neo-panel`-style blocks. Remove the nested `container` since it is already inside `max-w-5xl` in the parent pages.

```tsx
export function NextProjectNav({ nextProject, previousProject }: NextProjectNavProps) {
	return (
		<nav className="mt-12 pt-8 border-t-2 border-border grid grid-cols-1 sm:grid-cols-2 gap-4">
			{previousProject ? (
				<Link href={toProjectRoute(previousProject.slug)} className="neo-panel p-6 hover:bg-accent transition-colors group flex flex-col items-start">
					<span className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2 mb-3">
						<ArrowRight className="h-4 w-4 rotate-180" /> Previous
					</span>
					<span className="text-xl font-semibold group-hover:underline">
						{previousProject.title}
					</span>
				</Link>
			) : <div />}
			{nextProject && (
				<Link href={toProjectRoute(nextProject.slug)} className="neo-panel p-6 hover:bg-accent transition-colors group flex flex-col items-end text-right">
					<span className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2 mb-3">
						Next <ArrowRight className="h-4 w-4" />
					</span>
					<span className="text-xl font-semibold group-hover:underline">
						{nextProject.title}
					</span>
				</Link>
			)}
		</nav>
	);
}
```

**Step 2: Commit**
```bash
git add src/components/projects/next-project-nav.tsx
git commit -m "fix(projects): refactor NextProjectNav to spacious neo-brutalist blocks"
```

---

### Task 5: Expand OpenTribe Data

**Files:**
- Modify: `src/app/projects/opentribe/page.tsx`

**Step 1: Add Content Sections**
Add comprehensive "Why OpenTribe?", "Key Features", "Technologies Used", and "Results" sections to mirror the layout of `domain-collective/page.tsx`. Use the context from `src/app/projects/page.tsx` to populate the feature lists.

**Step 2: Commit**
```bash
git add src/app/projects/opentribe/page.tsx
git commit -m "feat(projects): expand OpenTribe case study content"
```
