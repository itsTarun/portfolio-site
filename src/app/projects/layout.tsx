import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Projects - Tarun Sharma",
	description:
		"Flagship projects in iOS, Flutter, and full-stack development. Shipped products including Chargespot, OpenTribe, Domain Collective, and Repo Press.",
};

export default function ProjectsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
