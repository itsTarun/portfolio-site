"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog-utils";

interface BlogPostCardProps {
	post: BlogPost;
	index?: number;
}

export function BlogPostCard({ post, index = 0 }: BlogPostCardProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			className="h-full"
		>
			<Link href={`/blog/${post.id}`} className="h-full">
				<div className="flex h-full flex-col justify-between rounded-lg border border-border bg-card p-6 transition-colors hover:border-foreground/40">
					<div>
						<span className="eyebrow">{post.category}</span>
						<h3 className="mt-3 text-xl font-semibold leading-tight">
							{post.title}
						</h3>

						<p className="mt-3 text-sm text-muted-foreground line-clamp-3 leading-relaxed">
							{post.excerpt}
						</p>

						<div className="mt-4 flex flex-wrap gap-2">
							{post.tags.slice(0, 3).map((tag) => (
								<span
									key={tag}
									className="rounded-full border border-border px-3 py-1 text-[11px] uppercase tracking-wider text-muted-foreground"
								>
									{tag}
								</span>
							))}
						</div>
					</div>

					<div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4 text-xs text-muted-foreground">
						<span className="flex items-center gap-1.5">
							<Calendar className="h-3.5 w-3.5" />
							{new Date(post.date).toLocaleDateString("en-US", {
								month: "short",
								day: "numeric",
								year: "numeric",
							})}
						</span>
						{post.readingTime && (
							<span className="flex items-center gap-1.5">
								<Clock className="h-3.5 w-3.5" />
								{post.readingTime} min read
							</span>
						)}
						<span className="inline-flex items-center gap-1 font-medium text-foreground">
							Read
							<ArrowRight className="h-4 w-4" />
						</span>
					</div>
				</div>
			</Link>
		</motion.div>
	);
}
