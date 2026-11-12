import { createPageOgImage } from "@/lib/page-og-image";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
	return createPageOgImage({
		title: "Privacy Policy",
		subtitle:
			"How itstarun.fyi handles contact inquiries, cookieless measurement, and analytics consent.",
		badge: "Transparency",
		pathLabel: "/privacy",
		footerText:
			"Minimal data  ·  Explicit consent  ·  Zero trackers by default",
		footerRightText: "itstarun.fyi",
		titleFontSize: 70,
		visualVariant: "web",
		panelTitle: "Privacy Controls",
		panelRows: [
			{ label: "Analytics", value: "Opt-in Only", live: true },
			{ label: "Cookies", value: "None by Default" },
			{ label: "Inquiries", value: "Direct Email" },
		],
	});
}
