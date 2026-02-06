"use client";

import { motion } from "framer-motion";
import {
	ExternalLink,
	Globe,
	Layout,
	Smartphone,
	Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const flagshipProjects = [
	{
		id: "chargespot",
		title: "Chargespot",
		description:
			"Comprehensive EV charging station finder and management platform for India",
		longDescription:
			"Chargespot serves as a unified solution for discovering charging stations, managing charging sessions, planning trips, and handling payments - all from a single mobile application. Features real-time station discovery, AI-powered trip planning, live charging sessions with iOS Dynamic Island integration, multi-wallet payments, and comprehensive vehicle management.",
		technologies: [
			"Flutter",
			"Dart",
			"Google Maps",
			"Razorpay",
			"Firebase",
			"PostgreSQL",
			"Isar DB",
			"Provider",
			"OneSignal",
			"Google Navigation SDK",
		],
		category: "mobile",
		icon: Smartphone,
		highlights: [
			"iOS Live Activities & Widgets",
			"AI-Powered Trip Planning",
			"100% Bilingual Support (EN/HI)",
			"Multi-Wallet Integration",
			"Offline-First Architecture",
		],
		githubUrl: null,
		liveUrl: null,
	},
	{
		id: "opentribe",
		title: "OpenTribe",
		description:
			"Talent marketplace for Polkadot ecosystem connecting organizations with contributors",
		longDescription:
			"OpenTribe is talent layer for Polkadot ecosystem - a centralized marketplace that connects Web3 organizations with skilled developers, designers, and contributors. Features include grant marketplace aggregation, multi-winner bounty management, professional talent profiles, and organization dashboards with real-time collaboration tools.",
		technologies: [
			"Next.js 15",
			"React 19",
			"TypeScript",
			"PostgreSQL",
			"Prisma",
			"Polkadot (Dot)",
			"Tailwind CSS",
			"shadcn/ui",
			"Better Auth",
			"TanStack Query",
			"React Email",
		],
		category: "web",
		icon: Globe,
		highlights: [
			"Polkadot Blockchain Integration",
			"Grant Marketplace Aggregation",
			"Multi-Winner Bounties",
			"Real-time Collaboration",
			"Monorepo with Turborepo",
		],
		githubUrl: null,
		liveUrl: "https://opentribe.io",
	},
	{
		id: "domain-collective",
		title: "Domain Collective",
		description:
			"Unified domain management platform for multi-registrar portfolios",
		longDescription:
			"Domain Collective standardizes multiple registrar APIs (GoDaddy, Namecheap, Gandi, Porkbun, Name.com, Cloudflare) into a single, intuitive interface. Manage domains, DNS records, and nameservers in real-time with automatic updates. Features intelligent API standardization, encrypted credential storage, and bulk operations.",
		technologies: [
			"Next.js 15",
			"React 19",
			"TypeScript",
			"PostgreSQL",
			"Prisma",
			"Tailwind CSS",
			"shadcn/ui",
			"Better Auth",
			"Resend",
			"Biome",
		],
		category: "web",
		icon: Layout,
		highlights: [
			"6+ Registrar Integrations",
			"Real-time Synchronization",
			"Provider Abstraction Layer",
			"Encrypted Credential Storage",
			"Background Job Processing",
		],
		githubUrl: null,
		liveUrl: null,
	},
];

const fadeInUp = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.5 },
};

const containerVariants = {
	animate: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

export default function ProjectsPage() {
	return (
		<div className="min-h-screen relative overflow-hidden">
			<div className="blob-bg absolute inset-0 -z-10">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
				<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
			</div>

			<div className="container max-w-7xl mx-auto px-4 py-16 md:py-20 lg:py-24 sm:px-6 lg:px-8 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="mx-auto max-w-7xl"
				>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="mb-16 text-center"
					>
						<div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-6 py-2 text-sm font-semibold text-primary">
							<Sparkles className="h-4 w-4" />
							<span>My Work</span>
						</div>
						<h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
							Flagship Projects
						</h1>
						<p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
							Three major projects I&apos;ve been working on for the past 3-4
							years
						</p>
					</motion.div>

					<motion.div
						variants={containerVariants}
						initial="initial"
						animate="animate"
						className="grid gap-8 lg:gap-12"
					>
						{flagshipProjects.map((project) => (
							<motion.div
								key={project.id}
								variants={fadeInUp}
								whileHover={{ scale: 1.02 }}
								transition={{ duration: 0.2 }}
							>
								<Card className="overflow-hidden border-2 border-primary/20 shadow-xl">
									<CardHeader className="space-y-4 border-b bg-gradient-to-r from-primary/5 via-primary/10 to-secondary/5 pb-6">
										<div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
											<div className="flex items-start gap-4">
												<div className="hidden h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg sm:flex">
													<project.icon className="h-7 w-7" />
												</div>
												<div className="flex-1">
													<CardTitle className="mb-2 text-2xl sm:text-3xl font-bold">
														{project.title}
													</CardTitle>
													<Badge className="bg-gradient-to-r from-primary to-secondary">
														Flagship Project
													</Badge>
												</div>
											</div>
											{project.liveUrl && (
												<Button asChild className="shrink-0">
													<a
														href={project.liveUrl}
														target="_blank"
														rel="noopener noreferrer"
														className="gap-2"
													>
														<ExternalLink className="h-4 w-4" />
														<span className="hidden sm:inline">View Live</span>
														<span className="sm:hidden">Live</span>
													</a>
												</Button>
											)}
										</div>
										<CardDescription className="text-base leading-relaxed">
											{project.description}
										</CardDescription>
									</CardHeader>
									<CardContent className="space-y-6 p-6">
										<div>
											<p className="text-base leading-relaxed text-muted-foreground">
												{project.longDescription}
											</p>
										</div>

										<div className="rounded-xl bg-muted/50 p-4">
											<h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
												Key Highlights
											</h4>
											<div className="flex flex-wrap gap-2">
												{project.highlights.map((highlight, idx) => (
													<Badge
														key={idx}
														variant="outline"
														className="border-primary/50 bg-background"
													>
														{highlight}
													</Badge>
												))}
											</div>
										</div>

										<div>
											<h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
												Technologies
											</h4>
											<div className="flex flex-wrap gap-2">
												{project.technologies.map((tech) => (
													<Badge
														key={tech}
														variant="secondary"
														className="font-medium"
													>
														{tech}
													</Badge>
												))}
											</div>
										</div>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}
