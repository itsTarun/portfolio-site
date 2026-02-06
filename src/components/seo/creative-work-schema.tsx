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
	const baseUrl = "https://itstarun.fyi";
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
			url: baseUrl,
		},
		publisher: {
			"@id": `${baseUrl}/#organization`,
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

	const schemaJson = JSON.stringify(schema);

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: schemaJson }}
		/>
	);
}
