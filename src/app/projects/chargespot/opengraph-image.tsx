import { createProjectOgImage } from "@/lib/project-og-image";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
	return createProjectOgImage({
		title: "Chargespot",
		description:
			"EV charging platform with real-time station discovery, trip planning, and in-app charging flows.",
		backgroundColor: "#0a0a0a",
		backgroundImage: "linear-gradient(135deg, #0a0a0a 0%, #1f2937 100%)",
		descriptionColor: "#cbd5e1",
		titleFontSize: 92,
		descriptionFontSize: 30,
		descriptionLineHeight: 1.3,
	});
}
