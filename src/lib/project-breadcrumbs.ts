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
