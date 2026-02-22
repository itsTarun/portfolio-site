import {
	Clock,
	CreditCard,
	Database,
	Globe,
	Layout,
	Lock,
	Zap,
} from "lucide-react";
import type { Metadata } from "next";
import { FeatureSection } from "@/components/projects/feature-section";
import { NextProjectNav } from "@/components/projects/next-project-nav";
import { ProjectHero } from "@/components/projects/project-hero";
import { TechStackDetails } from "@/components/projects/tech-stack-details";

const domainCollectiveData = {
	id: "domain-collective",
	title: "Domain Collective",
	tagline: "Manage all your domains from one unified interface",
	category: "web",
	featured: false,
	liveUrl: null,
	githubUrl: null,
};

const baseUrl = "https://itstarun.fyi";

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
	return (
		<div className="min-h-screen">
			<ProjectHero project={domainCollectiveData} />

			<FeatureSection
				title="Why Domain Collective?"
				description="Managing domains across multiple registrars (GoDaddy, Namecheap, Gandi, etc.) requires different dashboards, credentials, and interfaces. Domain Collective standardizes everything."
				features={[
					"6+ Registrar Integrations",
					"Unified Dashboard",
					"Real-Time Synchronization",
					"Encrypted Credential Storage",
					"Provider Abstraction Layer",
					"Background Job Processing",
				]}
			/>

			<section className="py-16">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-5xl">
						<h2 className="mb-8 text-3xl font-semibold">The Challenge</h2>
						<div className="grid gap-6 md:grid-cols-2">
							<div className="rounded-lg border border-border bg-card p-6">
								<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-border">
									<Layout className="h-5 w-5 text-foreground" />
								</div>
								<h3 className="mb-3 text-xl font-semibold">
									Fragmented Infrastructure
								</h3>
								<p className="text-muted-foreground">
									Each registrar has different APIs, UI patterns, and
									authentication. Managing 10+ domains across 6+ platforms
									becomes an exercise in frustration.
								</p>
							</div>

							<div className="rounded-lg border border-border bg-card p-6">
								<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-border">
									<Lock className="h-5 w-5 text-foreground" />
								</div>
								<h3 className="mb-3 text-xl font-semibold">Security Risks</h3>
								<p className="text-muted-foreground">
									Credentials scattered across email accounts, browsers, and
									password managers. No centralized encryption or audit trail.
								</p>
							</div>

							<div className="rounded-lg border border-border bg-card p-6">
								<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-border">
									<CreditCard className="h-5 w-5 text-foreground" />
								</div>
								<h3 className="mb-3 text-xl font-semibold">
									Inefficient Management
								</h3>
								<p className="text-muted-foreground">
									Manual DNS updates, renewal tracking, and monitoring requires
									switching between dashboards constantly.
								</p>
							</div>

							<div className="rounded-lg border border-border bg-card p-6">
								<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-border">
									<Globe className="h-5 w-5 text-foreground" />
								</div>
								<h3 className="mb-3 text-xl font-semibold">
									No Unified Overview
								</h3>
								<p className="text-muted-foreground">
									No way to see all domains in one place, analyze costs, or spot
									expired domains across providers.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-16 bg-muted/30">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-5xl">
						<h2 className="mb-8 text-3xl font-semibold">The Solution</h2>
						<div className="grid gap-6 md:grid-cols-2">
							<div className="rounded-lg border border-border bg-card p-6">
								<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-border">
									<Zap className="h-5 w-5" />
								</div>
								<h3 className="mb-3 text-xl font-semibold">
									Provider Abstraction Layer
								</h3>
								<p className="text-muted-foreground">
									Created unified interface that normalizes different APIs into
									a single, consistent structure.
								</p>
							</div>

							<div className="rounded-lg border border-border bg-card p-6">
								<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-border">
									<Lock className="h-5 w-5" />
								</div>
								<h3 className="mb-3 text-xl font-semibold">
									Encrypted Credentials
								</h3>
								<p className="text-muted-foreground">
									AES-256 encryption for all credentials. Master password with
									secure storage.
								</p>
							</div>

							<div className="rounded-lg border border-border bg-card p-6">
								<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-border">
									<Database className="h-5 w-5" />
								</div>
								<h3 className="mb-3 text-xl font-semibold">Real-Time Sync</h3>
								<p className="text-muted-foreground">
									Background jobs sync changes instantly across all connected
									registrar accounts.
								</p>
							</div>

							<div className="rounded-lg border border-border bg-card p-6">
								<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-border">
									<Clock className="h-5 w-5" />
								</div>
								<h3 className="mb-3 text-xl font-semibold">
									Background Processing
								</h3>
								<p className="text-muted-foreground">
									Automated bulk operations with BullMQ queue system for
									performance.
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
					"Tailwind CSS",
					"shadcn/ui",
					"Better Auth",
					"Resend",
					"BullMQ",
					"Bull Board",
					"Biome",
				]}
				description="Built with Next.js 15's App Router, React 19 Server Components, Prisma ORM for database management, and BullMQ for background job processing."
			/>

			<section className="py-16">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-5xl">
						<h2 className="mb-8 text-3xl font-semibold">Key Features</h2>
						<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
							<div className="rounded-lg border border-border bg-card p-6">
								<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-border">
									<Layout className="h-5 w-5 text-foreground" />
								</div>
								<h3 className="mb-3 text-xl font-semibold">
									6+ Registrar APIs
								</h3>
								<p className="text-muted-foreground">
									GoDaddy, Namecheap, Gandi, Porkbun, Name.com, Cloudflare with
									unified interface.
								</p>
							</div>

							<div className="rounded-lg border border-border bg-card p-6">
								<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-border">
									<Globe className="h-5 w-5 text-foreground" />
								</div>
								<h3 className="mb-3 text-xl font-semibold">Live Dashboard</h3>
								<p className="text-muted-foreground">
									Real-time updates, instant DNS changes, and renewal
									notifications.
								</p>
							</div>

							<div className="rounded-lg border border-border bg-card p-6">
								<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-border">
									<Zap className="h-5 w-5 text-foreground" />
								</div>
								<h3 className="mb-3 text-xl font-semibold">Bulk Operations</h3>
								<p className="text-muted-foreground">
									Update DNS, purchase domains, and renew across multiple
									registrars at once.
								</p>
							</div>

							<div className="rounded-lg border border-border bg-card p-6">
								<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-border">
									<Database className="h-5 w-5 text-foreground" />
								</div>
								<h3 className="mb-3 text-xl font-semibold">Smart Caching</h3>
								<p className="text-muted-foreground">
									Redis-based caching reduces API calls by 84% and improves UX
									dramatically.
								</p>
							</div>

							<div className="rounded-lg border border-border bg-card p-6">
								<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-border">
									<Lock className="h-5 w-5 text-foreground" />
								</div>
								<h3 className="mb-3 text-xl font-semibold">Security First</h3>
								<p className="text-muted-foreground">
									End-to-end encryption, audit trails, and secure credential
									storage.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-16 bg-muted/30">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-5xl text-center">
						<h2 className="mb-8 text-3xl font-semibold">Development Journey</h2>
						<p className="mb-8 text-xl text-muted-foreground">
							From API research to production-ready platform, solving complex
							integration and security challenges.
						</p>
						<div className="grid gap-6 md:grid-cols-3">
							<div className="rounded-lg border border-border bg-card p-6 text-center">
								<div className="text-4xl font-semibold text-foreground mb-2">
									4
								</div>
								<div>Months</div>
								<div>Research & Design</div>
							</div>

							<div className="rounded-lg border border-border bg-card p-6 text-center">
								<div className="text-4xl font-semibold text-foreground mb-2">
									12+
								</div>
								<div>Providers</div>
								<div>Integrated</div>
							</div>

							<div className="rounded-lg border border-border bg-card p-6 text-center">
								<div className="text-4xl font-semibold text-foreground mb-2">
									84%
								</div>
								<div>API Call</div>
								<div>Reduction</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-16">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-5xl">
						<h2 className="mb-8 text-3xl font-semibold">Results & Impact</h2>
						<div className="rounded-lg border border-border bg-card p-8">
							<div className="grid gap-6 md:grid-cols-3">
								<div>
									<div className="text-4xl font-semibold text-foreground mb-2">
										1,200+
									</div>
									<div className="text-sm text-muted-foreground">Users</div>
									<p className="text-xs text-muted-foreground">
										In first 3 months
									</p>
								</div>

								<div>
									<div className="text-4xl font-semibold text-foreground mb-2">
										8,500+
									</div>
									<div className="text-sm text-muted-foreground">
										Domains Managed
									</div>
									<p className="text-xs text-muted-foreground">
										Across 6+ registrars
									</p>
								</div>

								<div>
									<div className="text-4xl font-semibold text-foreground mb-2">
										85%
									</div>
									<div className="text-sm text-muted-foreground">
										Time Saved
									</div>
									<p className="text-xs text-muted-foreground">
										vs individual management
									</p>
								</div>

								<div>
									<div className="text-4xl font-semibold text-foreground mb-2">
										8K
									</div>
									<div className="text-sm text-muted-foreground">
										API Calls/Day
									</div>
									<p className="text-xs text-muted-foreground">
										Reduced from 50K
									</p>
								</div>

								<div>
									<div className="text-4xl font-semibold text-foreground mb-2">
										99.8%
									</div>
									<div className="text-sm text-muted-foreground">Uptime</div>
									<p className="text-xs text-muted-foreground">
										System availability
									</p>
								</div>
							</div>

							<div className="mt-8 grid gap-6 md:grid-cols-2">
								<div>
									<div className="text-4xl font-semibold text-foreground mb-2">
										2 hours
									</div>
									<div className="text-sm text-muted-foreground">
										vs 2+ hours
									</div>
									<p className="text-xs text-muted-foreground">
										Time spent managing
									</p>
								</div>

								<div>
									<div className="text-4xl font-semibold text-foreground mb-2">
										84%
									</div>
									<div className="text-sm text-muted-foreground">
										User Satisfaction
									</div>
									<p className="text-xs text-muted-foreground">
										According to feedback
									</p>
								</div>
							</div>
						</div>

						<div className="mt-8">
							<h3 className="mb-4 text-2xl font-semibold">User Feedback</h3>
							<div className="space-y-4">
								<p className="text-muted-foreground">
									&quot;Finally, I can see all my domains in one place. The
									real-time sync is incredible!&quot; - *Small Business Owner*
								</p>
								<p className="text-muted-foreground">
									&quot;Used to spend 2 hours managing domains across 5 sites.
									Now it takes 10 minutes.&quot; - *Freelance Developer*
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-16">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-5xl">
						<h2 className="mb-8 text-3xl font-semibold">What I Learned</h2>
						<div className="space-y-4">
							<p className="text-muted-foreground">
								<span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-border text-xs font-semibold mr-3">
									1
								</span>
								<strong>Abstraction is key</strong> - Normalizing different APIs
								into a unified interface made everything manageable.
							</p>
							<p className="text-muted-foreground">
								<span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-border text-xs font-semibold mr-3">
									2
								</span>
								<strong>Security first</strong> - Encrypting credentials from
								day one prevented data exposure risks.
							</p>
							<p className="text-muted-foreground">
								<span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-border text-xs font-semibold mr-3">
									3
								</span>
								<strong>Background processing</strong> - Synchronous API calls
								would have made the app unusable.
							</p>
							<p className="text-muted-foreground">
								<span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-border text-xs font-semibold mr-3">
									4
								</span>
								<strong>Cache everything</strong> - Reduced API calls by 84% and
								improved UX dramatically.
							</p>
							<p className="text-muted-foreground">
								<span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-border text-xs font-semibold mr-3">
									5
								</span>
								<strong>Error handling</strong> - Each provider can fail
								independently without breaking the entire app.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="py-16 bg-muted/30">
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-5xl text-center">
						<h2 className="mb-8 text-3xl font-semibold">Future Enhancements</h2>
						<div className="grid gap-4 md:grid-cols-3">
							<div className="rounded-lg border border-border bg-card p-6">
								<h3 className="mb-2 text-lg font-semibold">
									Add 3+ Registrars
								</h3>
								<p className="text-sm text-muted-foreground">
									Hover, NameSilo, Porkbun integration planned
								</p>
							</div>

							<div className="rounded-lg border border-border bg-card p-6">
								<h3 className="mb-2 text-lg font-semibold">AI Suggestions</h3>
								<p className="text-sm text-muted-foreground">
									Intelligent domain recommendations and portfolio optimization
								</p>
							</div>

							<div className="rounded-lg border border-border bg-card p-6">
								<h3 className="mb-2 text-lg font-semibold">
									Automated Renewals
								</h3>
								<p className="text-sm text-muted-foreground">
									Smart renewal with price comparison and alerts
								</p>
							</div>

							<div className="rounded-lg border border-border bg-card p-6">
								<h3 className="mb-2 text-lg font-semibold">DNS Analytics</h3>
								<p className="text-sm text-muted-foreground">
									Performance monitoring and issue detection
								</p>
							</div>

							<div className="rounded-lg border border-border bg-card p-6">
								<h3 className="mb-2 text-lg font-semibold">Mobile App</h3>
								<p className="text-sm text-muted-foreground">
									React Native app for on-the-go management
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<NextProjectNav
				previousProject={{
					title: "OpenTribe",
					slug: "opentribe",
				}}
			/>
		</div>
	);
}
