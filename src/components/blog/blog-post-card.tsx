"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { BlogPost } from "@/lib/blog-utils";
import { formatDate } from "@/lib/blog-utils";

interface PostCardProps {
	post: BlogPost;
	index: number;
}

export function PostCard({ post, index }: PostCardProps) {
	return (
		<motion.article
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			className="group"
		>
			<Link
				href={`/blog/${post.id}`}
				className="block h-full rounded-2xl border-2 border-border bg-card p-6 shadow-lg transition-all hover:border-primary/50 hover:shadow-xl"
			>
				{post.featured && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className="mb-4"
					>
						<Badge className="bg-gradient-to-r from-primary to-secondary text-white">
							Featured Post
						</Badge>
					</motion.div>
				)}

				<h2 className="mb-3 text-2xl font-bold group-hover:text-primary transition-colors">
					{post.title}
				</h2>

				<p className="mb-4 text-muted-foreground line-clamp-3">
					{post.excerpt}
				</p>

				<div className="mb-4 flex flex-wrap gap-2">
					{post.tags.slice(0, 3).map((tag) => (
						<Link
							key={tag}
							href={`/blog/tags/${tag}`}
							onClick={(e) => e.stopPropagation()}
							className="hover:underline"
						>
							<Badge variant="secondary" className="text-xs">
								{tag}
							</Badge>
						</Link>
					))}
					{post.tags.length > 3 && (
						<Badge variant="secondary" className="text-xs">
							+{post.tags.length - 3}
						</Badge>
					)}
				</div>

				<div className="flex items-center justify-between border-t border-border pt-4">
					<div className="flex items-center gap-4 text-sm text-muted-foreground">
						<span className="flex items-center gap-1">
							<Calendar className="h-4 w-4" />
							{formatDate(post.date)}
						</span>
						{post.readingTime && (
							<span className="flex items-center gap-1">
								<Clock className="h-4 w-4" />
								{post.readingTime} min read
							</span>
						)}
					</div>
					<motion.div
						className="text-primary"
						whileHover={{ x: 5 }}
						transition={{ duration: 0.2 }}
					>
						<ArrowRight className="h-5 w-5" />
					</motion.div>
				</div>
			</Link>
		</motion.article>
	);
}
