import { JsonLdScript } from "./json-ld-script";
import { SITE_URL } from "@/lib/site-config";

interface CreativeWorkSchemaProps {
	name: string;
	description: string;
	url: string;
	image: string;
	dateCreated?: string;
	technologies?: string[];
	liveUrl?: string;
	githubUrl?: string;
	category?: string;
}

export function CreativeWorkSchema({
	name,
	description,
	url,
	image,
	dateCreated,
	technologies = [],
	liveUrl,
	githubUrl,
	category,
}: CreativeWorkSchemaProps) {
	const schema = {
		"@context": "https://schema.org",
		"@type": "CreativeWork",
		"@id": url,
		name,
		description,
		image: {
			"@type": "ImageObject",
			url: image,
			width: 1200,
			height: 630,
		},
		url,
		dateCreated: dateCreated || new Date().toISOString(),
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
		applicationCategory:
			category === "web" ? "WebApplication" : "SoftwareApplication",
		...(liveUrl && { url: liveUrl }),
		...(githubUrl && { codeRepository: githubUrl }),
		programmingLanguage: technologies.filter((tech) =>
			["TypeScript", "JavaScript", "Dart", "Python", "Go"].includes(tech),
		),
	};

	return <JsonLdScript schema={schema} />;
}
