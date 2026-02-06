export function WebSiteSchema() {
	const baseUrl = "https://itstarun.fyi";
	const schema = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		"@id": `${baseUrl}/#website`,
		url: baseUrl,
		name: "Tarun Portfolio",
		description:
			"Modern personal portfolio website showcasing projects, skills, and experience. Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies.",
		potentialAction: {
			"@type": "SearchAction",
			target: `${baseUrl}/blog?search={search_term_string}`,
			"query-input": "required name=search_term_string",
		},
		publisher: {
			"@id": `${baseUrl}/#organization`,
		},
	};

	const schemaJson = JSON.stringify(schema);

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: schemaJson }}
		/>
	);
}
