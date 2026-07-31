import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
	title: "Projects",
	description:
		"Flagship projects in iOS, Flutter, and full-stack development. Shipped products including Chargespot, OpenTribe, Domain Collective, and Repo Press.",
	alternates: {
		canonical: `${SITE_URL}/projects`,
	},
};

export default function ProjectsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
