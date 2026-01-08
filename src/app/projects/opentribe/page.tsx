import { Clock, GitBranch, Globe, Shield, Users, Zap } from "lucide-react";
import { FeatureSection } from "@/components/projects/feature-section";
import { NextProjectNav } from "@/components/projects/next-project-nav";
import { ProjectHero } from "@/components/projects/project-hero";
import { TechStackDetails } from "@/components/projects/tech-stack-details";

const openTribeData = {
	id: "opentribe",
	title: "OpenTribe",
	tagline: "Connecting Polkadot talent with organizations worldwide",
	category: "web",
	featured: true,
	liveUrl: "https://opentribe.io",
	githubUrl: null,
};

export default function OpenTribeCaseStudy() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/50">
			<ProjectHero project={openTribeData} />

			<FeatureSection
				title="The Web3 Talent Marketplace"
				description="OpenTribe addresses the core challenge of connecting skilled contributors with blockchain organizations through a unified, user-friendly platform."
				features={[
					"Polkadot Blockchain Integration",
					"Grant Marketplace Aggregation",
					"Multi-Winner Bounty Management",
					"Real-time Collaboration Tools",
					"Monorepo with Turborepo",
					"Organization Talent Profiles",
				]}
			/>

			<section className="py-16"
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-5xl"
					>
						<h2 className="mb-8 text-3xl font-bold">The Challenge</h2>
						<div className="grid gap-6 md:grid-cols-2">
							<div className="rounded-xl border border-border bg-muted/30 p-6"
							>
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
									<Users className="h-6 w-6 text-primary" />
								</div>
								<h3 className="mb-3 text-xl font-semibold">Scattered Talent</h3>
								<p className="text-muted-foreground">
									The Web3 ecosystem suffers from fragmented talent discovery
									across multiple platforms, DAOs, and social channels.
									Contributors struggle to find relevant opportunities, while
									organizations spend hours searching for skilled developers.
								</p>
							</div>

							<div className="rounded-xl border border-border bg-muted/30 p-6"
							>
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
									<Clock className="h-6 w-6 text-primary" />
								</div>
								<h3 className="mb-3 text-xl font-semibold">
									Time-Consuming Hiring
								</h3>
								<p className="text-muted-foreground">
									Organizations and DAOs dedicate significant resources to
									vetting candidates, managing applications, and coordinating
									hiring processes across different timezones and communication
									channels.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-16 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-5xl"
					>
						<h2 className="mb-8 text-3xl font-bold">The Solution</h2>
						<div className="grid gap-6 md:grid-cols-2">
							<div className="rounded-xl border-2 border-border bg-card p-6"
							>
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white">
									<Zap className="h-6 w-6" />
								</div>
								<h3 className="mb-3 text-xl font-semibold">
									Unified Talent Layer
								</h3>
								<p className="text-muted-foreground">
									OpenTribe provides a single platform for organizations to post
									grants and bounties, and for contributors to discover and
									apply for opportunities across the entire Polkadot ecosystem.
								</p>
							</div>

							<div className="rounded-xl border-2 border-border bg-card p-6"
							>
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white">
									<Shield className="h-6 w-6" />
								</div>
								<h3 className="mb-3 text-xl font-semibold">
									Real-Time Collaboration
								</h3>
								<p className="text-muted-foreground">
									Integrated real-time chat, project management, and code
									collaboration tools to streamline the entire hiring and
									contribution workflow from discovery to delivery.
								</p>
							</div>

							<div className="rounded-xl border-2 border-border bg-card p-6"
							>
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white">
									<GitBranch className="h-6 w-6" />
								</div>
								<h3 className="mb-3 text-xl font-semibold">Smart Bounties</h3>
								<p className="text-muted-foreground">
									AI-powered bounty matching with multi-winner support,
									automatic deadline tracking, and milestone-based payments for
									complex projects.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<TechStackDetails
				technologies={[
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
				]}
				description="Built with modern web technologies including Next.js 15's App Router, React 19 Server Components, Prisma ORM, and Polkadot blockchain integration."
			/>

			<section className="py-16"
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-5xl"
					>
						<h2 className="mb-8 text-3xl font-bold">Key Features</h2>
						<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
							<div className="rounded-xl border border-border bg-card p-6">
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
									<Zap className="h-6 w-6 text-primary" />
								</div>
								<h3 className="mb-3 text-xl font-semibold">Talent Profiles</h3>
								<p className="text-muted-foreground">
									Comprehensive contributor profiles with skills, experience,
									portfolio, and on-chain reputation.
								</p>
							</div>

							<div className="rounded-xl border border-border bg-card p-6">
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
									<Globe className="h-6 w-6 text-primary" />
								</div>
								<h3 className="mb-3 text-xl font-semibold">
									Grant Aggregation
								</h3>
								<p className="text-muted-foreground">
									Automatically aggregates grants from multiple DAOs and
									organizations into a single searchable feed with filters and
									notifications.
								</p>
							</div>

							<div className="rounded-xl border border-border bg-card p-6">
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
									<Clock className="h-6 w-6 text-primary" />
								</div>
								<h3 className="mb-3 text-xl font-semibold">Bounty Dashboard</h3>
								<p className="text-muted-foreground">
									Manage multi-winner bounties with automatic escrow, milestone
									tracking, and transparent payment distribution.
								</p>
							</div>

							<div className="rounded-xl border border-border bg-card p-6">
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
									<Users className="h-6 w-6 text-primary" />
								</div>
								<h3 className="mb-3 text-xl font-semibold">
									Organization Portal
								</h3>
								<p className="text-muted-foreground">
									Organization dashboard to post grants, manage bounties, track
									applications, and communicate with contributors.
								</p>
							</div>

							<div className="rounded-xl border border-border bg-card p-6">
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
									<Shield className="h-6 w-6 text-primary" />
								</div>
								<h3 className="mb-3 text-xl font-semibold">Real-Time Chat</h3>
								<p className="text-muted-foreground">
									Built-in chat system with channels for projects,
									organizations, and direct messaging with file sharing.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-16 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5"
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-5xl text-center"
					>
						<h2 className="mb-8 text-3xl font-bold">Development Journey</h2>
						<p className="mb-8 text-xl text-muted-foreground">
							From Web3 exploration to production-ready platform with real-time
							collaboration tools and blockchain integration.
						</p>
						<div className="grid gap-6 md:grid-cols-3">
							<div className="rounded-xl border border-border bg-card p-6 text-center"
							>
								<div className="text-4xl font-bold text-primary mb-2">6</div>
								<div>Months</div>
								<div>Development</div>
							</div>

							<div className="rounded-xl border border-border bg-card p-6 text-center"
							>
								<div className="text-4xl font-bold text-primary mb-2">20+</div>
								<div>Features</div>
								<div>Implemented</div>
							</div>

							<div className="rounded-xl border border-border bg-card p-6 text-center"
							>
								<div className="text-4xl font-bold text-primary mb-2">100%</div>
								<div>TypeScript</div>
								<div>Coverage</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-16"
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-5xl"
					>
						<h2 className="mb-8 text-3xl font-bold">Results & Impact</h2>
						<div className="rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
							<div className="grid gap-6 md:grid-cols-3">
								<div>
									<div className="text-4xl font-bold text-primary mb-2">
										50+
									</div>
									<div className="text-sm text-muted-foreground">
										Organizations
									</div>
									<p className="text-xs text-muted-foreground">
										Onboarded from Polkadot ecosystem
									</p>
								</div>

								<div>
									<div className="text-4xl font-bold text-primary mb-2">
										500+
									</div>
									<div className="text-sm text-muted-foreground">
										Contributors
									</div>
									<p className="text-xs text-muted-foreground">
										Registered on platform
									</p>
								</div>

								<div>
									<div className="text-4xl font-bold text-primary mb-2">
										200+
									</div>
									<div className="text-sm text-muted-foreground">Grants</div>
									<p className="text-xs text-muted-foreground">
										Aggregated across ecosystem
									</p>
								</div>
							</div>

							<div className="mt-8 grid gap-6 md:grid-cols-2">
								<div>
									<div className="text-4xl font-bold text-primary mb-2">
										85%
									</div>
									<div className="text-sm text-muted-foreground">
										Time Saved
									</div>
									<p className="text-xs text-muted-foreground">
										For talent discovery
									</p>
								</div>

								<div>
									<div className="text-4xl font-bold text-primary mb-2">
										4.8
									</div>
									<div className="text-sm text-muted-foreground">
										App Store Rating
									</div>
									<p className="text-xs text-muted-foreground">
										Out of 5 stars
									</p>
								</div>
							</div>
						</div>

						<div className="mt-8"
						>
							<h3 className="mb-4 text-2xl font-semibold">What I Learned</h3>
							<ul className="space-y-3">
								<li className="flex gap-3">
									<span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary font-bold">
										1
									</span>
									<p className="text-muted-foreground">
										Server Components revolutionize how we think about data
										fetching and state management in Web3 applications.
									</p>
								</li>
								<li className="flex gap-3">
									<span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary font-bold">
										2
									</span>
									<p className="text-muted-foreground">
										Better Auth provides secure, flexible authentication that
										works seamlessly with Next.js Server Components.
									</p>
								</li>
								<li className="flex gap-3">
									<span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary font-bold">
										3
									</span>
									<p className="text-muted-foreground">
										Monorepo with Turborepo enables efficient development across
										apps, packages, and configurations.
									</p>
								</li>
								<li className="flex gap-3">
									<span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary font-bold">
										4
									</span>
									<p className="text-muted-foreground">
										Real-time collaboration tools dramatically improve team
										productivity and reduce communication overhead.
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<NextProjectNav
				nextProject={{
					title: "Domain Collective",
					slug: "domain-collective",
				}}
			/>
		</div>
	);
}
