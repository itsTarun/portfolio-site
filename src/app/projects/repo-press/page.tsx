import { BookOpen, ExternalLink, GitBranch, Globe } from "lucide-react";
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
import Image from "next/image";

const projectData = PROJECTS.repoPress;

const technologies = [
	"Next.js",
	"TypeScript",
	"GitHub API",
	"MDX",
	"Tailwind CSS",
];

const keyFeatures = [
	"Connect to any GitHub repository and browse MDX/Markdown files.",
	"Notion-like block editor for a familiar, distraction-free writing experience.",
	"All content stays in Git — full history, diffs, and branching included.",
	"No proprietary database or vendor lock-in; move away any time.",
	"Instant preview of rendered MDX content alongside the editor.",
];

export const metadata: Metadata = createProjectMetadata({
	title: "Repo Press - Git-native MDX Editor | Tarun Portfolio",
	description:
		"RepoPress connects to your GitHub repositories and gives you a Notion-like editing experience for MDX/Markdown content, keeping everything in Git.",
	path: "/projects/repo-press",
	ogTitle: "Repo Press - Git-native MDX Editor",
	ogDescription:
		"A Notion-like MDX editing experience that keeps your content in Git — no proprietary lock-in.",
	imageUrl: "/images/projects/repo-press-og.png",
	imageAlt: "Repo Press - Git-native MDX editing tool",
	twitterImageType: "object",
});

export default function RepoPressPage() {
	const breadcrumbs = buildProjectBreadcrumbs("Repo Press", "repo-press");

	return (
		<>
			<CreativeWorkSchema
				name={projectData.name}
				description={projectData.tagline}
				url={`${SITE_URL}/projects/repo-press`}
				image={`${SITE_URL}${projectData.imageUrl}`}
				technologies={technologies}
				category={projectData.category}
			/>
			<BreadcrumbSchema breadcrumbs={breadcrumbs} />
			<div className="min-h-screen">
				<div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-5xl">
						<div className="mb-12 neo-panel p-8">
							<p className="eyebrow mb-3">Web tool</p>
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
								<Badge>Open Source</Badge>
								<Badge variant="outline">MDX Editor</Badge>
								<Badge variant="outline">Git-native</Badge>
							</div>
							<div className="flex flex-wrap gap-2">
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
								{projectData.githubUrl && (
									<Button asChild variant="outline">
										<a
											href={projectData.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="gap-2"
										>
											<ExternalLink className="h-4 w-4" />
											GitHub
										</a>
									</Button>
								)}
							</div>
						</div>

						<div className="mb-12 neo-panel p-2">
							<Image
								src={projectData.imageUrl}
								alt={`${projectData.name} screenshot`}
								className="h-auto w-full rounded-lg"
								width={1200}
								height={630}
								priority
							/>
						</div>

						<div className="mb-12 neo-panel p-6">
							<h2 className="mb-4 text-2xl font-semibold">Why Repo Press?</h2>
							<p className="mb-4 text-muted-foreground">
								Most headless CMSs store your content in proprietary databases,
								making it hard to migrate or collaborate with standard developer
								workflows. Repo Press flips this: your GitHub repository is the
								CMS, so content lives where your code lives — in Git.
							</p>
							<div className="grid gap-4 md:grid-cols-2">
								<Card>
									<CardHeader>
										<div className="mb-4 flex h-10 w-10 items-center justify-center border-2 border-border">
											<BookOpen className="h-5 w-5 text-foreground" />
										</div>
										<CardTitle>Familiar Editing Experience</CardTitle>
										<CardDescription>
											A Notion-like block editor makes writing and structuring
											MDX content intuitive without touching raw markdown.
										</CardDescription>
									</CardHeader>
								</Card>
								<Card>
									<CardHeader>
										<div className="mb-4 flex h-10 w-10 items-center justify-center border-2 border-border">
											<GitBranch className="h-5 w-5 text-foreground" />
										</div>
										<CardTitle>Git as the Source of Truth</CardTitle>
										<CardDescription>
											Every edit is a commit. Full version history, branching,
											and diffs come for free — no extra tooling required.
										</CardDescription>
									</CardHeader>
								</Card>
								<Card>
									<CardHeader>
										<div className="mb-4 flex h-10 w-10 items-center justify-center border-2 border-border">
											<Globe className="h-5 w-5 text-foreground" />
										</div>
										<CardTitle>Works with Any Repo</CardTitle>
										<CardDescription>
											Connect to any GitHub repository to edit MDX or Markdown
											files — documentation, blogs, or content-driven sites.
										</CardDescription>
									</CardHeader>
								</Card>
								<Card>
									<CardHeader>
										<div className="mb-4 flex h-10 w-10 items-center justify-center border-2 border-border">
											<ExternalLink className="h-5 w-5 text-foreground" />
										</div>
										<CardTitle>No Lock-in</CardTitle>
										<CardDescription>
											Your content is plain MDX files in your own repo. Stop
											using Repo Press at any time — your data stays yours.
										</CardDescription>
									</CardHeader>
								</Card>
							</div>
						</div>

						<div className="mb-12 neo-panel p-8">
							<h2 className="mb-6 text-2xl font-semibold">Technologies Used</h2>
							<p className="mb-4 text-muted-foreground">
								Built with Next.js and TypeScript, integrating the GitHub REST
								API for repository access and MDX parsing for rich content
								editing.
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
							<NumberedFeatureList features={keyFeatures} />
						</div>

						<div className="mb-12 neo-panel p-6">
							<h2 className="mb-4 text-2xl font-semibold">What I Built</h2>
							<div className="grid gap-4 md:grid-cols-2">
								<div className="border-2 border-border p-4">
									<h3 className="mb-2 font-semibold">GitHub OAuth Integration</h3>
									<p className="text-sm text-muted-foreground">
										Secure authentication with GitHub to read, edit, and commit
										content without leaving the editor.
									</p>
								</div>
								<div className="border-2 border-border p-4">
									<h3 className="mb-2 font-semibold">Block-based MDX Editor</h3>
									<p className="text-sm text-muted-foreground">
										Custom block editor that serializes back to valid MDX,
										handling frontmatter, custom components, and standard
										markdown.
									</p>
								</div>
								<div className="border-2 border-border p-4">
									<h3 className="mb-2 font-semibold">Commit Workflow</h3>
									<p className="text-sm text-muted-foreground">
										Each save creates a real Git commit via the GitHub API,
										preserving authorship and keeping history clean.
									</p>
								</div>
								<div className="border-2 border-border p-4">
									<h3 className="mb-2 font-semibold">Project Index View</h3>
									<p className="text-sm text-muted-foreground">
										A press/portfolio-style index of all content files in the
										connected repository, making content navigation fast.
									</p>
								</div>
							</div>
						</div>

						<NextProjectNav
							previousProject={{ title: "Domain Collective", slug: "domain-collective" }}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
