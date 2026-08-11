import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/config/projects";
import { type ProjectSlug, toProjectRoute } from "@/types";

// The card images are marketing-site captures, not app screenshots — describe what each one shows.
// Keep in sync with the alt text on the individual project pages.
const PROJECT_IMAGE_ALT: Record<string, string> = {
	chargespot:
		"Chargespot marketing site hero reading 'Powering India's EV charging future', with a 3D roadside charger and price board",
	opentribe:
		"OpenTribe promo banner reading 'Enabling builders anywhere to get paid on-chain', with an illustrated developer at a desk",
	"domain-collective":
		"Domain Collective promo banner reading 'One dashboard for all your domains', with a line-art illustration of the dashboard",
	"repo-press":
		"Repo Press promo card reading 'Git-native MDX editing', above a mock list of .mdx files including README and getting-started",
};

interface ProjectCardProps {
	title: string;
	description: string;
	imageUrl: string;
	index: number;
	slug: ProjectSlug;
}

function ProjectCard({
	title,
	description,
	imageUrl,
	index,
	slug,
}: ProjectCardProps) {
	return (
		<ScrollReveal delay={index * 80} className="h-full">
			<Link
				href={toProjectRoute(slug)}
				className="neo-panel flex h-full flex-col justify-between p-0 transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_hsl(var(--border))] overflow-hidden"
			>
				<div>
					<div className="relative h-40 w-full overflow-hidden border-b-2 border-border">
						<Image
							src={imageUrl}
							alt={PROJECT_IMAGE_ALT[slug] ?? `${title} promotional image`}
							fill
							sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
							className="object-cover"
						/>
					</div>
					<div className="p-6">
						<h3 className="mb-2 text-xl font-semibold">{title}</h3>
						<p className="text-sm text-muted-foreground leading-relaxed">
							{description}
						</p>
					</div>
				</div>
				<span className="mb-6 ml-6 text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
					View project →
				</span>
			</Link>
		</ScrollReveal>
	);
}

export function ProjectsSection() {
	const projects = Object.values(PROJECTS);

	return (
		<section className="border-b-2 border-border py-16 md:py-20 lg:py-24">
			<div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<ScrollReveal className="mb-12">
					<h2 className="section-title text-balance">Builds with range.</h2>
					<p className="section-subtitle mt-4 max-w-2xl">
						Shipped products and tools across mobile and web — built, iterated,
						and used in the real world.
					</p>
				</ScrollReveal>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
					{projects.map((project, idx) => (
						<ProjectCard
							key={project.id}
							title={project.name}
							description={project.description || ""}
							imageUrl={project.imageUrl}
							slug={project.id as ProjectSlug}
							index={idx}
						/>
					))}
				</div>

				{projects.length > 3 && (
					<ScrollReveal delay={300} className="mt-12">
						<Button asChild variant="outline" size="lg">
							<Link href="/projects">View all projects</Link>
						</Button>
					</ScrollReveal>
				)}
			</div>
		</section>
	);
}
