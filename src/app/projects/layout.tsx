import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Projects | Tarun - Full Stack Developer",
	description:
		"View Tarun's projects including flagship applications like Chargespot, OpenTribe, and Domain Collective. Full Stack Developer specializing in modern web technologies.",
	alternates: {
		canonical: "https://itstarun.fyi/projects",
	},
};

export default function ProjectsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
