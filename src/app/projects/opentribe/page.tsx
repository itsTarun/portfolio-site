import {
	Blocks,
	Clock,
	ExternalLink,
	LayoutDashboard,
	LinkIcon,
	Users,
} from "lucide-react";
import type { Metadata } from "next";
import { PROJECTS } from "@/config/projects";
import { NextProjectNav } from "@/components/projects/next-project-nav";
import { NumberedFeatureList } from "@/components/projects/numbered-feature-list";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { CreativeWorkSchema } from "@/components/seo/creative-work-schema";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { buildProjectBreadcrumbs } from "@/lib/project-breadcrumbs";
import { createProjectMetadata } from "@/lib/project-metadata";
import { SITE_URL } from "@/lib/site-config";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const projectData = PROJECTS.opentribe;

const technologies = [
	"Next.js 15",
	"React 19",
	"TypeScript",
	"Tailwind CSS",
	"shadcn/ui",
	"TanStack Query",
	"Better Auth",
	"React Email",
	"Polkadot (Dot)",
	"PostgreSQL",
	"Prisma",
];

const keyFeatures = [
	"Contributed to dashboard flows for organization management and bounty workflows.",
	"Built reusable UI components and product screens with shadcn/ui and Tailwind CSS.",
	"Implemented authentication and session management using Better Auth.",
	"Integrated TanStack Query for data fetching and UI state management across the app.",
	"Worked in a Turborepo monorepo environment with shared packages across frontend apps.",
];

export const metadata: Metadata = createProjectMetadata({
	title: "OpenTribe - Web3 Talent Marketplace | Tarun Portfolio",
	description:
		"OpenTribe is a Polkadot ecosystem talent marketplace connecting organizations with developers, designers, and contributors.",
	path: "/projects/opentribe",
	ogTitle: "OpenTribe - Web3 Talent Marketplace",
	ogDescription:
		"Talent infrastructure for Polkadot: grants, bounties, profiles, and team collaboration.",
	imageUrl: "/opengraph-image",
	imageAlt: "OpenTribe project overview",
});

