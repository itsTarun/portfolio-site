import type { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/lib/load-blog-posts";

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://itstarun.fyi";

type StaticRouteConfig = {
	path: string;
	changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
	priority: number;
};

const STATIC_ROUTES: StaticRouteConfig[] = [
	{ path: "", changeFrequency: "monthly", priority: 1 },
	{ path: "/about", changeFrequency: "monthly", priority: 0.8 },
	{ path: "/projects", changeFrequency: "weekly", priority: 0.9 },
	{ path: "/projects/chargespot", changeFrequency: "monthly", priority: 0.8 },
	{
		path: "/projects/domain-collective",
		changeFrequency: "monthly",
		priority: 0.8,
	},
	{ path: "/projects/opentribe", changeFrequency: "monthly", priority: 0.8 },
	{ path: "/blog", changeFrequency: "weekly", priority: 0.8 },
	{ path: "/contact", changeFrequency: "monthly", priority: 0.7 },
	{ path: "/privacy", changeFrequency: "yearly", priority: 0.6 },
];

function buildStaticSitemapEntry(
	route: StaticRouteConfig,
	lastModified: Date,
): MetadataRoute.Sitemap[number] {
	return {
		url: `${baseUrl}${route.path}`,
		lastModified,
		changeFrequency: route.changeFrequency,
		priority: route.priority,
	};
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const now = new Date();
	const staticPages: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) =>
		buildStaticSitemapEntry(route, now),
	);

	const posts = await getAllBlogPosts();
	const postUrls = posts.map((post) => ({
		url: `${baseUrl}/blog/${post.id}`,
		lastModified: new Date(post.date),
		changeFrequency: "monthly" as const,
		priority: 0.6,
	}));

	return [...staticPages, ...postUrls];
}
