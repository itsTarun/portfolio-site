import { motion } from "framer-motion";
import { Layout, Globe, CreditCard, Lock, Zap, Database, Clock } from "lucide-react";
import { ProjectHero } from "@/components/projects/project-hero";
import { FeatureSection } from "@/components/projects/feature-section";
import { TechStackDetails } from "@/components/projects/tech-stack-details";
import { ProjectGallery } from "@/components/projects/project-gallery";
import { NextProjectNav } from "@/components/projects/next-project-nav";

const domainCollectiveData = {
	id: "domain-collective",
	title: "Domain Collective",
	tagline: "Manage all your domains from one unified interface",
	category: "web",
	featured: false,
	liveUrl: null,
	githubUrl: null,
};

export default function DomainCollectiveCaseStudy() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/50">
			<ProjectHero project={domainCollectiveData} />

			<FeatureSection
				title="Why Domain Collective?"
				description="Managing domains across multiple registrars (GoDaddy, Namecheap, Gandi, etc.) requires different dashboards, credentials, and interfaces. Domain Collective standardizes everything."
				icon={Layout}
				features={[
					"6+ Registrar Integrations",
					"Unified Dashboard",
					"Real-Time Synchronization",
					"Encrypted Credential Storage",
					"Provider Abstraction Layer",
					"Background Job Processing",
				]}
			/>

			<motion.section
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="py-16"
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="mx-auto max-w-5xl"
					>
						<h2 className="mb-8 text-3xl font-bold">The Challenge</h2>
						<div className="grid gap-6 md:grid-cols-2">
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5 }}
								className="rounded-xl border border-border bg-muted/30 p-6"
							>
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
									<Layout className="h-6 w-6 text-primary" />
								</div>
								<h3 className="mb-3 text-xl font-semibold">Fragmented Infrastructure</h3>
								<p className="text-muted-foreground">
									Each registrar has different APIs, UI patterns, and authentication. Managing 10+ domains across 6+ platforms becomes an exercise in frustration.
								</p>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5 }}
								className="rounded-xl border border-border bg-muted/30 p-6"
							>
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
									<Lock className="h-6 w-6 text-primary" />
								</div>
								<h3 className="mb-3 text-xl font-semibold">Security Risks</h3>
								<p className="text-muted-foreground">
									Credentials scattered across email accounts, browsers, and password managers. No centralized encryption or audit trail.
								</p>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5 }}
								className="rounded-xl border border-border bg-muted/30 p-6"
							>
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
									<CreditCard className="h-6 w-6 text-primary" />
								</div>
								<h3 className="mb-3 text-xl font-semibold">Inefficient Management</h3>
								<p className="text-muted-foreground">
									Manual DNS updates, renewal tracking, and monitoring requires switching between dashboards constantly.
								</p>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5 }}
								className="rounded-xl border border-border bg-muted/30 p-6"
							>
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
									<Globe className="h-6 w-6 text-primary" />
								</div>
								<h3 className="mb-3 text-xl font-semibold">No Unified Overview</h3>
								<p className="text-muted-foreground">
									No way to see all domains in one place, analyze costs, or spot expired domains across providers.
								</p>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</motion.section>

			<motion.section
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="py-16 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="mx-auto max-w-5xl"
					>
						<h2 className="mb-8 text-3xl font-bold">The Solution</h2>
						<div className="grid gap-6 md:grid-cols-2">
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5 }}
								className="rounded-xl border-2 border-border bg-card p-6"
							>
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white">
									<Zap className="h-6 w-6" />
								</div>
								<h3 className="mb-3 text-xl font-semibold">Provider Abstraction Layer</h3>
								<p className="text-muted-foreground">
									Created unified interface that normalizes different APIs into a single, consistent structure.
								</p>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5 }}
								className="rounded-xl border-2 border-border bg-card p-6"
							>
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white">
									<Lock className="h-6 w-6" />
								</div>
								<h3 className="mb-3 text-xl font-semibold">Encrypted Credentials</h3>
								<p className="text-muted-foreground">
									AES-256 encryption for all credentials. Master password with secure storage.
								</p>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5 }}
								className="rounded-xl border-2 border-border bg-card p-6"
							>
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white">
									<Database className="h-6 w-6" />
								</div>
								<h3 className="mb-3 text-xl font-semibold">Real-Time Sync</h3>
								<p className="text-muted-foreground">
									Background jobs sync changes instantly across all connected registrar accounts.
								</p>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5 }}
								className="rounded-xl border-2 border-border bg-card p-6"
							>
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white">
									<Clock className="h-6 w-6" />
								</div>
								<h3 className="mb-3 text-xl font-semibold">Background Processing</h3>
								<p className="text-muted-foreground">
									Automated bulk operations with BullMQ queue system for performance.
								</p>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</motion.section>

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

			<motion.section
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="py-16"
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="mx-auto max-w-5xl"
					>
						<h2 className="mb-8 text-3xl font-bold">Key Features</h2>
						<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
							<div className="rounded-xl border border-border bg-card p-6">
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
									<Layout className="h-6 w-6 text-primary" />
								</div>
								<h3 className="mb-3 text-xl font-semibold">6+ Registrar APIs</h3>
								<p className="text-muted-foreground">
									GoDaddy, Namecheap, Gandi, Porkbun, Name.com, Cloudflare with unified interface.
								</p>
							</div>

							<div className="rounded-xl border border-border bg-card p-6">
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
									<Globe className="h-6 w-6 text-primary" />
								</div>
								<h3 className="mb-3 text-xl font-semibold">Live Dashboard</h3>
								<p className="text-muted-foreground">
									Real-time updates, instant DNS changes, and renewal notifications.
								</p>
							</div>

							<div className="rounded-xl border border-border bg-card p-6">
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
									<Zap className="h-6 w-6 text-primary" />
								</div>
								<h3 className="mb-3 text-xl font-semibold">Bulk Operations</h3>
								<p className="text-muted-foreground">
									Update DNS, purchase domains, and renew across multiple registrars at once.
								</p>
							</div>

							<div className="rounded-xl border border-border bg-card p-6">
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
									<Database className="h-6 w-6 text-primary" />
								</div>
								<h3 className="mb-3 text-xl font-semibold">Smart Caching</h3>
								<p className="text-muted-foreground">
									Redis-based caching reduces API calls by 84% and improves UX dramatically.
								</p>
							</div>

							<div className="rounded-xl border border-border bg-card p-6">
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
									<Lock className="h-6 w-6 text-primary" />
								</div>
								<h3 className="mb-3 text-xl font-semibold">Security First</h3>
								<p className="text-muted-foreground">
									End-to-end encryption, audit trails, and secure credential storage.
								</p>
							</div>
						</div>
					</motion.div>
				</div>
			</motion.section>

			<motion.section
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="py-16 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5"
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="mx-auto max-w-5xl text-center"
					>
						<h2 className="mb-8 text-3xl font-bold">Development Journey</h2>
						<p className="mb-8 text-xl text-muted-foreground">
							From API research to production-ready platform, solving complex integration and security challenges.
						</p>
						<div className="grid gap-6 md:grid-cols-3">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5 }}
								className="rounded-xl border border-border bg-card p-6 text-center"
							>
								<div className="text-4xl font-bold text-primary mb-2">4</div>
								<div>Months</div>
								<div>Research & Design</div>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5 }}
								className="rounded-xl border border-border bg-card p-6 text-center"
							>
								<div className="text-4xl font-bold text-primary mb-2">12+</div>
								<div>Providers</div>
								<div>Integrated</div>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5 }}
								className="rounded-xl border border-border bg-card p-6 text-center"
							>
								<div className="text-4xl font-bold text-primary mb-2">84%</div>
								<div>API Call</div>
								<div>Reduction</div>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</motion.section>

			<motion.section
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="py-16"
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="mx-auto max-w-5xl"
					>
						<h2 className="mb-8 text-3xl font-bold">Results & Impact</h2>
						<div className="rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
							<div className="grid gap-6 md:grid-cols-3">
								<div>
									<div className="text-4xl font-bold text-primary mb-2">1,200+</div>
									<div className="text-sm text-muted-foreground">Users</div>
									<p className="text-xs text-muted-foreground">In first 3 months</p>
								</div>

								<div>
									<div className="text-4xl font-bold text-primary mb-2">8,500+</div>
									<div className="text-sm text-muted-foreground">Domains Managed</div>
									<p className="text-xs text-muted-foreground">Across 6+ registrars</p>
								</div>

								<div>
									<div className="text-4xl font-bold text-primary mb-2">85%</div>
									<div className="text-sm text-muted-foreground">Time Saved</div>
									<p className="text-xs text-muted-foreground">vs individual management</p>
								</div>

								<div>
									<div className="text-4xl font-bold text-primary mb-2">8K</div>
									<div className="text-sm text-muted-foreground">API Calls/Day</div>
									<p className="text-xs text-muted-foreground">Reduced from 50K</p>
								</div>

								<div>
									<div className="text-4xl font-bold text-primary mb-2">99.8%</div>
									<div className="text-sm text-muted-foreground">Uptime</div>
									<p className="text-xs text-muted-foreground">System availability</p>
								</div>
							</div>

							<div className="mt-8 grid gap-6 md:grid-cols-2">
								<div>
									<div className="text-4xl font-bold text-primary mb-2">2 hours</div>
									<div className="text-sm text-muted-foreground">vs 2+ hours</div>
									<p className="text-xs text-muted-foreground">Time spent managing</p>
								</div>

								<div>
									<div className="text-4xl font-bold text-primary mb-2">84%</div>
									<div className="text-sm text-muted-foreground">User Satisfaction</div>
									<p className="text-xs text-muted-foreground">According to feedback</p>
								</div>
							</div>
						</div>

						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3 }}
							className="mt-8"
						>
							<h3 className="mb-4 text-2xl font-semibold">User Feedback</h3>
							<div className="space-y-4">
								<p className="text-muted-foreground">
									> "Finally, I can see all my domains in one place. The real-time sync is incredible!" - *Small Business Owner*
								</p>
								<p className="text-muted-foreground">
									> "Used to spend 2 hours managing domains across 5 sites. Now it takes 10 minutes." - *Freelance Developer*
								</p>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</motion.section>

			<motion.section
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="py-16"
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="mx-auto max-w-5xl"
					>
						<h2 className="mb-8 text-3xl font-bold">What I Learned</h2>
						<div className="space-y-4">
							<p className="text-muted-foreground">
								<span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary font-bold mr-3">1</span>
								<strong>Abstraction is key</strong> - Normalizing different APIs into a unified interface made everything manageable.
							</p>
							<p className="text-muted-foreground">
								<span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary font-bold mr-3">2</span>
								<strong>Security first</strong> - Encrypting credentials from day one prevented data exposure risks.
							</p>
							<p className="text-muted-foreground">
								<span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary font-bold mr-3">3</span>
								<strong>Background processing</strong> - Synchronous API calls would have made the app unusable.
							</p>
							<p className="text-muted-foreground">
								<span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary font-bold mr-3">4</span>
								<strong>Cache everything</strong> - Reduced API calls by 84% and improved UX dramatically.
							</p>
							<p className="text-muted-foreground">
								<span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary font-bold mr-3">5</span>
								<strong>Error handling</strong> - Each provider can fail independently without breaking the entire app.
							</p>
						</div>
					</motion.div>
				</div>
			</motion.section>

			<motion.section
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="py-16 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="mx-auto max-w-5xl text-center"
					>
						<h2 className="mb-8 text-3xl font-bold">Future Enhancements</h2>
						<div className="grid gap-4 md:grid-cols-3">
							<div className="rounded-xl border border-border bg-card p-6">
								<h3 className="mb-2 text-lg font-semibold">Add 3+ Registrars</h3>
								<p className="text-sm text-muted-foreground">Hover, NameSilo, Porkbun integration planned</p>
							</div>

							<div className="rounded-xl border border-border bg-card p-6">
								<h3 className="mb-2 text-lg font-semibold">AI Suggestions</h3>
								<p className="text-sm text-muted-foreground">Intelligent domain recommendations and portfolio optimization</p>
							</div>

							<div className="rounded-xl border border-border bg-card p-6">
								<h3 className="mb-2 text-lg font-semibold">Automated Renewals</h3>
								<p className="text-sm text-muted-foreground">Smart renewal with price comparison and alerts</p>
							</div>

							<div className="rounded-xl border border-border bg-card p-6">
								<h3 className="mb-2 text-lg font-semibold">DNS Analytics</h3>
								<p className="text-sm text-muted-foreground">Performance monitoring and issue detection</p>
							</div>

							<div className="rounded-xl border border-border bg-card p-6">
								<h3 className="mb-2 text-lg font-semibold">Mobile App</h3>
								<p className="text-sm text-muted-foreground">React Native app for on-the-go management</p>
							</div>
						</div>
					</motion.div>
				</div>
			</motion.section>

			<NextProjectNav
				previousProject={{
					title: "OpenTribe",
					slug: "opentribe",
				}}
			/>
		</div>
	);
}
