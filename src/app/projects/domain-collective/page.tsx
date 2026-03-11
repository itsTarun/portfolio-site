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

const projectData = PROJECTS.domainCollective;

const technologies = [
	"Next.js 15",
	"React 19",
	"TypeScript",
	"PostgreSQL",
	"Prisma",
	"Tailwind CSS",
	"shadcn/ui",
	"Better Auth",
	"BullMQ",
	"Redis",
];

export const metadata: Metadata = {
	title: "Domain Collective - Multi-Registrar Management | Tarun Portfolio",
	description:
		"Domain Collective standardizes registrar APIs into one platform for domain, DNS, and renewal workflows.",
	alternates: {
		canonical: `${baseUrl}/projects/domain-collective`,
	},
	openGraph: {
		type: "website",
		url: `${baseUrl}/projects/domain-collective`,
		title: "Domain Collective - Multi-Registrar Management",
		description:
			"Unified domain portfolio management across GoDaddy, Namecheap, Gandi, and more.",
		siteName: "Tarun Portfolio",
		images: [
			{
				url: "/opengraph-image",
				width: 1200,
				height: 630,
				alt: "Domain Collective project case study",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Domain Collective - Multi-Registrar Management",
		description:
			"Unified domain portfolio management across GoDaddy, Namecheap, Gandi, and more.",
		images: ["/opengraph-image"],
	},
};

export default function DomainCollectiveCaseStudy() {
	const breadcrumbs = [
		{ name: "Home", url: "/" },
		{ name: "Projects", url: "/projects" },
		{ name: "Domain Collective", url: "/projects/domain-collective" },
	];

	return (
		<>
			<CreativeWorkSchema
				name={projectData.name}
				description={projectData.tagline}
				url={`${baseUrl}/projects/domain-collective`}
				image={`${baseUrl}${projectData.imageUrl}`}
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
								Why Domain Collective?
							</h2>
							<p className="mb-4 text-muted-foreground">
								Managing domains across different registrars means fragmented
								workflows, inconsistent APIs, and security risk from scattered
								credentials. Domain Collective unifies this into one control
								plane.
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
							<p className="mb-4 text-muted-foreground">
								Built on Next.js App Router with TypeScript and Prisma, backed
								by asynchronous workers for registrar sync and high-volume
								domain operations.
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
										Provider abstraction layer for GoDaddy, Namecheap, Gandi,
										and other registrars.
									</p>
								</li>
								<li className="flex gap-3">
									<div className="flex h-6 w-6 flex-shrink-0 items-center justify-center border-2 border-border text-xs font-semibold">
										2
									</div>
									<p className="text-muted-foreground">
										Automated renewal tracking and expiration alerts across
										accounts.
									</p>
								</li>
								<li className="flex gap-3">
									<div className="flex h-6 w-6 flex-shrink-0 items-center justify-center border-2 border-border text-xs font-semibold">
										3
									</div>
									<p className="text-muted-foreground">
										Bulk DNS operations with background processing for safe,
										fast execution.
									</p>
								</li>
								<li className="flex gap-3">
									<div className="flex h-6 w-6 flex-shrink-0 items-center justify-center border-2 border-border text-xs font-semibold">
										4
									</div>
									<p className="text-muted-foreground">
										Usage analytics and cache strategy to reduce external API
										load and improve responsiveness.
									</p>
								</li>
								<li className="flex gap-3">
									<div className="flex h-6 w-6 flex-shrink-0 items-center justify-center border-2 border-border text-xs font-semibold">
										5
									</div>
									<p className="text-muted-foreground">
										End-to-end credential encryption and audit logs for secure
										team collaboration.
									</p>
								</li>
							</ul>
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
									<h3 className="mb-2 font-semibold">Abstraction First</h3>
									<p className="text-sm text-muted-foreground">
										Consistent domain operations come from normalizing provider
										APIs into strict internal contracts.
									</p>
								</div>
								<div className="border-2 border-border p-4">
									<h3 className="mb-2 font-semibold">Security by Default</h3>
									<p className="text-sm text-muted-foreground">
										Credentials and domain actions need encryption, audit logs,
										and failure isolation from day one.
									</p>
								</div>
								<div className="border-2 border-border p-4">
									<h3 className="mb-2 font-semibold">Background Jobs Matter</h3>
									<p className="text-sm text-muted-foreground">
										Queue-backed bulk operations keep user interactions fast
										while handling variable registrar response times.
									</p>
								</div>
								<div className="border-2 border-border p-4">
									<h3 className="mb-2 font-semibold">
										Visibility Drives Trust
									</h3>
									<p className="text-sm text-muted-foreground">
										Clear portfolio and renewal status is as important as API
										integration correctness.
									</p>
								</div>
							</div>
						</div>

						<NextProjectNav
							previousProject={{ title: "OpenTribe", slug: "opentribe" }}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
