"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ProjectHero({
	project,
}: {
	project: {
		id: string;
		title: string;
		tagline: string;
		category: string;
		liveUrl?: string | null;
		githubUrl?: string | null;
		featured: boolean;
	};
}) {
	return (
		<div className="border-b border-border/60 bg-background">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="container mx-auto px-4 py-20 sm:px-6 lg:px-8"
			>
				<div className="grid gap-8 lg:grid-cols-2 lg:items-center">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="order-2 lg:order-1"
					>
						<Link
							href="/projects"
							className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-all hover:text-foreground"
						>
							<ArrowLeft className="h-4 w-4" />
							All Projects
						</Link>

						{project.featured && (
							<motion.div
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5, delay: 0.3 }}
								className="mt-4"
							>
								<Badge>Featured Flagship Project</Badge>
							</motion.div>
						)}
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						className="order-1 lg:order-2"
					>
						<Badge variant="outline" className="mb-4 bg-background">
							{project.category === "mobile" ? "Mobile App" : "Web Application"}
						</Badge>

						<h1 className="mb-6 text-4xl font-semibold tracking-tight sm:text-5xl">
							{project.title}
						</h1>

						<p className="mb-8 text-xl text-muted-foreground">
							{project.tagline}
						</p>

						<div className="flex flex-wrap gap-4">
							{project.liveUrl && (
								<Button asChild size="lg" className="gap-2">
									<a
										href={project.liveUrl}
										target="_blank"
										rel="noopener noreferrer"
									>
										<ExternalLink className="h-4 w-4" />
										<span className="hidden sm:inline">View Live Demo</span>
										<span className="sm:hidden">Live</span>
									</a>
								</Button>
							)}

							{project.githubUrl && (
								<Button asChild variant="outline" size="lg" className="gap-2">
									<a
										href={project.githubUrl}
										target="_blank"
										rel="noopener noreferrer"
									>
										<Github className="h-4 w-4" />
										<span className="hidden sm:inline">View Source Code</span>
										<span className="sm:hidden">Source</span>
									</a>
								</Button>
							)}
						</div>

						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="mt-6 flex items-center gap-2 text-sm text-muted-foreground"
						>
							<Calendar className="h-4 w-4" />
							<span>Project duration: 3-4 years</span>
						</motion.div>
					</motion.div>
				</div>
			</motion.div>
		</div>
	);
}
