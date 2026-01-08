"use client";

import { motion } from "framer-motion";
import { Filter } from "lucide-react";

interface CategoryFilterProps {
	categories: string[];
	selectedCategory?: string | null;
	onSelect?: (category: string | null) => void;
}

export function CategoryFilter({
	categories,
	selectedCategory = null,
	onSelect,
}: CategoryFilterProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: -10 }}
			animate={{ opacity: 1, y: 0 }}
			className="mb-6 flex flex-wrap items-center gap-2"
		>
			<motion.button
				onClick={() => onSelect?.(null)}
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				className={`
					flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all
					${
						selectedCategory === null
							? "bg-primary text-primary-foreground shadow-lg"
							: "bg-muted hover:bg-muted/80 text-muted-foreground"
					}
				`}
			>
				<Filter className="h-4 w-4" />
				All Posts
			</motion.button>

			{categories.map((category) => (
				<motion.button
					key={category}
					onClick={() => onSelect?.(category)}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className={`
						flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all
						${
							selectedCategory === category
								? "bg-primary text-primary-foreground shadow-lg"
								: "bg-muted hover:bg-muted/80 text-muted-foreground"
						}
					`}
				>
					{category}
				</motion.button>
			))}
		</motion.div>
	);
}
