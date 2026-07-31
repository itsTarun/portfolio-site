import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
	title: "Contact",
	description:
		"Get in touch for iOS development, Flutter apps, or full-stack projects. Open to collaboration and contract work.",
	alternates: {
		canonical: `${SITE_URL}/contact`,
	},
};

export default function ContactLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
