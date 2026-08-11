import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, TWITTER_HANDLE } from "@/lib/site-config";

const canonical = `${SITE_URL}/projects`;
const description =
	"Flagship projects in iOS, Flutter, and full-stack development. Shipped products including Chargespot, OpenTribe, Domain Collective, and Repo Press.";
const socialTitle = "Projects - iOS, Flutter and Web Work by Tarun Sharma";

export const metadata: Metadata = {
	title: "Projects - Shipped iOS, Flutter and Web Work",
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

export default function ProjectsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
