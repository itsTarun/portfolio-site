import { createPageOgImage } from "@/lib/page-og-image";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
	return createPageOgImage({
		title: "Tarun",
		subtitle:
			"Mobile & Full-Stack Engineer building calm, fast, and dependable apps across iOS, Flutter, and the web.",
		badge: "Available for select work",
		footerText: "iOS  ·  Flutter  ·  Next.js  ·  TypeScript",
		footerRightText: "Based in India (IST)",
		titleFontSize: 88,
		subtitleFontSize: 27,
		visualVariant: "hybrid",
	});
}
