import Link from "next/link";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { PROJECTS } from "@/config/projects";
import { type ProjectSlug, toProjectRoute } from "@/types";

interface ProjectRowProps {
	title: string;
	category: string;
	description: string;
	slug: ProjectSlug;
}

function ProjectRow({ title, category, description, slug }: ProjectRowProps) {
	return (
		<Link
			href={toProjectRoute(slug)}
			className="group flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 border-b border-border last:border-b-0 transition-colors hover:bg-muted/40"
		>
			<div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 w-full max-w-3xl">
				<div className="flex items-center gap-3 sm:w-48 shrink-0">
					<h3 className="text-sm font-semibold text-foreground">{title}</h3>
					<span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground px-1.5 py-0.5 border border-border rounded-md bg-muted/20">
						{category}
					</span>
				</div>
				<p className="text-sm text-muted-foreground line-clamp-1 sm:line-clamp-2 leading-relaxed">
					{description}
				</p>
			</div>

			<div className="hidden sm:flex items-center mt-3 sm:mt-0 opacity-0 group-hover:opacity-100 transition-opacity">
				<span className="font-mono text-xs text-muted-foreground">View →</span>
			</div>
		</Link>
	);
}

export function ProjectsSection() {
	const projects = Object.values(PROJECTS);

	return (
		<section className="py-16 md:py-20 lg:py-24 border-b border-border">
			<div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
				<ScrollReveal className="mb-10">
					<h2 className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-3">
						Index
					</h2>
					<h3 className="text-2xl font-medium tracking-tight text-foreground">
						Engineering & Projects
					</h3>
				</ScrollReveal>

				<ScrollReveal delay={100}>
					<div className="rounded-xl sm:rounded-2xl border border-border overflow-hidden bg-transparent">
						<div className="hidden sm:flex items-center gap-6 p-4 sm:px-5 border-b border-border bg-muted/20">
							<div className="sm:w-48 shrink-0 font-mono text-xs text-muted-foreground uppercase tracking-wider">
								Application
							</div>
							<div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
								Description
							</div>
						</div>
						<div className="flex flex-col">
							{projects.map((project) => (
								<ProjectRow
									key={project.id}
									title={project.name}
									category={project.category}
									description={project.description || project.tagline}
									slug={project.id as ProjectSlug}
								/>
							))}
						</div>
					</div>
				</ScrollReveal>

				{projects.length > 3 && (
					<ScrollReveal delay={200} className="mt-8 flex justify-end">
						<Link
							href="/projects"
							className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest"
						>
							View all projects →
						</Link>
					</ScrollReveal>
				)}
			</div>
		</section>
	);
}
