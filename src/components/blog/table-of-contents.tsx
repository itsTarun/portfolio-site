"use client";

import { motion } from "framer-motion";
import { Hash } from "lucide-react";
import { useEffect, useState } from "react";

interface TableOfContentsProps {
	headings: { id: string; text: string; level: number }[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
	const [activeId, setActiveId] = useState<string>("");

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveId(entry.target.id);
					}
				});
			},
		{ rootMargin: "-80px 0px -80px 0px" },
	);

	const headingElements = headings
		.map((heading) => document.getElementById(heading.id))
		.filter(Boolean) as HTMLElement[];

	headingElements.forEach((element) => {
		observer.observe(element);
	});

	return () => {
		headingElements.forEach((element) => {
			observer.unobserve(element);
		});
	};
	}, [headings]);

	return (
		<aside className="hidden lg:block sticky top-24 self-start">
			<motion.nav
				initial={{ opacity: 0, x: -20 }}
				animate={{ opacity: 1, x: 0 }}
				className="rounded-xl border-2 border-border bg-muted/30 p-4"
			>
				<h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
					Contents
				</h3>
				<ul className="space-y-2 text-sm">
					{headings.map((heading) => (
						<motion.li
							key={heading.id}
							initial={{ opacity: 0, x: -10 }}
							animate={{ opacity: 1, x: 0 }}
							whileHover={{ x: 4 }}
							transition={{ duration: 0.2 }}
						>
							<a
								href={`#${heading.id}`}
								onClick={(e) => {
									e.preventDefault();
									const element = document.getElementById(heading.id);
									if (element) {
										element.scrollIntoView({
											behavior: "smooth",
											block: "start",
										});
									}
								}}
								className={`
									flex items-start gap-2 transition-colors hover:text-primary
									${
										activeId === heading.id
											? "text-primary font-semibold"
											: "text-muted-foreground"
									}
								`}
								style={{
									paddingLeft: `${(heading.level - 1) * 12}px`,
								}}
							>
								<Hash className="h-4 w-4 flex-shrink-0 mt-1" />
								<span className="line-clamp-1">{heading.text}</span>
							</a>
						</motion.li>
					))}
				</ul>
			</motion.nav>
		</aside>
	);
}
