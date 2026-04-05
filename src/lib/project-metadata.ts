import type { Metadata } from "next";
import { OG_IMAGE_SIZE, SITE_NAME, SITE_URL } from "./site-config";

type TwitterImageType = "string" | "object";

type CreateProjectMetadataParams = {
	title: string;
	description: string;
	path: string;
	ogTitle: string;
	ogDescription: string;
	imageUrl: string;
	imageAlt: string;
	twitterTitle?: string;
	twitterDescription?: string;
	twitterImageType?: TwitterImageType;
};

export function createProjectMetadata({
	title,
	description,
	path,
	ogTitle,
	ogDescription,
	imageUrl,
	imageAlt,
	twitterTitle = ogTitle,
	twitterDescription = ogDescription,
	twitterImageType = "string",
}: CreateProjectMetadataParams): Metadata {
	const absoluteUrl = `${SITE_URL}${path}`;
	const ogImage = {
		url: imageUrl,
		...OG_IMAGE_SIZE,
		alt: imageAlt,
	};

	return {
		title,
		description,
		alternates: {
			canonical: absoluteUrl,
		},
		openGraph: {
			type: "website",
			url: absoluteUrl,
			title: ogTitle,
			description: ogDescription,
			siteName: SITE_NAME,
			images: [ogImage],
		},
		twitter: {
			card: "summary_large_image",
			title: twitterTitle,
			description: twitterDescription,
			images: twitterImageType === "object" ? [ogImage] : [imageUrl],
		},
	};
}
