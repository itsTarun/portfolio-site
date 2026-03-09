import {
	Blocks,
	Clock,
	ExternalLink,
	LayoutDashboard,
	LinkIcon,
	Users,
} from "lucide-react";
import type { Metadata } from "next";
import { NextProjectNav } from "@/components/projects/next-project-nav";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { CreativeWorkSchema } from "@/components/seo/creative-work-schema";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const baseUrl = "https://itstarun.fyi";

const projectData = {
	id: "opentribe",
	title: "OpenTribe",
	tagline:
		"Talent marketplace for Polkadot ecosystem connecting organizations with contributors",
	category: "web",
	featured: false,
	liveUrl: "https://opentribe.io/",
	githubUrl: null,
};

const technologies = [
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
];

export const metadata: Metadata = {
	title: "OpenTribe - Web3 Talent Marketplace | Tarun Portfolio",
	description:
		"OpenTribe is a Polkadot ecosystem talent marketplace connecting organizations with developers, designers, and contributors.",
	alternates: {
		canonical: `${baseUrl}/projects/opentribe`,
	},
	openGraph: {
		type: "website",
		url: `${baseUrl}/projects/opentribe`,
		title: "OpenTribe - Web3 Talent Marketplace",
		description:
			"Talent infrastructure for Polkadot: grants, bounties, profiles, and team collaboration.",
		siteName: "Tarun Portfolio",
		images: [
			{
				url: "/opengraph-image",
				width: 1200,
				height: 630,
				alt: "OpenTribe project case study",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "OpenTribe - Web3 Talent Marketplace",
		description:
			"Talent infrastructure for Polkadot: grants, bounties, profiles, and team collaboration.",
		images: ["/opengraph-image"],
	},
};

export default function OpenTribePage() {
	const breadcrumbs = [
		{ name: "Home", url: "/" },
		{ name: "Projects", url: "/projects" },
		{ name: "OpenTribe", url: "/projects/opentribe" },
	];

	return (
		<>
			<CreativeWorkSchema
				name={projectData.title}
				description={projectData.tagline}
				url={`${baseUrl}/projects/opentribe`}
				image={`${baseUrl}/opengraph-image`}
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
									href={projectData.liveUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="hover:underline"
								>
									{projectData.title}
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
							<div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
								<Clock className="h-4 w-4" />
								<span>Project duration: 1-2 years</span>
							</div>
							<div>
								<Button asChild>
									<a
										href={projectData.liveUrl}
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

						<div className="mb-12 neo-panel p-6">
							<h2 className="mb-4 text-2xl font-semibold">Why OpenTribe?</h2>
							<p className="mb-4 text-muted-foreground">
								The Polkadot ecosystem lacks a centralized platform to connect
								Web3 organizations with skilled developers, designers, and
								contributors. OpenTribe bridges this gap by providing a
								dedicated talent layer with integrated workflows for grants,
								bounties, and team collaboration.
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
							<p className="mb-4 text-muted-foreground">
								Built with modern web technologies and a focus on scalability
								and performance, utilizing a monorepo structure with Turborepo
								for efficient development.
							</p>
							<div className="flex flex-wrap gap-2">
								{technologies.map((tech) => (
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

						<div className="mb-12 neo-panel p-6">
							<h2 className="mb-6 text-2xl font-semibold">Key Features</h2>
							<ul className="space-y-4">
								<li className="flex gap-3">
									<div className="flex h-6 w-6 flex-shrink-0 items-center justify-center border-2 border-border text-xs font-semibold">
										1
									</div>
									<p className="text-muted-foreground">
										Polkadot Blockchain Integration for verifiable transactions.
									</p>
								</li>
								<li className="flex gap-3">
									<div className="flex h-6 w-6 flex-shrink-0 items-center justify-center border-2 border-border text-xs font-semibold">
										2
									</div>
									<p className="text-muted-foreground">
										Grant Marketplace Aggregation to centralize funding
										opportunities.
									</p>
								</li>
								<li className="flex gap-3">
									<div className="flex h-6 w-6 flex-shrink-0 items-center justify-center border-2 border-border text-xs font-semibold">
										3
									</div>
									<p className="text-muted-foreground">
										Multi-Winner Bounties to incentivize community
										contributions.
									</p>
								</li>
								<li className="flex gap-3">
									<div className="flex h-6 w-6 flex-shrink-0 items-center justify-center border-2 border-border text-xs font-semibold">
										4
									</div>
									<p className="text-muted-foreground">
										Real-time Collaboration tools for organizations and teams.
									</p>
								</li>
								<li className="flex gap-3">
									<div className="flex h-6 w-6 flex-shrink-0 items-center justify-center border-2 border-border text-xs font-semibold">
										5
									</div>
									<p className="text-muted-foreground">
										Monorepo with Turborepo for streamlined development and
										deployment.
									</p>
								</li>
							</ul>
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
									<h3 className="mb-2 font-semibold">Web3 Integration</h3>
									<p className="text-sm text-muted-foreground">
										Connecting traditional Web2 interfaces seamlessly with
										blockchain networks requires careful state management.
									</p>
								</div>
								<div className="border-2 border-border p-4">
									<h3 className="mb-2 font-semibold">Marketplace Dynamics</h3>
									<p className="text-sm text-muted-foreground">
										Balancing the needs of organizations and contributors is
										crucial for a thriving talent ecosystem.
									</p>
								</div>
								<div className="border-2 border-border p-4">
									<h3 className="mb-2 font-semibold">Monorepo Architecture</h3>
									<p className="text-sm text-muted-foreground">
										Turborepo significantly accelerates development cycles when
										managing multiple interconnected packages.
									</p>
								</div>
								<div className="border-2 border-border p-4">
									<h3 className="mb-2 font-semibold">
										Real-time Collaboration
									</h3>
									<p className="text-sm text-muted-foreground">
										Building responsive and reliable collaboration tools
										involves optimizing data synchronization.
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
