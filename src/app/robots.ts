import type { MetadataRoute } from "next";
import { IS_PREVIEW_DEPLOYMENT } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
	const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://itstarun.fyi";

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
