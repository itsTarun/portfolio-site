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
			className="h-full group"
		>
			<Link href={`/blog/${post.id}`} className="h-full">
				<div className="relative h-full overflow-hidden rounded-2xl bg-card/30 backdrop-blur-md border border-border/50 transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
					<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

					<div className="absolute top-3 right-3">
						<span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 px-3 py-1 text-xs font-semibold text-primary border border-primary/20 backdrop-blur-sm">
							{post.category}
						</span>
					</div>

					<div className="relative p-6">
						<h3 className="mb-3 text-xl font-bold leading-tight group-hover:text-gradient transition-all duration-300">
							{post.title}
						</h3>

						<p className="mb-4 text-muted-foreground line-clamp-3 leading-relaxed">
							{post.excerpt}
						</p>

						<div className="mb-4 flex flex-wrap gap-2">
							{post.tags.slice(0, 3).map((tag) => (
								<motion.span
									key={tag}
									initial={{ opacity: 0, scale: 0.9 }}
									whileInView={{ opacity: 1, scale: 1 }}
									className="rounded-full bg-muted/50 px-2.5 py-1 text-xs font-medium text-muted-foreground border border-border/30 backdrop-blur-sm"
								>
									{tag}
								</motion.span>
							))}
						</div>

						<div className="flex items-center justify-between border-t border-border/30 pt-4">
							<div className="flex items-center gap-4 text-xs text-muted-foreground">
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
							</div>
							<div className="flex items-center gap-1 font-medium text-primary">
								Read
								<motion.span
									animate={{ x: [0, 4, 0] }}
									transition={{
										duration: 1.5,
										repeat: Infinity,
										ease: "easeInOut",
									}}
									className="inline-flex"
								>
									<ArrowRight className="h-4 w-4" />
								</motion.span>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</motion.div>
	);
}
