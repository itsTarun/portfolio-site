import { createProjectOgImage } from "@/lib/project-og-image";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
	return createProjectOgImage({
		title: "Repo Press",
		description:
			"Git-native MDX editing — your content, your history, your rules.",
		backgroundColor: "#0a0a0f",
		backgroundImage: "linear-gradient(135deg, #0a0a0f 0%, #141d2b 100%)",
		descriptionColor: "#94a3b8",
		titleFontSize: 92,
		descriptionFontSize: 30,
		descriptionLineHeight: 1.3,
	});
}
