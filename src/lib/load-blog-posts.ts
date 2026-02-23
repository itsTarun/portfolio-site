import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";
import { join } from "path";
import {
	type BlogFrontmatter,
	type BlogPost,
	calculateReadingTime,
} from "./blog-utils";
import { renderMarkdownToHtml } from "./render-markdown";

const BLOG_DIR = join(process.cwd(), "src/content/blog");

export async function getAllBlogPosts(): Promise<BlogPost[]> {
	try {
		const files = await readdir(BLOG_DIR);
		const markdownFiles = files.filter((file) => file.endsWith(".md"));

		const posts = await Promise.all(
			markdownFiles.map(async (filename) => {
				const filePath = join(BLOG_DIR, filename);
				const fileContent = await readFile(filePath, "utf-8");
				const { data, content } = matter(fileContent);
				const contentHtml = await renderMarkdownToHtml(content);

				const frontmatter = data as BlogFrontmatter;
				const slug = filename.replace(/\.md$/, "");
				const readingTime = calculateReadingTime(content);

				return {
					id: slug,
					title: frontmatter.title,
					date: frontmatter.date,
					excerpt: frontmatter.excerpt,
					contentMarkdown: content,
					contentHtml,
					tags: frontmatter.tags,
					category: frontmatter.category,
					featured: frontmatter.featured,
					readingTime,
				};
			}),
		);

		return posts.sort(
			(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
		);
	} catch (error) {
		console.error("Error loading blog posts:", error);
		return [];
	}
}

export async function getBlogPostBySlug(
	slug: string,
): Promise<BlogPost | null> {
	try {
		const filePath = join(BLOG_DIR, `${slug}.md`);
		const fileContent = await readFile(filePath, "utf-8");
		const { data, content } = matter(fileContent);
		const contentHtml = await renderMarkdownToHtml(content);

		const frontmatter = data as BlogFrontmatter;
		const readingTime = calculateReadingTime(content);

		return {
			id: slug,
			title: frontmatter.title,
			date: frontmatter.date,
			excerpt: frontmatter.excerpt,
			contentMarkdown: content,
			contentHtml,
			tags: frontmatter.tags,
			category: frontmatter.category,
			featured: frontmatter.featured,
			readingTime,
		};
	} catch (error) {
		console.error(`Error loading blog post ${slug}:`, error);
		return null;
	}
}

export async function getBlogCategories(): Promise<string[]> {
	const posts = await getAllBlogPosts();
	const categories = posts.map((post) => post.category);
	const uniqueCategories = Array.from(new Set(categories));
	return uniqueCategories.sort();
}

export async function getBlogTags(): Promise<string[]> {
	const posts = await getAllBlogPosts();
	const tags = posts.flatMap((post) => post.tags);
	const uniqueTags = Array.from(new Set(tags));
	return uniqueTags.sort();
}
