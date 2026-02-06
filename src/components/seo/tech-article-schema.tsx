interface TechArticleSchemaProps {
	title: string;
	description: string;
	url: string;
	image: string;
	datePublished: string;
	dateModified: string;
	author?: string;
	tags?: string[];
	category?: string;
}

export function TechArticleSchema({
	title,
	description,
	url,
	image,
	datePublished,
	dateModified,
	author = "Tarun",
	tags = [],
	category,
}: TechArticleSchemaProps) {
	const baseUrl = "https://itstarun.fyi";
	const schema = {
		"@context": "https://schema.org",
		"@type": "TechArticle",
		"@id": url,
		headline: title,
		description,
		image: {
			"@type": "ImageObject",
			url: image,
			width: 1200,
			height: 630,
		},
		datePublished,
		dateModified,
		author: {
			"@type": "Person",
			name: author,
			url: baseUrl,
		},
		publisher: {
			"@id": `${baseUrl}/#organization`,
		},
		url,
		keywords: tags.join(", "),
		articleSection: category,
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": url,
		},
		proficiencyLevel: "Beginner to Intermediate",
		dependencies: tags.filter((tag) =>
			[
				"React",
				"Next.js",
				"TypeScript",
				"Node.js",
				"PostgreSQL",
				"GraphQL",
				"API",
				"Backend",
				"Frontend",
				"web-development",
			].includes(tag),
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
