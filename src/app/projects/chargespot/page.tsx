import { Map as MapIcon, Zap } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { CreativeWorkSchema } from "@/components/seo/creative-work-schema";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const technologies = [
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
];

const projectData = {
	id: "chargespot",
	title: "Chargespot",
	tagline: "Your EV charging companion - Find, charge, track, repeat",
	category: "mobile",
	featured: true,
	liveUrl: null,
	githubUrl: null,
};

export const metadata: Metadata = {
	title: "Chargespot - EV Charging Platform | Tarun Portfolio",
	description:
		"Comprehensive EV charging station finder and management platform for India. Features real-time station discovery, AI-powered trip planning, live charging sessions, and multi-wallet payments.",
	openGraph: {
		type: "website",
		url: "https://itstarun.fyi/projects/chargespot",
		title: "Chargespot - EV Charging Platform",
		description:
			"Comprehensive EV charging station finder and management platform for India.",
		siteName: "Tarun Portfolio",
		images: [
			{
				url: "/projects/chargespot/opengraph-image",
				width: 1200,
				height: 630,
				alt: "Chargespot - EV Charging Platform",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Chargespot - EV Charging Platform",
		description:
			"Comprehensive EV charging station finder and management platform for India.",
		images: [
			{
				url: "/projects/chargespot/opengraph-image",
				width: 1200,
				height: 630,
				alt: "Chargespot - EV Charging Platform",
			},
		],
	},
	alternates: {
		canonical: "https://itstarun.fyi/projects/chargespot",
	},
};

export default function ChargespotPage() {
	const baseUrl = "https://itstarun.fyi";
	const breadcrumbs = [
		{ name: "Home", url: "/" },
		{ name: "Projects", url: "/projects" },
		{ name: "Chargespot", url: "/projects/chargespot" },
	];

	return (
		<>
			<CreativeWorkSchema
				name={projectData.title}
				description={projectData.tagline}
				url={`${baseUrl}/projects/chargespot`}
				image={`${baseUrl}/projects/chargespot/opengraph-image`}
				technologies={technologies}
				category={projectData.category}
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
							<p className="eyebrow mb-3">Mobile product</p>
							<h1 className="mb-4 text-4xl font-semibold tracking-tight sm:text-5xl">
								{projectData.title}
							</h1>
							<p className="mb-6 text-xl text-muted-foreground">
								{projectData.tagline}
							</p>
							<div className="flex flex-wrap gap-2">
								<Badge>Flagship Project</Badge>
								<Badge variant="outline">Mobile App</Badge>
							</div>
						</div>

						<div className="mb-12 rounded-lg border border-border bg-card p-6">
							<h2 className="mb-4 text-2xl font-semibold">Why Chargespot?</h2>
							<p className="text-muted-foreground mb-4">
								Chargespot serves as a unified solution for EV owners and
								drivers, addressing the fragmented charging infrastructure
								across India.
							</p>
							<div className="grid gap-4 md:grid-cols-2">
								<Card>
									<CardHeader>
										<div className="flex h-10 w-10 items-center justify-center rounded-full border border-border mb-4">
											<MapIcon className="h-5 w-5 text-foreground" />
										</div>
										<CardTitle>Real-time Station Discovery</CardTitle>
										<CardDescription>
											Find charging stations near you with real-time updates
										</CardDescription>
									</CardHeader>
								</Card>
								<Card>
									<CardHeader>
										<div className="flex h-10 w-10 items-center justify-center rounded-full border border-border mb-4">
											<Zap className="h-5 w-5 text-foreground" />
										</div>
										<CardTitle>AI-Powered Trip Planning</CardTitle>
										<CardDescription>
											Optimize your routes with intelligent route suggestions
										</CardDescription>
									</CardHeader>
								</Card>
							</div>
						</div>

						<div className="mb-12 rounded-lg border border-border bg-card p-8">
							<h2 className="mb-6 text-2xl font-semibold">Technologies Used</h2>
							<div className="mb-4">
								<p className="text-muted-foreground">
									Built with Flutter for cross-platform mobile development,
									integrated Google Maps for real-time navigation, Firebase for
									backend, and Razorpay for payments.
								</p>
							</div>
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

						<div className="mb-12 rounded-lg border border-border bg-card p-6">
							<h2 className="mb-6 text-2xl font-semibold">Key Features</h2>
							<ul className="space-y-4">
								<li className="flex gap-3">
									<div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-border text-xs font-semibold">
										1
									</div>
									<p className="text-muted-foreground">
										iOS Live Activities with Dynamic Island support
									</p>
								</li>
								<li className="flex gap-3">
									<div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-border text-xs font-semibold">
										2
									</div>
									<p className="text-muted-foreground">
										AI-powered trip planning for optimized routes
									</p>
								</li>
								<li className="flex gap-3">
									<div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-border text-xs font-semibold">
										3
									</div>
									<p className="text-muted-foreground">
										Offline-first architecture with Isar DB
									</p>
								</li>
							</ul>
						</div>

						<div className="rounded-lg border border-border bg-card p-8">
							<h2 className="mb-4 text-2xl font-semibold">Results</h2>
							<div className="grid gap-6 md:grid-cols-3">
								<div>
									<div className="text-4xl font-semibold text-foreground mb-2">
										100%
									</div>
									<div className="text-sm text-muted-foreground">
										User Satisfaction
									</div>
								</div>
								<div>
									<div className="text-4xl font-semibold text-foreground mb-2">
										50+
									</div>
									<div className="text-sm text-muted-foreground">
										Active Stations
									</div>
								</div>
								<div>
									<div className="text-4xl font-semibold text-foreground mb-2">
										4.8
									</div>
									<div className="text-sm text-muted-foreground">
										App Store Rating
									</div>
								</div>
							</div>
						</div>

						<div className="flex justify-center gap-4">
							<Button asChild>
								<Link href="/projects/opentribe">
									Next Project: OpenTribe →
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
