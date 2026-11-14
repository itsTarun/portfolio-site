import { createPageOgImage } from "@/lib/page-og-image";
import { CONTACT_EMAIL } from "@/lib/site-config";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
	return createPageOgImage({
		eyebrow: "Freelance & Contract",
		title: "Get In Touch",
		subtitle:
			"Open to mobile and full-stack contract work, remote or hybrid within 3h of IST.",
		badge: "Direct Inquiry",
		pathLabel: "/contact",
		accentText: CONTACT_EMAIL,
		accentColor: "#38bdf8",
		footerRightText: "Replies in 1 business day",
		titleFontSize: 74,
		visualVariant: "web",
		panelTitle: "Contract & Advisory",
		panelRows: [
			{ label: "Availability", value: "Open Now", live: true },
			{ label: "Timezone", value: "IST +/- 3h" },
			{ label: "Focus", value: "Mobile & Web" },
		],
	});
}
