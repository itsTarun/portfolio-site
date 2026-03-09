import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact - Tarun Sharma",
	description:
		"Get in touch for iOS development, Flutter apps, or full-stack projects. Open to collaboration and contract work.",
};

export default function ContactLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
