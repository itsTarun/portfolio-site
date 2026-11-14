import { createPageOgImage } from "@/lib/page-og-image";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
	return createPageOgImage({
		eyebrow: "Privacy & Telemetry",
		title: "Privacy Policy",
		subtitle:
			"How itstarun.fyi handles contact inquiries, cookieless measurement, and analytics consent.",
		badge: "Transparency",
		pathLabel: "/privacy",
		footerText: "Minimal data  ·  Cookieless metrics  ·  Opt-in analytics",
		footerRightText: "itstarun.fyi",
		titleFontSize: 70,
		visualVariant: "web",
		panelTitle: "Privacy Controls",
		panelRows: [
			{ label: "Optional Analytics", value: "Opt-in Only", live: true },
			{ label: "Site Measurement", value: "Cookieless" },
			{ label: "Inquiries", value: "Direct Email" },
		],
	});
}
