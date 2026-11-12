import { createPageOgImage } from "@/lib/page-og-image";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
	return createPageOgImage({
		title: "About Me",
		subtitle:
			"Mobile & Full-Stack Engineer focused on iOS, Flutter, and web architecture with 8+ years shipping production apps.",
		badge: "8+ Years · Since 2018",
		pathLabel: "/about",
		footerText: "Swift  ·  Dart / Flutter  ·  TypeScript  ·  Node.js",
		footerRightText: "5 Teams · 3 Platforms",
		titleFontSize: 78,
		visualVariant: "hybrid",
		panelTitle: "Engineering",
		panelRows: [
			{ label: "Mobile Apps", value: "iOS & Flutter", live: true },
			{ label: "Web Platforms", value: "Next.js · Node" },
		],
		floatingMetrics: [
			{ value: "5", label: "Product Teams" },
			{ value: "3", label: "Platforms" },
		],
	});
}
