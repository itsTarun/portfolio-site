"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/config/projects";
import { type ProjectSlug, toProjectRoute } from "@/types";

interface ProjectCardProps {
	title: string;
	description: string;
	imageUrl: string;
	index: number;
	slug: ProjectSlug;
}

function ProjectCard({
	title,
	description,
	imageUrl,
	index,
	slug,
}: ProjectCardProps) {
	return (
		<ScrollReveal delay={index * 100}>
			<motion.div
				initial={{ opacity: 0, y: 12 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className="h-full"
			>
				<Link
					href={toProjectRoute(slug)}
					className="neo-panel flex h-full flex-col justify-between p-0 transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_hsl(var(--border))] overflow-hidden"
				>
					<div className="relative h-40 w-full overflow-hidden border-b-2 border-border">
						<Image
							src={imageUrl}
							alt={`${title} screenshot`}
							fill
							className="object-cover"
						/>
					</div>
					<div className="p-6">
						<h3 className="mb-2 text-xl font-semibold">{title}</h3>
						<p className="text-sm text-muted-foreground leading-relaxed">
							{description}
						</p>
					</div>
					<span className="mb-6 ml-6 text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
						View case study →
					</span>
				</Link>
			</motion.div>
		</ScrollReveal>
	);
}

const projectDescriptions: Record<string, string> = {
	chargespot:
		"EV Charging Platform featuring real-time station tracking, payment integration, and comprehensive charging analytics.",
	opentribe:
		"Polkadot Talent Marketplace connecting developers with opportunities in the Web3 ecosystem with decentralized identity.",
	"domain-collective":
		"Multi-Registrar Platform for seamless domain management across multiple registrars with advanced search and bulk operations.",
};

export function ProjectsSection() {
	const projects = Object.values(PROJECTS);

	return (
		<section className="border-b-2 border-border py-16 md:py-20 lg:py-24">
			<div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<ScrollReveal>
					<div className="mb-12">
						<p className="eyebrow mb-4">Selected Work</p>
						<h2 className="section-title">Case studies with range.</h2>
						<p className="section-subtitle mt-4 max-w-2xl">
							From mobile-first products to platform builds, each project
							balances speed, usability, and long-term stability.
						</p>
					</div>
				</ScrollReveal>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
					{projects.map((project, idx) => (
						<ProjectCard
							key={project.id}
							title={project.name}
							description={projectDescriptions[project.id] || ""}
							imageUrl={project.imageUrl}
							slug={project.id as ProjectSlug}
							index={idx}
						/>
					))}
				</div>

				{projects.length > 3 && (
					<ScrollReveal delay={300}>
						<div className="mt-12">
							<Button asChild variant="outline" size="lg">
								<Link href="/projects">View all projects</Link>
							</Button>
						</div>
					</ScrollReveal>
				)}
			</div>
		</section>
	);
}
