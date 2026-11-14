import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, TWITTER_HANDLE } from "@/lib/site-config";

const canonical = `${SITE_URL}/about`;
const description =
	"Mobile & Full-Stack Engineer with 8+ years building iOS, Flutter, and web applications, based in Delhi. Active work on Chargespot and full-stack platforms. Full experience, skills, and resume.";
// The root title template appends " | Tarun"; social cards get no
// template, so they carry the name themselves.
const socialTitle = "About Tarun - Mobile & Full-Stack Engineer";

export const metadata: Metadata = {
	title: "About - Mobile & Full-Stack Engineer in Delhi",
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
