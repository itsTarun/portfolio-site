"use client";

import { motion } from "framer-motion";
import {
	Code2,
	Database,
	Globe,
	Layout,
	Server,
	Smartphone,
} from "lucide-react";
import { ScrollReveal } from "@/components/animation/scroll-reveal";

const skillsData = {
	frontend: [
		{ name: "React / Next.js", level: 95, icon: Globe },
		{ name: "TypeScript", level: 90, icon: Code2 },
		{ name: "Tailwind CSS", level: 95, icon: Layout },
		{ name: "Flutter", level: 85, icon: Smartphone },
	],
	backend: [
		{ name: "Node.js", level: 90, icon: Server },
		{ name: "PostgreSQL", level: 85, icon: Database },
		{ name: "REST APIs", level: 92, icon: Code2 },
		{ name: "GraphQL", level: 80, icon: Globe },
	],
	tools: [
		{ name: "Git / GitHub", level: 90, icon: Code2 },
		{ name: "Figma", level: 80, icon: Layout },
		{ name: "Docker", level: 75, icon: Server },
		{ name: "Vercel", level: 95, icon: Globe },
	],
};

export function SkillsSection() {
	return (
		<section className="py-20 bg-muted/30">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<ScrollReveal>
					<div className="mb-16 text-center">
						<h2 className="mb-4 text-3xl font-bold sm:text-4xl">
							Technical Skills
						</h2>
						<p className="mx-auto max-w-2xl text-muted-foreground">
							A comprehensive toolkit of technologies and frameworks I use to
							build exceptional digital experiences
						</p>
					</div>
				</ScrollReveal>

				<div className="grid gap-8 md:grid-cols-3">
					{Object.entries(skillsData).map(([category, skills], idx) => (
						<ScrollReveal key={category} delay={idx * 100}>
							<motion.div
								className="rounded-xl border border-border bg-card p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
								whileHover={{ y: -5 }}
							>
								<h3 className="mb-6 text-xl font-bold capitalize">
									{category}
								</h3>
								<div className="space-y-6">
									{skills.map((skill) => (
										<motion.div
											key={skill.name}
											whileHover={{ scale: 1.02 }}
											className="group"
										>
											<div className="mb-2 flex items-center justify-between">
												<div className="flex items-center gap-2">
													<skill.icon className="h-4 w-4 text-primary" />
													<span className="font-medium">{skill.name}</span>
												</div>
												<span className="text-sm text-muted-foreground">
													{skill.level}%
												</span>
											</div>
											<div className="h-2 overflow-hidden rounded-full bg-muted">
												<motion.div
													initial={{ width: 0 }}
													whileInView={{ width: `${skill.level}%` }}
													viewport={{ once: true }}
													transition={{ duration: 1, delay: 0.2 }}
													className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
												/>
											</div>
										</motion.div>
									))}
								</div>
							</motion.div>
						</ScrollReveal>
					))}
				</div>
			</div>
		</section>
	);
}
