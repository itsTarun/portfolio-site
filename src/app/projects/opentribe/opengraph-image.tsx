import { createProjectOgImage } from "@/lib/project-og-image";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
	return createProjectOgImage({
		title: "OpenTribe",
		description:
			"Talent marketplace connecting Web3 builders and bounties across the Polkadot ecosystem.",
		badge: "Web Marketplace",
		pathLabel: "/projects/opentribe",
		footerText: "Next.js  ·  React  ·  TypeScript  ·  Polkadot Ecosystem",
		footerRightText: "Case Study",
		accentColor: "#a78bfa",
		titleFontSize: 74,
		visualVariant: "web",
		panelTitle: "opentribe.io",
		panelRows: [
			{ label: "Ecosystem", value: "Polkadot", live: true },
			{ label: "Marketplace", value: "Talent & Teams" },
			{ label: "Identity", value: "Decentralized" },
		],
	});
}
