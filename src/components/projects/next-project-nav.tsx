import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { type ProjectSlug, toProjectRoute } from "@/types";

interface NextProjectNavProps {
	nextProject?: {
		title: string;
		slug: ProjectSlug;
	};
	previousProject?: {
		title: string;
		slug: ProjectSlug;
	};
}

export function NextProjectNav({ nextProject, previousProject }: NextProjectNavProps) {
	if (!nextProject && !previousProject) {
		return (
			<nav aria-label="Project navigation" className="mt-12 pt-8 border-t-2 border-border">
				<Link href="/projects" className="neo-panel p-6 hover:bg-accent transition-colors group flex flex-col items-center justify-center text-center">
					<span className="text-xl font-semibold group-hover:underline">
						View All Projects
					</span>
				</Link>
			</nav>
		);
	}

	return (
		<nav aria-label="Project navigation" className="mt-12 pt-8 border-t-2 border-border grid grid-cols-1 sm:grid-cols-2 gap-4">
			{previousProject ? (
				<Link href={toProjectRoute(previousProject.slug)} className="neo-panel p-6 hover:bg-accent transition-colors group flex flex-col items-start">
					<span className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2 mb-3">
						<ArrowRight className="h-4 w-4 rotate-180" /> Previous
					</span>
					<span className="text-xl font-semibold group-hover:underline">
						{previousProject.title}
					</span>
				</Link>
			) : <div />}
			{nextProject && (
				<Link href={toProjectRoute(nextProject.slug)} className="neo-panel p-6 hover:bg-accent transition-colors group flex flex-col items-end text-right">
					<span className="text-sm font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2 mb-3">
						Next <ArrowRight className="h-4 w-4" />
					</span>
					<span className="text-xl font-semibold group-hover:underline">
						{nextProject.title}
					</span>
				</Link>
			)}
		</nav>
	);
}
