import { SITE_URL } from "@/lib/site-config";
import { JsonLdScript } from "./json-ld-script";

interface CreativeWorkSchemaProps {
	name: string;
	description: string;
	url: string;
	image: string;
	/** ISO date. Omitted from the schema when absent — do not default it. */
	dateCreated?: string;
	technologies?: string[];
	category?: string;
	sameAs?: string[];
}

export function CreativeWorkSchema({
	name,
	description,
	url,
	image,
	dateCreated,
	technologies = [],
	category,
	sameAs,
}: CreativeWorkSchemaProps) {
	const schema = {
		"@context": "https://schema.org",
		"@type": "CreativeWork",
		"@id": url,
		name,
		description,
		// Plain URL, not an ImageObject: the per-project assets have different
		// intrinsic sizes, so declaring fixed dimensions here would be wrong.
		image,
		url,
		...(dateCreated && { dateCreated }),
		...(sameAs && sameAs.length > 0 && { sameAs }),
		author: {
			"@type": "Person",
			name: "Tarun",
			url: SITE_URL,
		},
		publisher: {
			"@id": `${SITE_URL}/#organization`,
		},
		keywords: technologies.join(", "),
		about: category,
		programmingLanguage: technologies.filter((tech) =>
			["TypeScript", "JavaScript", "Dart", "Python", "Go"].includes(tech),
		),
	};

	return <JsonLdScript schema={schema} />;
}
