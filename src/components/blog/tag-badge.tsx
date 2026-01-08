"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface TagBadgeProps {
	tag: string;
	count?: number;
	isActive?: boolean;
	onClick?: (tag: string) => void;
}

export function TagBadge({ tag, count, isActive, onClick }: TagBadgeProps) {
	const content = (
		<span className="inline-flex items-center gap-1">
			{tag}
			{count !== undefined && (
				<span className="text-xs opacity-60">({count})</span>
			)}
		</span>
	);

	return onClick ? (
		<motion.button
			onClick={() => onClick(tag)}
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
			className={`
				inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm transition-all
				${
					isActive
						? "bg-primary text-primary-foreground"
						: "bg-muted hover:bg-muted/80 text-muted-foreground"
				}
			`}
		>
			{content}
		</motion.button>
	) : (
		<Link
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			href={`/blog/tags/${tag}` as any}
			className={`
				inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm transition-all
				${
					isActive
						? "bg-primary text-primary-foreground"
						: "bg-muted hover:bg-muted/80 text-muted-foreground"
				}
			`}
		>
			{content}
		</Link>
	);
}