export default function OpenTribePage() {
	const breadcrumbs = buildProjectBreadcrumbs("OpenTribe", "opentribe");

	return (
		<>
			<CreativeWorkSchema
				name={projectData.name}
				description={projectData.tagline}
				url={`${SITE_URL}/projects/opentribe`}
				image={`${SITE_URL}${projectData.imageUrl}`}
				technologies={technologies}
				category={projectData.category}
			/>
			<BreadcrumbSchema breadcrumbs={breadcrumbs} />
			<div className="min-h-screen">
				<div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-5xl">
						<div className="mb-12 neo-panel p-8">
							<p className="eyebrow mb-3">Web platform</p>
							<h1 className="mb-4 text-4xl font-semibold tracking-tight sm:text-5xl">
								<a
									href={projectData.url}
									target="_blank"
									rel="noopener noreferrer"
									className="hover:underline"
								>
									{projectData.name}
								</a>
							</h1>
							<p className="mb-6 text-xl text-muted-foreground">
								{projectData.tagline}
							</p>
							<div className="mb-6 flex flex-wrap gap-2">
								<Badge>Marketplace</Badge>
								<Badge variant="outline">Web3</Badge>
								<Badge variant="outline">Community Platform</Badge>
							</div>
							{projectData.projectDuration && (
								<div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
									<Clock className="h-4 w-4" />
									<span>Project duration: {projectData.projectDuration}</span>
								</div>
							)}
							<div>
								<Button asChild>
									<a
										href={projectData.url}
										target="_blank"
										rel="noopener noreferrer"
										className="gap-2"
									>
										<ExternalLink className="h-4 w-4" />
										View Live
									</a>
								</Button>
							</div>
						</div>

						<div className="mb-12 neo-panel p-2">
							<img
								src={projectData.imageUrl}
								alt={`${projectData.name} screenshot`}
								className="w-full h-auto rounded-lg"
							/>
						</div>

						<div className="mb-12 neo-panel p-6">
							<h2 className="mb-4 text-2xl font-semibold">About OpenTribe</h2>
							<p className="mb-4 text-muted-foreground">
								OpenTribe is a talent and bounty platform built for the
								Polkadot ecosystem. I contributed to frontend product
								development, platform UX, and modern web architecture using
								Next.js and TypeScript. My work included dashboard flows,
								reusable UI systems, authentication flows, and responsive
								product experiences.
							</p>
							<div className="grid gap-4 md:grid-cols-2">
								<Card>
									<CardHeader>
										<div className="mb-4 flex h-10 w-10 items-center justify-center border-2 border-border">
											<Users className="h-5 w-5 text-foreground" />
										</div>
										<CardTitle>Talent Matching</CardTitle>
										<CardDescription>
											Professional profiles and role-based discovery for teams
											and contributors.
										</CardDescription>
									</CardHeader>
								</Card>
								<Card>
									<CardHeader>
										<div className="mb-4 flex h-10 w-10 items-center justify-center border-2 border-border">
											<Blocks className="h-5 w-5 text-foreground" />
										</div>
										<CardTitle>Grant and Bounty Workflows</CardTitle>
										<CardDescription>
											Support for multi-winner bounties and ecosystem-wide grant
											coordination.
										</CardDescription>
									</CardHeader>
								</Card>
								<Card>
									<CardHeader>
										<div className="mb-4 flex h-10 w-10 items-center justify-center border-2 border-border">
											<LayoutDashboard className="h-5 w-5 text-foreground" />
										</div>
										<CardTitle>Organization Dashboards</CardTitle>
										<CardDescription>
											Real-time collaboration tools for Web3 organizations to
											manage projects.
										</CardDescription>
									</CardHeader>
								</Card>
								<Card>
									<CardHeader>
										<div className="mb-4 flex h-10 w-10 items-center justify-center border-2 border-border">
											<LinkIcon className="h-5 w-5 text-foreground" />
										</div>
										<CardTitle>Blockchain Integration</CardTitle>
										<CardDescription>
											Seamless integration with Polkadot (Dot) for transparent
											transactions.
										</CardDescription>
									</CardHeader>
								</Card>
							</div>
						</div>

						<div className="mb-12 neo-panel p-8">
							<h2 className="mb-6 text-2xl font-semibold">Technologies Used</h2>
							<div className="space-y-4">
								<div>
									<p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
										Frontend
									</p>
									<div className="flex flex-wrap gap-2">
										{["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "shadcn/ui", "TanStack Query", "Better Auth", "React Email"].map((tech) => (
											<Badge
												key={tech}
												variant="secondary"
												className="text-sm font-medium"
											>
												{tech}
											</Badge>
										))}
									</div>
								</div>
								<div>
									<p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
										Platform & Backend
									</p>
									<div className="flex flex-wrap gap-2">
										{["Polkadot (Dot)", "PostgreSQL", "Prisma"].map((tech) => (
											<Badge
												key={tech}
												variant="secondary"
												className="text-sm font-medium"
											>
												{tech}
											</Badge>
										))}
									</div>
								</div>
							</div>
						</div>

						<div className="mb-12 neo-panel p-6">
							<h2 className="mb-6 text-2xl font-semibold">Key Features</h2>
							<NumberedFeatureList features={keyFeatures} />
						</div>

						<div className="mb-12 neo-panel p-8">
							<h2 className="mb-4 text-2xl font-semibold">Results</h2>
							<div className="grid gap-6 md:grid-cols-3">
								<div>
									<div className="mb-2 text-4xl font-semibold text-foreground">
										1,200+
									</div>
									<div className="text-sm text-muted-foreground">
										Active contributors
									</div>
								</div>
								<div>
									<div className="mb-2 text-4xl font-semibold text-foreground">
										$500k+
									</div>
									<div className="text-sm text-muted-foreground">
										In grants & bounties
									</div>
								</div>
								<div>
									<div className="mb-2 text-4xl font-semibold text-foreground">
										50+
									</div>
									<div className="text-sm text-muted-foreground">
										Web3 organizations
									</div>
								</div>
							</div>
						</div>

						<div className="mb-12 neo-panel p-6">
							<h2 className="mb-4 text-2xl font-semibold">What I Learned</h2>
							<div className="grid gap-4 md:grid-cols-2">
								<div className="border-2 border-border p-4">
									<h3 className="mb-2 font-semibold">Web3 Frontend Patterns</h3>
									<p className="text-sm text-muted-foreground">
										Learned how to connect React UIs with Polkadot wallet state
										and handle blockchain transaction feedback in a standard web
										app.
									</p>
								</div>
								<div className="border-2 border-border p-4">
									<h3 className="mb-2 font-semibold">Product Thinking</h3>
									<p className="text-sm text-muted-foreground">
										Working on a two-sided platform helped me understand how
										product decisions affect both contributors and the
										organizations hiring them.
									</p>
								</div>
								<div className="border-2 border-border p-4">
									<h3 className="mb-2 font-semibold">Monorepo Development</h3>
									<p className="text-sm text-muted-foreground">
										Learned how to work efficiently in a Turborepo monorepo,
										sharing types, components, and configurations across
										frontend packages.
									</p>
								</div>
								<div className="border-2 border-border p-4">
									<h3 className="mb-2 font-semibold">Data Fetching Patterns</h3>
									<p className="text-sm text-muted-foreground">
										Used TanStack Query to manage server state, caching, and
										optimistic updates across collaborative UI flows.
									</p>
								</div>
							</div>
						</div>

						<NextProjectNav
							previousProject={{ title: "Chargespot", slug: "chargespot" }}
							nextProject={{
								title: "Domain Collective",
								slug: "domain-collective",
							}}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
