import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/config/projects";

interface FlagshipProject {
	id: string;
	title: string;
	imageUrl: string;
	imageAlt: string;
	description: string;
	technologies: string[];
	highlights: string[];
	githubUrl: string | null;
	liveUrl: string | null;
	appStoreUrl?: string;
	playStoreUrl?: string;
}

const flagshipProjects: FlagshipProject[] = [
	{
		id: PROJECTS.chargespot.id,
		title: PROJECTS.chargespot.name,
		imageUrl: PROJECTS.chargespot.imageUrl,
		// Marketing-site capture showing live map, mobile app screen, and status cards
		imageAlt:
			"Chargespot marketing site hero reading 'Anywhere is in range.', showing a map of Delhi, mobile EV charging app screen, vehicle card, and live charger status",
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
		githubUrl: PROJECTS.chargespot.githubUrl,
		liveUrl: PROJECTS.chargespot.url,
		appStoreUrl: PROJECTS.chargespot.appStoreUrl,
		playStoreUrl: PROJECTS.chargespot.playStoreUrl,
	},
	{
		id: PROJECTS.opentribe.id,
		title: PROJECTS.opentribe.name,
		imageUrl: PROJECTS.opentribe.imageUrl,
		// Marketing-site capture, not an app screenshot
		imageAlt:
			"OpenTribe promo banner reading 'Enabling builders anywhere to get paid on-chain', with an illustrated developer at a desk",
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
		githubUrl: PROJECTS.opentribe.githubUrl,
		liveUrl: PROJECTS.opentribe.url,
	},
	{
		id: PROJECTS.domainCollective.id,
		title: PROJECTS.domainCollective.name,
		imageUrl: PROJECTS.domainCollective.imageUrl,
		// Marketing-site capture, not an app screenshot
		imageAlt:
			"Domain Collective promo banner reading 'One dashboard for all your domains', with a line-art illustration of the dashboard",
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
		githubUrl: PROJECTS.domainCollective.githubUrl,
		liveUrl: PROJECTS.domainCollective.url,
	},
	{
		id: PROJECTS.repoPress.id,
		title: PROJECTS.repoPress.name,
		imageUrl: PROJECTS.repoPress.imageUrl,
		// Marketing-site capture, not an app screenshot
		imageAlt:
			"Repo Press promo card reading 'Git-native MDX editing', above a mock list of .mdx files including README and getting-started",
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
		githubUrl: PROJECTS.repoPress.githubUrl,
		liveUrl: PROJECTS.repoPress.url,
	},
];

export default function ProjectsPage() {
	return (
		<div className="min-h-screen">
			<div className="container max-w-6xl mx-auto px-4 py-16 md:py-20 lg:py-24 sm:px-6 lg:px-8">
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
							className="animate-rise neo-panel flex flex-col overflow-hidden rounded-2xl transition-all duration-200 hover:border-border/80 hover:bg-muted/30"
							style={{ animationDelay: `${idx * 80}ms` }}
						>
							<div className="relative h-44 w-full flex-shrink-0 overflow-hidden border-b border-border/50">
								<Image
									src={project.imageUrl}
									alt={project.imageAlt}
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

								{(project.appStoreUrl || project.playStoreUrl) && (
									<div className="mb-4 flex flex-wrap gap-x-4 gap-y-2 text-xs font-mono">
										{project.appStoreUrl && (
											<a
												href={project.appStoreUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="link-underline text-muted-foreground hover:text-foreground"
											>
												App Store ↗
											</a>
										)}
										{project.playStoreUrl && (
											<a
												href={project.playStoreUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="link-underline text-muted-foreground hover:text-foreground"
											>
												Google Play ↗
											</a>
										)}
									</div>
								)}

								<div className="border-t border-border/50 pt-4">
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
	);
}
