"use client";

import { motion } from "framer-motion";
import {
	ArrowRight,
	Code2,
	Github,
	Linkedin,
	Mail,
	Sparkles,
	Smartphone,
	Twitter,
} from "lucide-react";
import Link from "next/link";
import { AnimatedCounter } from "@/components/ui/animated-counter";
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

const stats = [
	{
		id: 1,
		label: "Years Building",
		value: 7,
		suffix: "+",
		icon: <Code2 className="h-6 w-6" />,
	},
	{
		id: 2,
		label: "Teams",
		value: 5,
		suffix: "",
		icon: <Sparkles className="h-6 w-6" />,
	},
	{
		id: 3,
		label: "Platforms",
		value: 2,
		suffix: "",
		icon: <Smartphone className="h-6 w-6" />,
	},
	{
		id: 4,
		label: "Crash-Free Rate",
		value: 99,
		suffix: "%",
		icon: <Sparkles className="h-6 w-6" />,
	},
];

export function HeroSection() {
	return (
		<section className="relative overflow-hidden border-b-2 border-border bg-background">
			<div className="absolute -right-6 top-10 hidden h-28 w-28 border-2 border-border bg-primary/90 shadow-[6px_6px_0_hsl(var(--border))] lg:block" />
			<div className="absolute -left-6 bottom-10 hidden h-16 w-40 border-2 border-border bg-accent shadow-[6px_6px_0_hsl(var(--border))] lg:block" />
			<div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
				<div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
					<motion.div
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="space-y-8"
					>
						<div className="flex flex-wrap items-center gap-3">
							<span className="eyebrow">Mobile App Developer</span>
							<span className="neo-chip">iOS</span>
							<span className="neo-chip">Android</span>
							<span className="neo-chip">Flutter</span>
						</div>
						<h1 className="section-title text-balance">
							Mobile apps that feel calm, fast, and dependable.
						</h1>
						<p className="section-subtitle max-w-xl">
							I&apos;m Tarun Sharma, a mobile developer building iPhone, iPad,
							and Flutter apps since 2018. I lean into R&amp;D, solid
							architecture, and hands-on QA to ship stable releases teams trust.
						</p>
						<div className="flex flex-wrap gap-3">
							<Button asChild size="lg">
								<Link href="/projects">
									View Selected Work
									<ArrowRight className="h-4 w-4" />
								</Link>
							</Button>
							<Button asChild size="lg" variant="outline">
								<Link href="/contact">Start a Project</Link>
							</Button>
						</div>
						<div className="neo-rule" />
						<div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
							<span className="border-2 border-border bg-background px-3 py-1">
								Based in India (IST)
							</span>
							<span className="border-2 border-border bg-background px-3 py-1">
								Available for select work
							</span>
						</div>
						<div className="flex gap-4">
							{socialLinks.map((social) => (
								<a
									key={social.label}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
								>
									{social.label}
								</a>
							))}
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 16 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="space-y-4"
					>
						<div className="neo-panel p-6">
							<div className="mb-6 flex items-center justify-between">
								<p className="eyebrow">Impact board</p>
								<span className="neo-chip">2026</span>
							</div>
							<AnimatedCounter items={stats} />
							<div className="mt-6 space-y-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
								<div className="flex items-center justify-between border-t-2 border-border pt-4">
									<span>Focus</span>
									<span className="text-foreground">
										Mobile UX, Reliability, Release Quality
									</span>
								</div>
								<div className="flex items-center justify-between">
									<span>Stack</span>
									<span className="text-foreground">
										iOS, Flutter, Firebase
									</span>
								</div>
							</div>
						</div>
						<div className="neo-panel neo-panel-muted p-6">
							<p className="eyebrow mb-4">Build style</p>
							<ul className="space-y-3 text-sm text-foreground">
								<li className="flex items-center justify-between border-t-2 border-border pt-3">
									<span>R&amp;D</span>
									<span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
										Clarify approach
									</span>
								</li>
								<li className="flex items-center justify-between border-t-2 border-border pt-3">
									<span>Delivery</span>
									<span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
										Ship confidently
									</span>
								</li>
								<li className="flex items-center justify-between border-t-2 border-border pt-3">
									<span>QA</span>
									<span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
										Test thoroughly
									</span>
								</li>
							</ul>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
