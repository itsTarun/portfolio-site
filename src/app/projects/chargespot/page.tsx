import { ExternalLink, Map as MapIcon, Zap } from "lucide-react";
import type { Metadata } from "next";
import { PROJECTS } from "@/config/projects";
import Image from "next/image";
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

const keyFeatures = [
	"iOS Live Activities with Dynamic Island support",
	"AI-powered trip planning for optimized routes",
	"Offline-first architecture with Isar DB",
];

const projectData = PROJECTS.chargespot;

export const metadata: Metadata = createProjectMetadata({
	title: "Chargespot - EV Charging Platform | Tarun Portfolio",
	description:
		"Comprehensive EV charging station finder and management platform for India. Features real-time station discovery, AI-powered trip planning, live charging sessions, and multi-wallet payments.",
	path: "/projects/chargespot",
	ogTitle: "Chargespot - EV Charging Platform",
	ogDescription:
		"Comprehensive EV charging station finder and management platform for India.",
	imageUrl: "/images/projects/chargespot.webp",
	imageAlt: "Chargespot - EV Charging Platform",
	twitterImageType: "object",
});

export default function ChargespotPage() {
	const breadcrumbs = buildProjectBreadcrumbs("Chargespot", "chargespot");

	return (
		<>
			<CreativeWorkSchema
				name={projectData.name}
				description={projectData.tagline}
				url={`${SITE_URL}/projects/chargespot`}
				image={`${SITE_URL}${projectData.imageUrl}`}
				technologies={technologies}
				category={projectData.category}
			/>
			<BreadcrumbSchema breadcrumbs={breadcrumbs} />
			<div className="min-h-screen">
				<div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-5xl">
						<div className="mb-12 neo-panel p-8">
							<p className="eyebrow mb-3">Mobile product</p>
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
							{projectData.builtBy && (
								<p className="mb-6 text-sm text-muted-foreground">
									Built by <strong>{projectData.builtBy}</strong>
								</p>
							)}
							<div className="flex flex-wrap gap-2">
								<Badge>Flagship Project</Badge>
								<Badge variant="outline">Mobile App</Badge>
							</div>
							{projectData.url && (
								<div className="mt-6">
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
							)}
						</div>

						<div className="mb-12 neo-panel p-2">
							<Image
								src={projectData.imageUrl}
								alt={`${projectData.name} app screenshot`}
								className="h-auto w-full rounded-lg"
								width={1920}
								height={1080}
								priority
							/>
						</div>

						<div className="mb-12 neo-panel p-6">
							<h2 className="mb-4 text-2xl font-semibold">Why Chargespot?</h2>
							<p className="text-muted-foreground mb-4">
								Chargespot serves as a unified solution for EV owners and
								drivers, addressing the fragmented charging infrastructure
								across India.
							</p>
							<div className="grid gap-4 md:grid-cols-2">
								<Card>
									<CardHeader>
										<div className="flex h-10 w-10 items-center justify-center border-2 border-border mb-4">
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
										<div className="flex h-10 w-10 items-center justify-center border-2 border-border mb-4">
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

						<div className="mb-12 neo-panel p-8">
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

						<div className="mb-12 neo-panel p-6">
							<h2 className="mb-6 text-2xl font-semibold">Key Features</h2>
							<NumberedFeatureList features={keyFeatures} />
						</div>

						<div className="mb-12 neo-panel p-8">
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

						<NextProjectNav
							nextProject={{ title: "OpenTribe", slug: "opentribe" }}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
