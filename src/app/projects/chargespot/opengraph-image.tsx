import { createProjectOgImage } from "@/lib/project-og-image";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
	return createProjectOgImage({
		title: "Chargespot",
		description:
			"EV charging platform with real-time station discovery, route planning, and live in-app charging flows.",
		badge: "Live on iOS & Android",
		pathLabel: "/projects/chargespot",
		footerText: "Flutter  ·  App Store  ·  Google Play  ·  chargespot.app",
		footerRightText: "Case Study",
		accentColor: "#22c55e",
		titleFontSize: 78,
		visualVariant: "mobile",
		panelTitle: "Chargespot EV",
		panelRows: [
			{ label: "iOS App", value: "App Store Live", live: true },
			{ label: "Android App", value: "Google Play Live", live: true },
			{ label: "Extensions", value: "WidgetKit · CarPlay" },
		],
	});
}
