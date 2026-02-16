import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://itstarun.fyi";
	const isPreview = baseUrl.includes("droidsize-web.vercel.app");

	return {
		rules: [
			{
				userAgent: "*",
				allow: isPreview ? [] : "/",
				disallow: isPreview ? "/" : ["/api/", "/_next/"],
			},
		],
		sitemap: `${baseUrl}/sitemap.xml`,
	};
}
