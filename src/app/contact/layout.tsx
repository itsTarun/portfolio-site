import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact | Tarun - Full Stack Developer",
	description:
		"Get in touch with Tarun - Full Stack Developer. Send a message or connect via social media.",
	alternates: {
		canonical: "https://itstarun.fyi/contact",
	},
};

export default function ContactLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
