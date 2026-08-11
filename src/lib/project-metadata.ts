import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, TWITTER_HANDLE } from "./site-config";

type CreateProjectMetadataParams = {
	title: string;
	description: string;
	path: string;
	ogTitle: string;
	ogDescription: string;
	twitterTitle?: string;
	twitterDescription?: string;
};

/**
 * Note the deliberate absence of `images`. Every project route ships its own
 * opengraph-image.tsx, and Next only falls back to that file convention when
 * the metadata object does not declare `images` itself — declaring it here
 * meant the generated 1200x630 cards were built and then thrown away in favour
 * of raw screenshots whose real dimensions did not match the declared size.
 */
export function createProjectMetadata({
	title,
	description,
	path,
	ogTitle,
	ogDescription,
	twitterTitle = ogTitle,
	twitterDescription = ogDescription,
}: CreateProjectMetadataParams): Metadata {
	const absoluteUrl = `${SITE_URL}${path}`;

	return {
		title,
		description,
		alternates: {
			canonical: absoluteUrl,
		},
		openGraph: {
			type: "website",
			locale: "en_US",
			url: absoluteUrl,
			title: ogTitle,
			description: ogDescription,
			siteName: SITE_NAME,
		},
		twitter: {
			card: "summary_large_image",
			title: twitterTitle,
			description: twitterDescription,
			creator: TWITTER_HANDLE,
			site: TWITTER_HANDLE,
		},
	};
}
