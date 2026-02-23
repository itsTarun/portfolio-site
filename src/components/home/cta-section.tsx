"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { Button } from "@/components/ui/button";

const socialLinks = [
	{
		icon: Github,
		href: "https://github.com/itsTarun",
		label: "GitHub",
	},
	{
		icon: Linkedin,
		href: "https://www.linkedin.com/in/iamtarun/",
		label: "LinkedIn",
	},
	{
		icon: Twitter,
		href: "https://x.com/itstarun1381995",
		label: "Twitter/X",
	},
	{
		icon: Mail,
		href: "mailto:itstarun1994@gmail.com",
		label: "Email",
	},
];

export function CtaSection() {
	return (
		<section className="py-16 md:py-20 lg:py-24">
			<div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<ScrollReveal>
					<motion.div className="mx-auto max-w-4xl text-center neo-panel neo-panel-primary p-8 md:p-12">
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5 }}
							className="mb-8"
						>
							<p className="eyebrow mb-3">Let&apos;s build</p>
							<h2 className="mb-4 text-3xl font-semibold sm:text-4xl text-balance text-primary-foreground">
								Open to ambitious mobile product work with clear impact.
							</h2>
							<p className="text-base text-primary-foreground/85 max-w-2xl mx-auto leading-relaxed">
								I help teams ship thoughtful iOS and Flutter apps with confident
								UX, clean engineering, and stable release quality.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2, duration: 0.5 }}
							className="flex flex-col items-center gap-4 mb-10 sm:flex-row sm:justify-center"
						>
							<Button
								asChild
								size="lg"
								variant="outline"
								className="gap-2 bg-background text-foreground"
							>
								<Link href="/contact">
									<Mail className="h-4 w-4" />
									Start a Conversation
									<ArrowRight className="h-4 w-4" />
								</Link>
							</Button>
							<Button
								asChild
								variant="outline"
								size="lg"
								className="border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary/80"
							>
								<Link href="/projects">View Selected Work</Link>
							</Button>
						</motion.div>

						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 0.4, duration: 0.5 }}
							className="flex flex-wrap justify-center gap-4"
						>
							{socialLinks.map((social, index) => (
								<motion.div
									key={social.label}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.5 + index * 0.1 }}
									whileHover={{ scale: 1.05, y: -4 }}
									whileTap={{ scale: 0.95 }}
								>
									<a
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/80 transition-colors hover:text-primary-foreground"
										aria-label={social.label}
									>
										{social.label}
									</a>
								</motion.div>
							))}
						</motion.div>
					</motion.div>
				</ScrollReveal>
			</div>
		</section>
	);
}
