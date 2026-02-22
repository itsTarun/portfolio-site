import { Blocks, ExternalLink, Users } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { CreativeWorkSchema } from "@/components/seo/creative-work-schema";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { NextProjectNav } from "@/components/projects/next-project-nav";

const baseUrl = "https://itstarun.fyi";

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
				name="OpenTribe"
				description="Talent marketplace for the Polkadot ecosystem."
				url={`${baseUrl}/projects/opentribe`}
				image={`${baseUrl}/opengraph-image`}
				technologies={[
					"Next.js",
					"TypeScript",
					"PostgreSQL",
					"Prisma",
					"Tailwind CSS",
					"TanStack Query",
				]}
				category="web"
			/>
			<BreadcrumbSchema breadcrumbs={breadcrumbs} />
			<div className="min-h-screen">
				<div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-5xl">
						<div className="mb-8">
							<Link
								href="/projects"
								className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
							>
								← Back to all projects
							</Link>
						</div>

						<div className="mb-12 rounded-lg border border-border bg-card p-8">
							<p className="eyebrow mb-3">Web platform</p>
							<h1 className="mb-4 text-4xl font-semibold tracking-tight sm:text-5xl">
								OpenTribe
							</h1>
							<p className="mb-6 text-xl text-muted-foreground">
								Talent layer for the Polkadot ecosystem, designed to connect
								organizations and contributors with clear project workflows.
							</p>
							<div className="flex flex-wrap gap-2">
								<Badge>Marketplace</Badge>
								<Badge variant="outline">Web3</Badge>
								<Badge variant="outline">Community Platform</Badge>
							</div>
							<div className="mt-6">
								<Button asChild>
									<a
										href="https://opentribe.io/"
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

						<div className="mb-12 grid gap-4 md:grid-cols-2">
							<Card>
								<CardHeader>
									<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-border">
										<Users className="h-5 w-5 text-foreground" />
									</div>
									<CardTitle>Talent Matching</CardTitle>
									<CardDescription>
										Professional profiles and role-based discovery for teams and
										contributors.
									</CardDescription>
								</CardHeader>
							</Card>
							<Card>
								<CardHeader>
									<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-border">
										<Blocks className="h-5 w-5 text-foreground" />
									</div>
									<CardTitle>Grant and Bounty Workflows</CardTitle>
									<CardDescription>
										Support for multi-winner bounties and ecosystem-wide grant
										coordination.
									</CardDescription>
								</CardHeader>
							</Card>
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
