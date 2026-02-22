import type { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/lib/load-blog-posts";

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://itstarun.fyi";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const now = new Date();
	const staticPages: MetadataRoute.Sitemap = [
		{
			url: baseUrl,
			lastModified: now,
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: `${baseUrl}/about`,
			lastModified: now,
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/projects`,
			lastModified: now,
			changeFrequency: "weekly",
			priority: 0.9,
		},
		{
			url: `${baseUrl}/projects/chargespot`,
			lastModified: now,
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/projects/domain-collective`,
			lastModified: now,
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/projects/opentribe`,
			lastModified: now,
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/blog`,
			lastModified: now,
			changeFrequency: "weekly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/contact`,
			lastModified: now,
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${baseUrl}/privacy`,
			lastModified: now,
			changeFrequency: "yearly",
			priority: 0.6,
		},
	];

	const posts = await getAllBlogPosts();
	const postUrls = posts.map((post) => ({
		url: `${baseUrl}/blog/${post.id}`,
		lastModified: new Date(post.date),
		changeFrequency: "monthly" as const,
		priority: 0.6,
	}));

	return [...staticPages, ...postUrls];
}
