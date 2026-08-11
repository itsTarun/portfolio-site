import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, TWITTER_HANDLE } from "@/lib/site-config";

const canonical = `${SITE_URL}/contact`;
const description =
	"Open to iOS and Flutter contract work from July 2026, remote or hybrid within IST ±3h. Send a brief through the form, or email directly for a fast reply.";
const socialTitle = "Contact Tarun Sharma - iOS & Flutter Contract Work";

export const metadata: Metadata = {
	title: "Contact - Open to iOS & Flutter Contract Work",
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

export default function ContactLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
