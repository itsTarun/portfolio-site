"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Code2, Database, Globe, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
	title: string;
	description: string;
	gradient: string;
	icon: LucideIcon;
	index: number;
	slug: string;
}

function ProjectCard({
	title,
	description,
	gradient,
	icon: Icon,
	index,
	slug,
}: ProjectCardProps) {
	const ref = useRef<HTMLDivElement>(null);
	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
	const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

	const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
	const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!ref.current) return;

		const rect = ref.current.getBoundingClientRect();
		const width = rect.width;
		const height = rect.height;
		const mouseX = e.clientX - rect.left;
		const mouseY = e.clientY - rect.top;

		const xPct = mouseX / width - 0.5;
		const yPct = mouseY / height - 0.5;

		x.set(xPct);
		y.set(yPct);
	};

	const handleMouseLeave = () => {
		x.set(0);
		y.set(0);
	};

	return (
		<ScrollReveal delay={index * 100}>
			<motion.div
				ref={ref}
				onMouseMove={handleMouseMove}
				onMouseLeave={handleMouseLeave}
				style={{
					rotateX,
					rotateY,
					transformStyle: "preserve-3d",
				}}
				className="group h-full"
			>
				<div className="relative h-full overflow-hidden rounded-2xl border border-border/50 bg-card/30 backdrop-blur-md shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30">
					<div
						className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
					/>

					<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent rounded-full blur-2xl" />

					<div
						className="relative p-6"
						style={{ transform: "translateZ(50px)" }}
					>
						<div className="flex items-center justify-between mb-4">
							<div
								className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white shadow-lg shadow-primary/20`}
							>
								<Icon className="h-7 w-7" />
							</div>
							<motion.div
								initial={{ opacity: 0, x: 10 }}
								whileHover={{ opacity: 1, x: 0 }}
								className="opacity-0 group-hover:opacity-100 transition-opacity"
							>
								<ArrowIcon />
							</motion.div>
						</div>

						<h3 className="mb-2 text-xl font-bold group-hover:text-gradient transition-all duration-300">
							{title}
						</h3>
						<p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
							{description}
						</p>

						<Link
							href={`/projects/${slug}`}
							className="inline-flex items-center gap-2 font-medium text-primary hover:text-primary/80 transition-colors"
						>
							View Details
							<motion.span
								animate={{ x: [0, 5, 0] }}
								transition={{
									duration: 1,
									repeat: Infinity,
									ease: "easeInOut",
								}}
								className="inline-flex"
							>
								→
							</motion.span>
						</Link>
					</div>
				</div>
			</motion.div>
		</ScrollReveal>
	);
}

function ArrowIcon() {
	return (
		<svg
			className="h-5 w-5 text-primary"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			aria-hidden="true"
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="M17 8l4 4m0 0l-4 4m4-4H3"
			/>
		</svg>
	);
}

export function ProjectsSection() {
	const projects = [
		{
			icon: Database,
			title: "Chargespot",
			slug: "chargespot",
			description:
				"EV Charging Platform featuring real-time station tracking, payment integration, and comprehensive charging analytics.",
			gradient: "from-blue-500 via-blue-600 to-cyan-500",
		},
		{
			icon: Globe,
			title: "OpenTribe",
			slug: "opentribe",
			description:
				"Polkadot Talent Marketplace connecting developers with opportunities in the Web3 ecosystem with decentralized identity.",
			gradient: "from-purple-500 via-violet-600 to-purple-400",
		},
		{
			icon: Code2,
			title: "Domain Collective",
			slug: "domain-collective",
			description:
				"Multi-Registrar Platform for seamless domain management across multiple registrars with advanced search and bulk operations.",
			gradient: "from-pink-500 via-rose-600 to-pink-400",
		},
	];

	return (
		<section className="py-16 md:py-20 lg:py-24 relative overflow-hidden gradient-fade-top gradient-fade-bottom">
			<div className="blob-bg absolute inset-0 -z-10">
				<div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
				<div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
			</div>

			<div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<ScrollReveal>
					<div className="mb-16 text-center">
						<h2 className="mb-4 text-3xl font-bold sm:text-4xl text-balance">
							Featured Projects
						</h2>
						<p className="mx-auto max-w-2xl text-muted-foreground">
							Highlighting my recent work and personal projects that showcase
							technical expertise and creative problem-solving
						</p>
					</div>
				</ScrollReveal>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
					{projects.map((project, idx) => (
						<ProjectCard key={project.title} {...project} index={idx} />
					))}
				</div>

				<ScrollReveal delay={300}>
					<div className="mt-16 text-center">
						<motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
							<Button asChild variant="outline" size="lg" className="px-8">
								<Link href="/projects">View All Projects</Link>
							</Button>
						</motion.div>
					</div>
				</ScrollReveal>
			</div>
		</section>
	);
}
