import { createPageOgImage } from "@/lib/page-og-image";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
	return createPageOgImage({
		title: "Get In Touch",
		subtitle:
			"Open to mobile and full-stack contract work — remote or hybrid within 3h of IST.",
		badge: "Direct Inquiry",
		pathLabel: "/contact",
		accentText: "itstarun1994@gmail.com",
		accentColor: "#38bdf8",
		footerRightText: "Replies within 24h",
		titleFontSize: 74,
		visualVariant: "web",
	});
}
