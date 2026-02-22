"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { type ProjectSlug, toProjectRoute } from "@/types";

interface NextProjectNavProps {
	nextProject?: {
		title: string;
		slug: ProjectSlug;
	};
	previousProject?: {
		title: string;
		slug: ProjectSlug;
	};
}

export function NextProjectNav({
	nextProject,
	previousProject,
}: NextProjectNavProps) {
	return (
		<motion.nav
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			className="border-t border-border bg-background pt-12 pb-20"
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-5xl flex justify-between">
					{previousProject && (
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.1 }}
						>
							<Button asChild variant="outline" className="gap-2">
								<Link href={toProjectRoute(previousProject.slug)}>
									Previous
									<ArrowRight className="h-4 w-4 rotate-180" />
									{previousProject.title}
								</Link>
							</Button>
						</motion.div>
					)}

					{nextProject && (
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="ml-auto"
						>
							<Button asChild className="gap-2">
								<Link href={toProjectRoute(nextProject.slug)}>
									{nextProject.title}
									Next
									<ArrowRight className="h-4 w-4" />
								</Link>
							</Button>
						</motion.div>
					)}

					{!nextProject && !previousProject && (
						<Link
							href="/projects"
							className="rounded-md border border-border px-6 py-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-all hover:text-foreground"
						>
							View All Projects
						</Link>
					)}
				</div>
			</div>
		</motion.nav>
	);
}
