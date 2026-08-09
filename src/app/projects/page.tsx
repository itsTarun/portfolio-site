import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const flagshipProjects = [
	{
		id: "chargespot",
		title: "Chargespot",
		imageUrl: "/images/projects/chargespot.webp",
		description:
			"EV charging station finder and management platform for India. Real-time station discovery, AI-powered trip planning, live charging sessions with iOS Dynamic Island, and multi-wallet payments.",
		technologies: [
			"Flutter",
			"Dart",
			"iOS ActivityKit",
			"Google Maps Flutter",
			"Google Navigation SDK",
			"Geolocator",
			"OCPP / WebSockets",
			"Razorpay",
			"Firebase Auth + FCM",
			"Isar DB",
			"PostgreSQL",
			"Provider",
		],
		highlights: [
			"iOS Live Activities & Widgets",
			"AI-Powered Trip Planning",
			"100% Bilingual Support (EN/HI)",
			"Multi-Wallet Integration",
			"Offline-First Architecture",
		],
		githubUrl: null,
		liveUrl: "https://chargespot.app/",
	},
	{
		id: "opentribe",
		title: "OpenTribe",
		imageUrl: "/images/projects/opentribe.webp",
		description:
			"Talent marketplace for the Polkadot ecosystem. Connects Web3 organizations with skilled developers and contributors via grant aggregation, bounty management, and real-time collaboration tools.",
		technologies: [
			"Next.js 15",
			"React 19",
			"TypeScript",
			"@polkadot/api",
			"@polkadot/extension-dapp",
			"TanStack Query",
			"PostgreSQL",
			"Prisma",
			"Better Auth",
			"Turborepo",
			"Tailwind CSS",
			"shadcn/ui",
		],
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
		imageUrl: "/images/projects/domain-collective.webp",
		description:
			"Unified domain management across GoDaddy, Namecheap, Gandi, Porkbun, Name.com, and Cloudflare. Manage domains, DNS records, and nameservers from a single interface with encrypted credential storage.",
		technologies: [
			"Next.js 15",
			"React 19",
			"TypeScript",
			"BullMQ",
			"Redis",
			"PostgreSQL",
			"Prisma",
			"Better Auth",
			"Resend",
			"Zod",
			"Tailwind CSS",
			"shadcn/ui",
		],
		highlights: [
			"6+ Registrar Integrations",
			"Real-time Synchronization",
			"Provider Abstraction Layer",
			"Encrypted Credential Storage",
			"Background Job Processing",
		],
		githubUrl: null,
		liveUrl: "https://collective.domains/",
	},
	{
		id: "repo-press",
		title: "Repo Press",
		imageUrl: "/images/projects/repo-press.webp",
		description:
			"Git-native MDX editing with a Notion-like experience for GitHub-hosted content. Connects to your repositories and keeps everything in Git — your content, your history, your rules.",
		technologies: [
			"Convex",
			"Next.js",
			"TypeScript",
			"GitHub API",
			"GitHub OAuth",
			"MDX",
			"Remark",
			"React",
			"Tailwind CSS",
		],
		highlights: [
			"GitHub Repository Integration",
			"Notion-like MDX Editor",
			"Git-native Content Storage",
			"No Proprietary Lock-in",
			"Full Edit History via Git",
		],
		githubUrl: "https://github.com/itsyogesh/repo-press",
		liveUrl: "https://repo-press.vercel.app/",
	},
];

export default function ProjectsPage() {
	return (
		<div className="min-h-screen">
			<div className="container max-w-6xl mx-auto px-4 py-16 md:py-20 lg:py-24 sm:px-6 lg:px-8">
				<div>
					<div className="animate-rise mb-12">
						<h1 className="section-title">Flagship projects</h1>
						<p className="section-subtitle mt-4 max-w-2xl">
							Deep dives into the products I&apos;ve shipped across web and
							mobile.
						</p>
					</div>

					<div className="grid gap-6 md:grid-cols-2">
						{flagshipProjects.map((project, idx) => (
							<div
								key={project.id}
								className="animate-rise neo-panel flex flex-col overflow-hidden transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_hsl(var(--border))]"
								style={{ animationDelay: `${idx * 80}ms` }}
							>
								<div className="relative h-40 w-full flex-shrink-0 overflow-hidden border-b-2 border-border">
									<Image
										src={project.imageUrl}
										alt={`${project.title} screenshot`}
										fill
										sizes="(min-width: 768px) 50vw, 100vw"
										className="object-cover"
									/>
								</div>

								<div className="flex flex-col flex-1 p-6">
									<div className="mb-4 flex items-start justify-between gap-4">
										<h2 className="text-2xl font-semibold">{project.title}</h2>
										<div className="flex gap-2">
											<Button asChild size="sm">
												<Link href={`/projects/${project.id}`}>View</Link>
											</Button>
											{project.liveUrl && (
												<Button asChild size="sm" variant="outline">
													<a
														href={project.liveUrl}
														target="_blank"
														rel="noopener noreferrer"
														aria-label={`${project.title} live site`}
													>
														<ExternalLink className="h-3.5 w-3.5" />
													</a>
												</Button>
											)}
										</div>
									</div>

									<p className="mb-5 text-sm text-muted-foreground leading-relaxed flex-1">
										{project.description}
									</p>

									<div className="border-t-2 border-border pt-4">
										<p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
											Stack
										</p>
										<div className="flex flex-wrap gap-1.5">
											{project.technologies.slice(0, 6).map((tech) => (
												<Badge key={tech} variant="secondary">
													{tech}
												</Badge>
											))}
											{project.technologies.length > 6 && (
												<Badge variant="outline">
													+{project.technologies.length - 6}
												</Badge>
											)}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
