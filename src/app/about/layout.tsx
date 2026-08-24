import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, TWITTER_HANDLE } from "@/lib/site-config";

const canonical = `${SITE_URL}/about`;
const description =
	"Mobile developer with 7+ years in iOS and Flutter, based in Delhi. Currently building Chargespot and Domain Collective. Full experience, skills, and resume.";
// The root title template appends " | Tarun Sharma"; social cards get no
// template, so they carry the name themselves.
const socialTitle = "About Tarun Sharma - iOS and Flutter Developer";

export const metadata: Metadata = {
	title: "About - iOS and Flutter Developer in Delhi",
	description,
	alternates: {
		canonical,
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: canonical,
		title: socialTitle,
		description,
		siteName: SITE_NAME,
	},
	twitter: {
		card: "summary_large_image",
		title: socialTitle,
		description,
		creator: TWITTER_HANDLE,
		site: TWITTER_HANDLE,
	},
};

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
