import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL_MAILTO, SOCIAL_LINKS } from "@/lib/site-config";

// Rendered as text, not icons — the label is the link's accessible name
const socialLinks = [
	{ href: SOCIAL_LINKS.github, label: "GitHub" },
	{ href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
	{ href: SOCIAL_LINKS.twitter, label: "Twitter/X" },
	{ href: CONTACT_EMAIL_MAILTO, label: "Email" },
];

const stats = [
	{ id: 1, label: "Years Building", value: 8, suffix: "+" },
	{ id: 2, label: "Teams", value: 5, suffix: "" },
	{ id: 3, label: "Platforms", value: 3, suffix: "" },
	{ id: 4, label: "Crash-Free Rate", value: 99, suffix: "%" },
];

export function HeroSection() {
	return (
		<section className="relative border-b border-border/50 bg-background">
			<div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 max-w-6xl">
				<div className="grid gap-16 lg:grid-cols-[1fr_400px] lg:items-start">
					{/* Left Column: Text & Context */}
					<div className="animate-rise space-y-10">
						<div className="space-y-4">
							<div className="flex flex-wrap items-center gap-3 text-xs font-mono text-muted-foreground">
								<span className="flex items-center gap-1.5">
									<span className="h-1.5 w-1.5 rounded-full bg-green-500" />
									Available for select work
								</span>
								<span className="hidden sm:inline-block text-border">•</span>
								<span className="hidden sm:inline-block">
									Based in India (IST)
								</span>
							</div>

							<h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-foreground text-balance">
								Production apps across mobile and web, built to ship.
							</h1>

							<p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
								I&apos;m Tarun, a mobile &amp; full-stack engineer building iOS,
								Flutter, and web applications since 2018. I lean into R&amp;D,
								solid architecture, and hands-on QA to ship stable releases
								teams trust.
							</p>
						</div>

						<div className="flex flex-wrap items-center gap-4">
							<Button asChild size="lg" className="rounded-full">
								<Link href="/projects">
									View Selected Work
									<ArrowRight className="ml-2 h-4 w-4" />
								</Link>
							</Button>
							<Button
								asChild
								size="lg"
								variant="outline"
								className="rounded-full"
							>
								<Link href="/resume">View Resume</Link>
							</Button>
						</div>

						<div className="pt-8 border-t border-border/50">
							<div className="flex flex-wrap gap-x-6 gap-y-3">
								{socialLinks.map((social) => (
									<a
										key={social.label}
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										className="group flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
									>
										{social.label}
										<ArrowUpRight className="h-3.5 w-3.5 opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
									</a>
								))}
							</div>
						</div>
					</div>

					{/* Right Column: Data & Stats */}
					<div
						className="animate-rise rounded-2xl border border-border/50 bg-muted/20 p-6 overflow-hidden"
						style={{ animationDelay: "100ms" }}
					>
						<div className="mb-8 flex items-center justify-between border-b border-border/50 pb-4">
							<h2 className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
								Impact Board
							</h2>
							<span className="text-xs font-mono text-muted-foreground bg-muted/50 px-2 py-1 rounded-md">
								2026
							</span>
						</div>

						<AnimatedCounter items={stats} />

						<div className="mt-8 space-y-4">
							<div className="flex flex-col gap-1 border-t border-border/50 pt-4">
								<span className="text-xs font-mono text-muted-foreground">
									Focus
								</span>
								<span className="text-sm font-medium text-foreground">
									Mobile &amp; Web UX, Architecture, Release Quality
								</span>
							</div>
							<div className="flex flex-col gap-1">
								<span className="text-xs font-mono text-muted-foreground">
									Stack
								</span>
								<div className="flex flex-wrap gap-2 mt-2">
									<span className="text-xs font-medium bg-background text-foreground px-2.5 py-1 rounded-md border border-border/50">
										Flutter
									</span>
									<span className="text-xs font-medium bg-background text-foreground px-2.5 py-1 rounded-md border border-border/50">
										iOS
									</span>
									<span className="text-xs font-medium bg-background text-foreground px-2.5 py-1 rounded-md border border-border/50">
										Next.js
									</span>
									<span className="text-xs font-medium bg-background text-foreground px-2.5 py-1 rounded-md border border-border/50">
										TypeScript
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
