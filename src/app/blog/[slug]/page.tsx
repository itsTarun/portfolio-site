import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getRelatedPosts } from "@/lib/blog-utils";
import { getAllBlogPosts } from "@/lib/load-blog-posts";

export const revalidate = 3600;

interface BlogPageProps {
	params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
	const posts = await getAllBlogPosts();
	return posts.map((post) => ({ slug: post.id }));
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
		<section className="py-16 md:py-20 lg:py-24">
			<div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="mb-8">
					<Link
						href="/blog"
						className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
					>
						<ArrowLeft className="h-4 w-4" />
						Back to Blog
					</Link>
				</div>

				<article className="mb-16">
					<header className="mb-8 border-b border-border/60 pb-8">
						<p className="eyebrow mb-4">{post.category}</p>

						<h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-semibold text-balance">
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
									<span
										key={tag}
										className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-[11px] uppercase tracking-wider text-muted-foreground"
									>
										<Tag className="h-3 w-3" />
										{tag}
									</span>
								))}
							</div>
						)}
					</header>

					<div
						className="prose prose-lg max-w-none text-foreground prose-headings:font-semibold prose-a:text-foreground prose-a:underline prose-code:text-foreground prose-pre:bg-muted/50 prose-pre:border prose-pre:border-border/50"
						dangerouslySetInnerHTML={{ __html: post.contentHtml }}
					/>

					{relatedPosts.length > 0 && (
						<section className="border-t border-border/60 pt-12">
							<h2 className="mb-8 text-2xl font-semibold">Related Posts</h2>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
								{relatedPosts.map((relatedPost) => (
									<Link
										key={relatedPost.id}
										href={`/blog/${relatedPost.id}`}
										className="group"
									>
										<div className="relative overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-foreground/40">
											<div className="p-6">
												<h3 className="mb-2 text-lg font-semibold">
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
						</section>
					)}
				</article>
			</div>
		</section>
	);
}
