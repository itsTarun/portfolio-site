import { createProjectOgImage } from "@/lib/project-og-image";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
	return createProjectOgImage({
		title: "OpenTribe",
		description: "Talent marketplace for Polkadot ecosystem",
		backgroundColor: "#000000",
		backgroundImage: "linear-gradient(135deg, #000000 0%, #1a1a2e 100%)",
		descriptionColor: "#a78bfa",
		titleFontSize: 72,
		descriptionFontSize: 28,
		descriptionLineHeight: 1.4,
	});
}
