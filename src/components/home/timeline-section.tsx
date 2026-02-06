"use client";

import { motion } from "framer-motion";
import { Badge, Briefcase, Calendar, Code2 } from "lucide-react";
import { ScrollReveal } from "@/components/animation/scroll-reveal";

const experiences = [
	{
		title: "Full Stack Developer",
		company: "Chargespot",
		period: "2022 - Present",
		description:
			"Building an EV charging platform with Flutter, Google Maps, and Razorpay integration. Led development of core features including real-time charging status and payment processing.",
		technologies: ["Flutter", "Google Maps", "Razorpay", "Firebase"],
		icon: Briefcase,
	},
	{
		title: "Full Stack Developer",
		company: "OpenTribe",
		period: "2023 - Present",
		description:
			"Developing a Polkadot-based talent marketplace platform using Next.js 15 and React 19. Implemented advanced features including Web3 integration and decentralized identity management.",
		technologies: ["Next.js 15", "React 19", "TypeScript", "Polkadot"],
		icon: Code2,
	},
	{
		title: "Full Stack Developer",
		company: "Domain Collective",
		period: "2024 - Present",
		description:
			"Creating a multi-registrar domain management platform with PostgreSQL and Next.js 15. Built comprehensive domain search, registration, and management tools.",
		technologies: ["Next.js 15", "PostgreSQL", "Tailwind CSS", "TypeScript"],
		icon: Badge,
	},
];

export function TimelineSection() {
	return (
		<section className="py-16 md:py-20 lg:py-24 relative overflow-hidden gradient-fade-top gradient-fade-bottom">
			<div className="blob-bg absolute inset-0 -z-10">
				<div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
				<div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
			</div>

			<div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<ScrollReveal>
					<div className="mb-16 text-center">
						<h2 className="mb-4 text-3xl font-bold sm:text-4xl text-balance">
							Experience & Projects
						</h2>
						<p className="mx-auto max-w-2xl text-muted-foreground">
							My journey through building impactful projects and solving complex
							problems
						</p>
					</div>
				</ScrollReveal>

				<div className="relative mx-auto max-w-4xl">
					<div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary via-secondary to-primary/20 hidden md:block" />

					{experiences.map((exp, idx) => (
						<ScrollReveal key={`${exp.company}-${idx}`} delay={idx * 150}>
							<motion.div
								className={`relative mb-8 md:mb-16 w-full md:w-1/2 ${
									idx % 2 === 0
										? "md:pr-1/2 md:text-right"
										: "md:pl-1/2 md:ml-auto"
								}`}
								whileHover={{ scale: 1.02 }}
							>
								<div className="relative rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
									{idx % 2 === 0 ? (
										<div className="absolute left-1/2 top-1/2 hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary to-secondary md:block ring-4 ring-background" />
									) : (
										<div className="absolute right-1/2 top-1/2 hidden h-4 w-4 translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-secondary to-primary md:block ring-4 ring-background" />
									)}

									<div className="flex items-start gap-3 mb-4">
										<div className="rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 p-2.5">
											<exp.icon className="h-5 w-5 text-primary" />
										</div>
										<div className="flex-1">
											<h3 className="text-lg font-bold">{exp.title}</h3>
											<p className="text-gradient font-medium">{exp.company}</p>
										</div>
									</div>

									<div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
										<Calendar className="h-4 w-4" />
										<span>{exp.period}</span>
									</div>

									<p className="mb-4 text-muted-foreground line-clamp-3">
										{exp.description}
									</p>

									<div className="flex flex-wrap gap-2">
										{exp.technologies.map((tech) => (
											<motion.span
												key={tech}
												whileHover={{ scale: 1.05 }}
												className="rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 px-3 py-1 text-xs font-medium text-primary border border-primary/20"
											>
												{tech}
											</motion.span>
										))}
									</div>
								</div>
							</motion.div>
						</ScrollReveal>
					))}
				</div>
			</div>
		</section>
	);
}
