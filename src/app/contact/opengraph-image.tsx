import { createPageOgImage } from "@/lib/page-og-image";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
	return createPageOgImage({
		title: "Get In Touch",
		subtitle: "Have a question or want to work together?",
		accentText: "itstarun1994@gmail.com",
	});
}
