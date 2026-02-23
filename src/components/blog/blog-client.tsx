"use client";

import { motion } from "framer-motion";
import { Filter, SortDesc, X } from "lucide-react";
import * as React from "react";
import type { BlogPost } from "@/lib/blog-utils";
import { BlogPostCard } from "./blog-post-card";

interface BlogClientProps {
	initialPosts: BlogPost[];
	categories: string[];
	tags: string[];
}

export function BlogClient({
	initialPosts,
	categories,
	tags,
}: BlogClientProps) {
	const [selectedCategory, setSelectedCategory] = React.useState<string | null>(
		null,
	);
	const [selectedTags, setSelectedTags] = React.useState<string[]>([]);
	const [sortBy, setSortBy] = React.useState<"date" | "readingTime">("date");

	const toggleTag = (tag: string) => {
		setSelectedTags((prev) =>
			prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
		);
	};

	const filteredPosts = React.useMemo(() => {
		let filtered = [...initialPosts];

		if (selectedCategory) {
			filtered = filtered.filter((post) => post.category === selectedCategory);
		}

		if (selectedTags.length > 0) {
			filtered = filtered.filter((post) =>
				selectedTags.some((tag) => post.tags.includes(tag)),
			);
		}

		if (sortBy === "date") {
			filtered = filtered.sort(
				(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
			);
		} else {
			filtered = filtered.sort(
				(a, b) => (a.readingTime || 0) - (b.readingTime || 0),
			);
		}

		return filtered;
	}, [initialPosts, selectedCategory, selectedTags, sortBy]);

	return (
		<>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.2 }}
				className="mb-12"
			>
				<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-8">
					<div className="flex flex-1 flex-col gap-4">
						<div className="flex items-center gap-2">
							<Filter className="h-4 w-4 text-muted-foreground" />
							<span className="text-sm font-semibold text-foreground">
								Filters
							</span>
						</div>

						<div className="flex flex-wrap gap-2">
							<button
								type="button"
								onClick={() => setSelectedCategory(null)}
								className={`rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all ${
									selectedCategory === null
										? "border-foreground bg-foreground text-background"
										: "border-border text-muted-foreground hover:text-foreground"
								}`}
							>
								All
							</button>
							{categories.map((category) => (
								<button
									type="button"
									key={category}
									onClick={() => setSelectedCategory(category)}
									className={`rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all ${
										selectedCategory === category
											? "border-foreground bg-foreground text-background"
											: "border-border text-muted-foreground hover:text-foreground"
									}`}
								>
									{category}
								</button>
							))}
						</div>

						<div className="flex flex-wrap gap-2">
							{tags.slice(0, 6).map((tag) => (
								<motion.button
									key={tag}
									onClick={() => toggleTag(tag)}
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className={`rounded-full border px-3 py-1.5 text-[11px] uppercase tracking-wider transition-all ${
										selectedTags.includes(tag)
											? "border-foreground bg-foreground text-background"
											: "border-border text-muted-foreground hover:text-foreground"
									}`}
								>
									{tag}
								</motion.button>
							))}
						</div>
					</div>

					<div className="flex items-center gap-2">
						<SortDesc className="h-4 w-4 text-muted-foreground" />
						<select
							value={sortBy}
							onChange={(e) =>
								setSortBy(e.target.value as "date" | "readingTime")
							}
							className="rounded-md bg-background border border-border px-4 py-2 text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
						>
							<option value="date">Newest First</option>
							<option value="readingTime">Reading Time</option>
						</select>
					</div>
				</div>

				{(selectedCategory || selectedTags.length > 0) && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						className="mb-6 flex items-center gap-2"
					>
						<span className="text-sm text-muted-foreground">
							Showing {filteredPosts.length} post
							{filteredPosts.length !== 1 && "s"}
						</span>
						<button
							type="button"
							onClick={() => {
								setSelectedCategory(null);
								setSelectedTags([]);
							}}
							className="rounded-full border border-border px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-all"
						>
							<X className="h-3.5 w-3.5" />
						</button>
					</motion.div>
				)}
			</motion.div>

			{filteredPosts.length > 0 ? (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
					{filteredPosts.map((post, index) => (
						<BlogPostCard key={post.id} post={post} index={index} />
					))}
				</div>
			) : (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className="py-20 text-center"
				>
					<p className="text-lg text-muted-foreground mb-4">
						No posts found for selected filters
					</p>
					<button
						type="button"
						onClick={() => {
							setSelectedCategory(null);
							setSelectedTags([]);
						}}
						className="inline-flex items-center gap-2 rounded-md bg-foreground px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-background hover:bg-foreground/90 transition-colors"
					>
						<X className="h-4 w-4" />
						Clear Filters
					</button>
				</motion.div>
			)}
		</>
	);
}
