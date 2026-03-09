import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Projects - Tarun Sharma",
	description:
		"Flagship projects in iOS, Flutter, and full-stack development. Case studies for Chargespot, OpenTribe, and Domain Collective.",
};

export default function ProjectsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
