import { promises as fsPromises } from "fs";
import matter from "gray-matter";
import { Sparkles } from "lucide-react";
import { join } from "path";
import { PostCard } from "@/components/blog/blog-post-card";
import { CategoryFilter } from "@/components/blog/category-filter";
import { SearchBar } from "@/components/blog/search-bar";
import type { BlogFrontmatter, BlogPost } from "@/lib/blog-utils";
import {
	calculateReadingTime,
	getFeaturedPosts,
	getUniqueCategories,
} from "@/lib/blog-utils";

const CONTENT_DIR = join(process.cwd(), "src", "content", "blog");

async function getAllBlogPosts(): Promise<BlogPost[]> {
	try {
		const files = await fsPromises.readdir(CONTENT_DIR);
		const markdownFiles = files.filter((file) => file.endsWith(".md"));

		const posts: BlogPost[] = [];

		for (const file of markdownFiles) {
			const filePath = join(CONTENT_DIR, file);
			const fileContent = await fsPromises.readFile(filePath, "utf-8");
			const { data, content } = matter(fileContent);

			const frontmatter = data as BlogFrontmatter;
			const slug = file.replace(/\.md$/, "");
			const readingMinutes = calculateReadingTime(content);

			posts.push({
				id: slug,
				title: frontmatter.title,
				date: frontmatter.date,
				excerpt: frontmatter.excerpt,
				content,
				tags: frontmatter.tags || [],
				category: frontmatter.category,
				featured: frontmatter.featured,
				readingTime: readingMinutes,
			});
		}

		return posts.sort(
			(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
		);
	} catch (error) {
		console.error("Error reading blog posts:", error);
		return [];
	}
}

export default async function BlogPage() {
	const posts = await getAllBlogPosts();
	const categories = getUniqueCategories(posts);
	const featuredPosts = getFeaturedPosts(posts);

	return (
		<div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/50">
			<div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-7xl">
					<div className="mb-16 text-center">
						<div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-6 py-2 text-sm font-semibold text-primary">
							<Sparkles className="h-4 w-4" />
							<span>Blog</span>
						</div>
						<h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
							Thoughts, Tutorials & Insights
						</h1>
						<p className="mx-auto max-w-2xl text-lg text-muted-foreground">
							Sharing my journey in web development, one post at a time.
						</p>
					</div>

					<div className="mb-12">
						<SearchBar placeholder="Search posts..." />
					</div>

					{featuredPosts.length > 0 && (
						<div className="mb-12">
							<h2 className="mb-6 text-2xl font-bold">Featured Posts</h2>
							<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
								{featuredPosts.map((post, index) => (
									<PostCard key={post.id} post={post} index={index} />
								))}
							</div>
						</div>
					)}

					<div className="mb-12">
						<CategoryFilter categories={categories} />
					</div>

					<div>
						<h2 className="mb-6 text-2xl font-bold">All Posts</h2>
						<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
							{posts.map((post, index) => (
								<PostCard key={post.id} post={post} index={index} />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
