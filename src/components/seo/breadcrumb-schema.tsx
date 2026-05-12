import { JsonLdScript } from "./json-ld-script";
import { SITE_URL } from "@/lib/site-config";

interface BreadcrumbItem {
	name: string;
	url: string;
}

interface BreadcrumbSchemaProps {
	breadcrumbs: BreadcrumbItem[];
}

export function BreadcrumbSchema({ breadcrumbs }: BreadcrumbSchemaProps) {
	const schema = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: breadcrumbs.map((crumb, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: crumb.name,
			item: crumb.url.startsWith("http") ? crumb.url : `${SITE_URL}${crumb.url}`,
		})),
	};

	return <JsonLdScript schema={schema} />;
}
