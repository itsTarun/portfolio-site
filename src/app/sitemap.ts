import type { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/lib/load-blog-posts";

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://itstarun.fyi";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const staticPages: MetadataRoute.Sitemap = [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1,
		},
		{
			url: `${baseUrl}/about`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/projects`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.9,
		},
		{
			url: `${baseUrl}/blog`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/contact`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.7,
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
