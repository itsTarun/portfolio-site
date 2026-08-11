import type { MetadataRoute } from "next";
import { IS_PREVIEW_DEPLOYMENT, SITE_URL } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
	const baseUrl = SITE_URL;

	if (IS_PREVIEW_DEPLOYMENT) {
		return { rules: [{ userAgent: "*", disallow: "/" }] };
	}

	return {
		// /_next/ stays crawlable: blocking it hides the CSS and JS Google needs
		// to render the page.
		rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
		sitemap: `${baseUrl}/sitemap.xml`,
	};
}
