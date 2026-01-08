import {
	CreditCard,
	Globe,
	Map,
	Shield,
	Smartphone,
	Users,
	Zap,
} from "lucide-react";
import { FeatureSection } from "@/components/projects/feature-section";
import { NextProjectNav } from "@/components/projects/next-project-nav";
import { ProjectHero } from "@/components/projects/project-hero";
import { TechStackDetails } from "@/components/projects/tech-stack-details";

const chargespotData = {
	id: "chargespot",
	title: "Chargespot",
	tagline: "Your EV charging companion - Find, charge, track, repeat",
	category: "mobile",
	featured: true,
	liveUrl: null,
	githubUrl: null,
};

export default function ChargespotCaseStudy() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/50">
			<ProjectHero project={chargespotData} />

			<FeatureSection
				title="Why Chargespot?"
				description="Chargespot serves as a unified solution for EV owners and drivers, addressing the fragmented charging infrastructure across India."
				features={[
					"iOS Live Activities & Dynamic Island",
					"AI-Powered Trip Planning with intelligent route optimization",
					"Real-time Station Discovery with filters",
					"Multi-Wallet Payment Integration (Razorpay)",
					"Offline-First Architecture using Isar DB",
					"100% Bilingual Support (English & Hindi)",
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
									<Map className="h-6 w-6 text-primary" />
								</div>
								<h3 className="mb-3 text-xl font-semibold">
									Fragmented Infrastructure
								</h3>
								<p className="text-muted-foreground">
									India&apos;s EV charging landscape is highly fragmented, with
									multiple providers, incompatible apps, and inconsistent
									information.
								</p>
							</div>

							<div className="rounded-xl border border-border bg-muted/30 p-6"
							>
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
									<Users className="h-6 w-6 text-primary" />
								</div>
								<h3 className="mb-3 text-xl font-semibold">
									Poor User Experience
								</h3>
								<p className="text-muted-foreground">
									Drivers and owners struggle to find compatible chargers, plan
									trips without anxiety about range, and track charging sessions
									across different networks.
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
								<h3 className="mb-3 text-xl font-semibold">Unified Platform</h3>
								<p className="text-muted-foreground">
									All charging needs in one app - discovery, navigation,
									charging, and payments.
								</p>
							</div>

							<div className="rounded-xl border-2 border-border bg-card p-6"
							>
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white">
									<CreditCard className="h-6 w-6" />
								</div>
								<h3 className="mb-3 text-xl font-semibold">Smart Payments</h3>
								<p className="text-muted-foreground">
									Seamless integration with multiple payment wallets including
									Razorpay for smooth transactions.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<TechStackDetails
				technologies={[
					"Flutter",
					"Dart",
					"Google Maps",
					"Razorpay",
					"Firebase",
					"PostgreSQL",
					"Isar DB",
					"Provider",
					"OneSignal",
					"Google Navigation SDK",
				]}
				description="Built with Flutter for cross-platform mobile development, integrated Google Maps for real-time navigation, Firebase for backend, and Razorpay for payments."
			/>

			<section className="py-16"
			>
				<div className="container mx-auto px-4 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-5xl"
					>
						<h2 className="mb-8 text-3xl font-bold">Key Features</h2>
						<div className="grid gap-6 md:grid-cols-2">
							<div className="rounded-xl border border-border bg-card p-6">
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
									<Shield className="h-6 w-6 text-primary" />
								</div>
								<h3 className="mb-3 text-xl font-semibold">
									Offline-First Architecture
								</h3>
								<p className="text-muted-foreground">
									Implemented Isar DB for local storage with background sync
									when online. Users can access data anytime without internet.
								</p>
							</div>

							<div className="rounded-xl border border-border bg-card p-6">
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
									<Smartphone className="h-6 w-6 text-primary" />
								</div>
								<h3 className="mb-3 text-xl font-semibold">
									Live Activities Integration
								</h3>
								<p className="text-muted-foreground">
									iOS Dynamic Island shows charging status and battery level
									even when the app is in background. Always informed, always
									connected.
								</p>
							</div>

							<div className="rounded-xl border border-border bg-card p-6">
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
									<Globe className="h-6 w-6 text-primary" />
								</div>
								<h3 className="mb-3 text-xl font-semibold">
									Bilingual Support
								</h3>
								<p className="text-muted-foreground">
									Full English and Hindi language support with language
									switching without data loss. Localized for Indian users.
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
							From initial prototype to production-ready app, the journey taught
							me valuable lessons about mobile development, API integration, and
							user experience design.
						</p>
						<div className="grid gap-6 md:grid-cols-3">
							<div className="rounded-xl border border-border bg-card p-6 text-center"
							>
								<div className="text-4xl font-bold text-primary mb-2">3</div>
								<div className="text-sm text-muted-foreground">Months</div>
								<div>Development</div>
							</div>

							<div className="rounded-xl border border-border bg-card p-6 text-center"
							>
								<div className="text-4xl font-bold text-primary mb-2">60+</div>
								<div className="text-sm text-muted-foreground">
									API Integrations
								</div>
								<div>Implemented</div>
							</div>

							<div className="rounded-xl border border-border bg-card p-6 text-center"
							>
								<div className="text-4xl font-bold text-primary mb-2">85%</div>
								<div className="text-sm text-muted-foreground">
									Bundle Reduction
								</div>
								<div>Optimization</div>
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
										100%
									</div>
									<div className="text-sm text-muted-foreground">
										User Satisfaction
									</div>
									<p className="text-xs text-muted-foreground">
										Based on App Store reviews
									</p>
								</div>

								<div>
									<div className="text-4xl font-bold text-primary mb-2">
										50+
									</div>
									<div className="text-sm text-muted-foreground">
										Active Stations
									</div>
									<p className="text-xs text-muted-foreground">
										Integrated in initial launch
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
										Out of 5 stars average
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
										Flutter&apos;s widget system enabled real-time data display
										without complex state management
									</p>
								</li>
								<li className="flex gap-3">
									<span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary font-bold">
										2
									</span>
									<p className="text-muted-foreground">
										Offline-first design requires careful data synchronization
										and conflict resolution strategies
									</p>
								</li>
								<li className="flex gap-3">
									<span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary font-bold">
										3
									</span>
									<p className="text-muted-foreground">
										iOS Live Activities provide powerful engagement
										opportunities that keep users coming back
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<NextProjectNav
				nextProject={{
					title: "OpenTribe",
					slug: "opentribe",
				}}
			/>
		</div>
	);
}
