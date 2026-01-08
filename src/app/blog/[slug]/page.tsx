import { motion } from "framer-motion";
import { promises as fsPromises } from "fs";
import matter from "gray-matter";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { join } from "path";
import { MarkdownRenderer } from "@/components/blog/markdown-renderer";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { Badge } from "@/components/ui/badge";
import type { BlogFrontmatter, BlogPost } from "@/lib/blog-utils";
import {
	calculateReadingTime,
	formatDate,
	getRelatedPosts,
} from "@/lib/blog-utils";

const CONTENT_DIR = join(process.cwd(), "src", "content", "blog");

async function getBlogPost(id: string): Promise<BlogPost | null> {
	try {
		const filePath = join(CONTENT_DIR, `${id}.md`);
		const fileContent = await fsPromises.readFile(filePath, "utf-8");
		const { data, content } = matter(fileContent);

		const frontmatter = data as BlogFrontmatter;
		const readingMinutes = calculateReadingTime(content);

		return {
			id,
			title: frontmatter.title,
			date: frontmatter.date,
			excerpt: frontmatter.excerpt,
			content,
			tags: frontmatter.tags || [],
			category: frontmatter.category,
			featured: frontmatter.featured,
			readingTime: readingMinutes,
		};
	} catch {
		return null;
	}
}

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

function extractHeadings(
	content: string,
): { id: string; text: string; level: number }[] {
	const headings: { id: string; text: string; level: number }[] = [];

	// Match headers (##, ###, etc.)
	const headerRegex = /^(#{1,3})\s+(.+)$/gm;
	let match;

	while ((match = headerRegex.exec(content)) !== null) {
		const hashes = match[1];
		const text = match[2].trim();
		const level = hashes.length;
		const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-");

		headings.push({ id, text, level });
	}

	return headings;
}

interface PageProps {
	params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
	const { slug } = await params;
	const post = await getBlogPost(slug);
	const allPosts = await getAllBlogPosts();

	if (!post) {
		notFound();
	}

	const headings = extractHeadings(post.content);
	const relatedPosts = getRelatedPosts(post, allPosts);

	return (
		<div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/50">
			<div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="mx-auto max-w-7xl"
				>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="mb-8"
					>
						<Link
							href="/blog"
							className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
						>
							<ArrowLeft className="h-4 w-4" />
							Back to all posts
						</Link>
					</motion.div>

					<motion.article
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}
						className="mb-16"
					>
						<header className="mb-8 space-y-4 border-b border-border pb-8">
							<Badge className="bg-gradient-to-r from-primary to-secondary text-white">
								{post.category}
							</Badge>

							<h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
								{post.title}
							</h1>

							<div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
								<span className="flex items-center gap-2">
									<Calendar className="h-4 w-4" />
									{formatDate(post.date)}
								</span>
								{post.readingTime && (
									<span className="flex items-center gap-2">
										<Clock className="h-4 w-4" />
										{post.readingTime} min read
									</span>
								)}
							</div>

							<div className="flex flex-wrap gap-2">
								{post.tags.map((tag) => (
									<Badge key={tag} variant="secondary">
										{tag}
									</Badge>
								))}
							</div>
						</header>

						<div className="grid gap-8 lg:grid-cols-[1fr,280px]">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.4 }}
								className="lg:order-2"
							>
								<MarkdownRenderer content={post.content} />
							</motion.div>

							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.5 }}
								className="lg:order-1"
							>
								<TableOfContents headings={headings} />

								<div className="mt-8 rounded-xl border border-border bg-muted/30 p-6">
									<h3 className="mb-4 text-lg font-semibold">
										Share this post
									</h3>
									<div className="space-y-3">
										<a
											href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
												`Check out: ${post.title} - by @itstarun1381995`,
											)}`}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 rounded-lg bg-[#1DA1F2] p-3 text-white transition-colors hover:bg-[#1a91da]"
										>
											<Share2 className="h-4 w-4" />
											<span>Share on Twitter</span>
										</a>
										<a
											href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
												typeof window !== "undefined"
													? window.location.href
													: "",
											)}&title=${encodeURIComponent(post.title)}`}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-2 rounded-lg bg-[#0077B5] p-3 text-white transition-colors hover:bg-[#006699]"
										>
											<Share2 className="h-4 w-4" />
											<span>Share on LinkedIn</span>
										</a>
									</div>
								</div>
							</motion.div>
						</div>
					</motion.article>

					{relatedPosts.length > 0 && (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6 }}
							className="mt-16 rounded-2xl border-2 border-border bg-muted/30 p-8"
						>
							<h2 className="mb-6 text-2xl font-bold">Related Posts</h2>
							<div className="grid gap-4 md:grid-cols-3">
								{relatedPosts.map((relatedPost, index) => (
									<motion.a
										key={relatedPost.id}
										href={`/blog/${relatedPost.id}`}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.5, delay: index * 0.1 }}
										className="block rounded-xl border border-border bg-card p-6 shadow-lg transition-all hover:border-primary/50 hover:shadow-xl"
									>
										<h3 className="mb-2 text-lg font-semibold">
											{relatedPost.title}
										</h3>
										<p className="text-sm text-muted-foreground line-clamp-2">
											{relatedPost.excerpt}
										</p>
									</motion.a>
								))}
							</div>
						</motion.div>
					)}
				</motion.div>
			</div>
		</div>
	);
}
