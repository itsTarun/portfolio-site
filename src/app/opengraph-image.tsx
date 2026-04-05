import { createPageOgImage } from "@/lib/page-og-image";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
	return createPageOgImage({
		title: "Tarun",
		subtitle: "Mobile App Developer",
		subtitleFontSize: 32,
		titleMarginBottom: "16px",
	});
}
