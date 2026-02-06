interface BreadcrumbItem {
	name: string;
	url: string;
}

interface BreadcrumbSchemaProps {
	breadcrumbs: BreadcrumbItem[];
}

export function BreadcrumbSchema({ breadcrumbs }: BreadcrumbSchemaProps) {
	const baseUrl = "https://itstarun.fyi";
	const schema = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: breadcrumbs.map((crumb, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: crumb.name,
			item: crumb.url.startsWith("http") ? crumb.url : `${baseUrl}${crumb.url}`,
		})),
	};

	const schemaJson = JSON.stringify(schema);

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: schemaJson }}
		/>
	);
}
