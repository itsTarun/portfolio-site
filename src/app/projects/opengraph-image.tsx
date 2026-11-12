import { createPageOgImage } from "@/lib/page-og-image";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
	return createPageOgImage({
		title: "Selected Work",
		subtitle:
			"Shipped iOS, Flutter, and full-stack products engineered for stable production releases.",
		badge: "Case Studies",
		pathLabel: "/projects",
		footerText: "Chargespot  ·  Domain Collective  ·  OpenTribe  ·  Repo Press",
		footerRightText: "4 Flagship Builds",
		titleFontSize: 76,
		visualVariant: "hybrid",
		panelTitle: "Shipped Work",
		panelRows: [
			{ label: "Chargespot", value: "iOS & Android", live: true },
			{ label: "Domain Collective", value: "Next.js · Redis" },
			{ label: "Repo Press", value: "Git MDX CMS" },
		],
		floatingMetrics: [
			{ value: "4", label: "Flagship Builds" },
			{ value: "Live", label: "Stores & Web" },
		],
	});
}
