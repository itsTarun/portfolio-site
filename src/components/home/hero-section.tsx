"use client";

import { motion } from "framer-motion";
import {
	ArrowRight,
	Code2,
	Github,
	Linkedin,
	Mail,
	Smartphone,
	Sparkles,
	Twitter,
	Users,
} from "lucide-react";
import Link from "next/link";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Button } from "@/components/ui/button";
import { PhoneMockup } from "@/components/ui/phone-mockup";
import { CONTACT_EMAIL_MAILTO, SOCIAL_LINKS } from "@/lib/site-config";

const socialLinks = [
	{
		icon: Github,
		href: SOCIAL_LINKS.github,
		label: "GitHub",
	},
	{
		icon: Linkedin,
		href: SOCIAL_LINKS.linkedin,
		label: "LinkedIn",
	},
	{
		icon: Twitter,
		href: SOCIAL_LINKS.twitter,
		label: "Twitter/X",
	},
	{
		icon: Mail,
		href: CONTACT_EMAIL_MAILTO,
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
		icon: <Users className="h-6 w-6" />,
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
		<section className="relative border-b-2 border-border bg-background">
			<div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
				<div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
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
							<span className="flex items-center gap-2 border-2 border-border bg-background px-3 py-1">
								<span
									className="relative flex h-2 w-2 shrink-0"
									aria-hidden="true"
								>
									<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
									<span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
								</span>
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
						className="flex flex-col items-center gap-6"
					>
						<PhoneMockup />
						<div className="neo-panel p-5 w-full">
							<div className="mb-4 flex items-center justify-between">
								<p className="eyebrow">Impact board</p>
								<span className="neo-chip">2026</span>
							</div>
							<AnimatedCounter items={stats} />
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
