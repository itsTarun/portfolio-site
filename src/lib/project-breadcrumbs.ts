import type { Route } from "next";
import type { BreadcrumbItem } from "@/components/ui/breadcrumb";

export type Breadcrumb = {
	name: string;
	url: string;
};

export function buildProjectBreadcrumbs(
	projectTitle: string,
	projectSlug: string,
): Breadcrumb[] {
	return [
		{ name: "Home", url: "/" },
		{ name: "Projects", url: "/projects" },
		{ name: projectTitle, url: `/projects/${projectSlug}` },
	];
}

// The JSON-LD and the visible nav render from one list so the markup always
// describes what is actually on the page.
export function toBreadcrumbItems(breadcrumbs: Breadcrumb[]): BreadcrumbItem[] {
	return breadcrumbs.map(({ name, url }) => ({
		label: name,
		href: url as Route,
	}));
}
