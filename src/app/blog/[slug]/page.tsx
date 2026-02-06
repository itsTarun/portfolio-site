import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getRelatedPosts } from "@/lib/blog-utils";
import { getAllBlogPosts } from "@/lib/load-blog-posts";

export const dynamic = "force-dynamic";
export const revalidate = 3600;

interface BlogPageProps {
	params: Promise<{ slug: string }>;
}

export async function generateMetadata({
	params,
}: BlogPageProps): Promise<Metadata> {
	const { slug } = await params;
	const posts = await getAllBlogPosts();
	const post = posts.find((p) => p.id === slug);

	if (!post) {
		return {
			title: "Post Not Found",
		};
	}

	return {
		title: `${post.title} | itstarun.fyi`,
		description: post.excerpt,
	};
}

export default async function BlogPage({ params }: BlogPageProps) {
	const { slug } = await params;
	const posts = await getAllBlogPosts();
	const post = posts.find((p) => p.id === slug);

	if (!post) {
		notFound();
	}

	const relatedPosts = getRelatedPosts(post, posts, 3);

	return (
		<main>
			<section className="py-16 md:py-20 lg:py-24 relative overflow-hidden">
				<div className="blob-bg absolute inset-0 -z-10">
					<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
					<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
				</div>

				<div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className="mb-8"
					>
						<Link
							href="/blog"
							className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
						>
							<ArrowLeft className="h-4 w-4" />
							Back to Blog
						</Link>
					</motion.div>

					<article className="mb-16">
						<motion.header
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.1 }}
							className="mb-8 border-b border-border/50 pb-8"
						>
							<div className="mb-6">
								<motion.span
									initial={{ opacity: 0, scale: 0.9 }}
									animate={{ opacity: 1, scale: 1 }}
									className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-1.5 text-sm font-semibold text-primary border border-primary/20 backdrop-blur-sm"
								>
									{post.category}
								</motion.span>
							</div>

							<h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
								{post.title}
							</h1>

							<div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
								<span className="flex items-center gap-2">
									<Calendar className="h-4 w-4" />
									{new Date(post.date).toLocaleDateString("en-US", {
										month: "long",
										day: "numeric",
										year: "numeric",
									})}
								</span>
								{post.readingTime && (
									<span className="flex items-center gap-2">
										<Clock className="h-4 w-4" />
										{post.readingTime} min read
									</span>
								)}
							</div>

							{post.tags.length > 0 && (
								<div className="flex flex-wrap gap-2 mt-4">
									{post.tags.map((tag) => (
										<motion.span
											key={tag}
											initial={{ opacity: 0, scale: 0.9 }}
											animate={{ opacity: 1, scale: 1 }}
											className="flex items-center gap-1.5 rounded-full bg-muted/50 px-3 py-1.5 text-xs font-medium text-muted-foreground border border-border/30 backdrop-blur-sm"
										>
											<Tag className="h-3 w-3" />
											{tag}
										</motion.span>
									))}
								</div>
							)}
						</motion.header>

						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.2 }}
							className="prose prose-lg max-w-none text-foreground prose-headings:font-bold prose-a:text-primary prose-code:text-primary prose-pre:bg-muted/50 prose-pre:border prose-pre:border-border/50"
							dangerouslySetInnerHTML={{ __html: post.content }}
						/>

						{relatedPosts.length > 0 && (
							<motion.section
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.3 }}
								className="border-t border-border/50 pt-12"
							>
								<h2 className="mb-8 text-2xl font-bold">Related Posts</h2>
								<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
									{relatedPosts.map((relatedPost) => (
										<Link
											key={relatedPost.id}
											href={`/blog/${relatedPost.id}`}
											className="group"
										>
											<div className="relative overflow-hidden rounded-xl border border-border/50 bg-card/30 backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1">
												<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
												<div className="p-6">
													<h3 className="mb-2 text-lg font-semibold group-hover:text-gradient transition-all duration-300">
														{relatedPost.title}
													</h3>
													<p className="text-sm text-muted-foreground line-clamp-2">
														{relatedPost.excerpt}
													</p>
												</div>
											</div>
										</Link>
									))}
								</div>
							</motion.section>
						)}
					</article>
				</div>
			</section>
		</main>
	);
}
