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
		<section className="py-16 md:py-20 lg:py-24 relative overflow-hidden gradient-fade-top">
			<div className="blob-bg absolute inset-0 -z-10">
				<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl" />
			</div>

			<div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<ScrollReveal>
					<motion.div
						className="mx-auto max-w-4xl text-center rounded-3xl border border-border/50 bg-card/30 backdrop-blur-xl p-8 md:p-12 shadow-2xl shadow-primary/5"
						whileHover={{ y: -5 }}
						transition={{ duration: 0.3 }}
					>
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5 }}
							className="mb-8"
						>
							<div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-6">
								<Mail className="h-8 w-8 text-primary" />
							</div>
							<h2 className="mb-4 text-3xl font-bold sm:text-4xl text-balance">
								Ready to Build Something Amazing?
							</h2>
							<p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
								I&apos;m currently available for freelance projects and
								full-time opportunities. Let&apos;s collaborate and bring your
								ideas to life.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2, duration: 0.5 }}
							className="flex flex-col items-center gap-4 mb-10 sm:flex-row sm:justify-center"
						>
							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<Link href="/contact">
									<Button
										size="lg"
										className="gap-2 text-base px-8 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-shadow"
									>
										<Mail className="h-5 w-5" />
										Start a Conversation
										<ArrowRight className="h-5 w-5" />
									</Button>
								</Link>
							</motion.div>
							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<Link href="/projects">
									<Button
										variant="outline"
										size="lg"
										className="text-base px-8"
									>
										View My Work
									</Button>
								</Link>
							</motion.div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 0.4, duration: 0.5 }}
							className="flex justify-center gap-4"
						>
							{socialLinks.map((social, index) => (
								<motion.div
									key={social.label}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.5 + index * 0.1 }}
									whileHover={{ scale: 1.1, y: -5 }}
									whileTap={{ scale: 0.95 }}
								>
									<a
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										className="relative group"
										aria-label={social.label}
									>
										<div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-0 blur-md transition-all duration-300 group-hover:opacity-30 group-hover:blur-lg" />
										<div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-muted/50 backdrop-blur-sm border border-border/50 text-muted-foreground transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
											<social.icon className="h-5 w-5" />
										</div>
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
