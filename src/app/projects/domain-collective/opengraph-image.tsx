import { createProjectOgImage } from "@/lib/project-og-image";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
	return createProjectOgImage({
		title: "Domain Collective",
		description:
			"Unified domain management across GoDaddy, Namecheap, Gandi, and more",
		backgroundColor: "#0f172a",
		backgroundImage: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
		descriptionColor: "#94a3b8",
		titleFontSize: 72,
		descriptionFontSize: 28,
		descriptionLineHeight: 1.4,
	});
}
