import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
	title: "About",
	description:
		"Mobile app developer with 7+ years experience in iOS and Flutter. Currently building Chargespot and Domain Collective.",
	alternates: {
		canonical: `${SITE_URL}/about`,
	},
};

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
