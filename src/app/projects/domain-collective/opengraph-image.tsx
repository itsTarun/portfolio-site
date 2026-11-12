import { createProjectOgImage } from "@/lib/project-og-image";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
	return createProjectOgImage({
		title: "Domain Collective",
		description:
			"Unified domain management across GoDaddy, Namecheap, Gandi, and more from one dashboard.",
		badge: "Web Platform",
		pathLabel: "/projects/domain-collective",
		footerText: "Next.js  ·  TypeScript  ·  PostgreSQL  ·  BullMQ / Redis",
		footerRightText: "Case Study",
		accentColor: "#38bdf8",
		titleFontSize: 64,
		visualVariant: "web",
		panelTitle: "collective.domains",
		panelRows: [
			{ label: "Registrars", value: "GoDaddy · Gandi", live: true },
			{ label: "Sync Queue", value: "BullMQ · Redis" },
			{ label: "Portfolio", value: "Bulk Search & DNS" },
		],
	});
}
