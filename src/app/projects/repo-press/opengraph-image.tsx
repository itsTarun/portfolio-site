import { createProjectOgImage } from "@/lib/project-og-image";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
	return createProjectOgImage({
		title: "Repo Press",
		description:
			"Git-native MDX editing: publish straight from your repository with your content and history.",
		badge: "Developer Tool",
		pathLabel: "/projects/repo-press",
		footerText: "Next.js  ·  MDX  ·  GitHub API  ·  TypeScript",
		footerRightText: "Case Study",
		accentColor: "#f59e0b",
		titleFontSize: 74,
		visualVariant: "web",
		panelTitle: "repo-press.vercel.app",
		panelRows: [
			{ label: "Storage", value: "GitHub Native", live: true },
			{ label: "Editor", value: "Block MDX / MD" },
			{ label: "Ownership", value: "Zero Lock-in" },
		],
	});
}
