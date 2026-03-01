import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About - Tarun Sharma",
	description:
		"Mobile app developer with 7+ years experience in iOS and Flutter. Currently building Chargespot and Domain Collective.",
};

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
