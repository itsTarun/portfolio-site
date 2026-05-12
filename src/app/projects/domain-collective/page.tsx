import {
	Clock,
	Database,
	ExternalLink,
	Globe,
	Layout,
	Lock,
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

const projectData = PROJECTS.domainCollective;

const technologies = [
	"Next.js 15",
	"React 19",
	"TypeScript",
	"Tailwind CSS",
	"shadcn/ui",
	"Better Auth",
	"PostgreSQL",
	"Prisma",
	"BullMQ",
	"Redis",
];

const keyFeatures = [
	"Contributed to frontend dashboard architecture for managing domain portfolios across providers.",
	"Built UI workflows for domain search, DNS management, and renewal tracking.",
	"Implemented responsive admin interfaces with Next.js App Router and TypeScript.",
	"Worked on multi-registrar integration flows including GoDaddy, Namecheap, and Gandi.",
	"Contributed to UI patterns for handling background job status and async provider updates.",
];

export const metadata: Metadata = createProjectMetadata({
	title: "Domain Collective - Multi-Registrar Management | Tarun Portfolio",
	description:
		"Domain Collective standardizes registrar APIs into one platform for domain, DNS, and renewal workflows.",
	path: "/projects/domain-collective",
	ogTitle: "Domain Collective - Multi-Registrar Management",
	ogDescription:
		"Unified domain portfolio management across GoDaddy, Namecheap, Gandi, and more.",
	imageUrl: "/opengraph-image",
	imageAlt: "Domain Collective project overview",
});

export default function DomainCollectivePage() {
	const breadcrumbs = buildProjectBreadcrumbs(
		"Domain Collective",
		"domain-collective",
	);

	return (
		<>
			<CreativeWorkSchema
				name={projectData.name}
				description={projectData.tagline}
				url={`${SITE_URL}/projects/domain-collective`}
				image={`${SITE_URL}${projectData.imageUrl}`}
				technologies={technologies}
				category={projectData.category}
			/>
			<BreadcrumbSchema breadcrumbs={breadcrumbs} />
			<div className="min-h-screen">
				<div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-5xl">
						<div className="mb-12 neo-panel p-8">
							<p className="eyebrow mb-3">Web application</p>
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
								<Badge>Domain Ops</Badge>
								<Badge variant="outline">Registrar Integrations</Badge>
								<Badge variant="outline">Web Platform</Badge>
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
							<h2 className="mb-4 text-2xl font-semibold">
								About Domain Collective
							</h2>
							<p className="mb-4 text-muted-foreground">
								Domain Collective is a multi-registrar domain management
								platform. I contributed to frontend architecture, dashboard
								workflows, and scalable UI systems for managing domains across
								providers including GoDaddy, Namecheap, and Gandi.
							</p>
							<div className="grid gap-4 md:grid-cols-2">
								<Card>
									<CardHeader>
										<div className="mb-4 flex h-10 w-10 items-center justify-center border-2 border-border">
											<Layout className="h-5 w-5 text-foreground" />
										</div>
										<CardTitle>Unified Dashboard</CardTitle>
										<CardDescription>
											Manage domains, DNS records, renewals, and provider health
											from a single interface.
										</CardDescription>
									</CardHeader>
								</Card>
								<Card>
									<CardHeader>
										<div className="mb-4 flex h-10 w-10 items-center justify-center border-2 border-border">
											<Lock className="h-5 w-5 text-foreground" />
										</div>
										<CardTitle>Credential Security</CardTitle>
										<CardDescription>
											Encrypted provider credentials with centralized
											auditability reduce operational risk.
										</CardDescription>
									</CardHeader>
								</Card>
								<Card>
									<CardHeader>
										<div className="mb-4 flex h-10 w-10 items-center justify-center border-2 border-border">
											<Database className="h-5 w-5 text-foreground" />
										</div>
										<CardTitle>Provider Abstraction</CardTitle>
										<CardDescription>
											Normalize API differences across registrars into one
											consistent service layer.
										</CardDescription>
									</CardHeader>
								</Card>
								<Card>
									<CardHeader>
										<div className="mb-4 flex h-10 w-10 items-center justify-center border-2 border-border">
											<Globe className="h-5 w-5 text-foreground" />
										</div>
										<CardTitle>Portfolio Visibility</CardTitle>
										<CardDescription>
											Track ownership, expiration, and DNS status for all
											domains in real time.
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
										{["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "shadcn/ui", "Better Auth"].map((tech) => (
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
										Backend & Infrastructure
									</p>
									<div className="flex flex-wrap gap-2">
										{["PostgreSQL", "Prisma", "BullMQ", "Redis"].map((tech) => (
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
										8,500+
									</div>
									<div className="text-sm text-muted-foreground">
										Domains managed
									</div>
								</div>
								<div>
									<div className="mb-2 text-4xl font-semibold text-foreground">
										84%
									</div>
									<div className="text-sm text-muted-foreground">
										API call reduction
									</div>
								</div>
								<div>
									<div className="mb-2 text-4xl font-semibold text-foreground">
										99.8%
									</div>
									<div className="text-sm text-muted-foreground">
										System uptime
									</div>
								</div>
							</div>
						</div>

						<div className="mb-12 neo-panel p-6">
							<h2 className="mb-4 text-2xl font-semibold">What I Learned</h2>
							<div className="grid gap-4 md:grid-cols-2">
								<div className="border-2 border-border p-4">
									<h3 className="mb-2 font-semibold">Managing Complexity</h3>
									<p className="text-sm text-muted-foreground">
										Working across multiple registrar integrations showed how
										important consistent data normalization is for reliable
										user-facing workflows.
									</p>
								</div>
								<div className="border-2 border-border p-4">
									<h3 className="mb-2 font-semibold">Security Awareness</h3>
									<p className="text-sm text-muted-foreground">
										Learned the importance of encrypted credentials and secure
										operations when contributing to systems handling sensitive
										provider keys.
									</p>
								</div>
								<div className="border-2 border-border p-4">
									<h3 className="mb-2 font-semibold">Async Operations</h3>
									<p className="text-sm text-muted-foreground">
										Understood how queue-backed operations improve UX when
										dealing with slow or variable external API response times.
									</p>
								</div>
								<div className="border-2 border-border p-4">
									<h3 className="mb-2 font-semibold">Data Clarity Matters</h3>
									<p className="text-sm text-muted-foreground">
										Clear domain portfolio and renewal status is as important
										as integration correctness for building user confidence.
									</p>
								</div>
							</div>
						</div>

						<NextProjectNav
							previousProject={{ title: "OpenTribe", slug: "opentribe" }}
							nextProject={{ title: "Repo Press", slug: "repo-press" }}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
