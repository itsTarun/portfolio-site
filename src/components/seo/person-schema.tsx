export function PersonSchema() {
	const baseUrl = "https://itstarun.fyi";
	const schema = {
		"@context": "https://schema.org",
		"@type": "Person",
		"@id": `${baseUrl}/#person`,
		name: "Tarun",
		url: baseUrl,
		image: `${baseUrl}/favicon.svg`,
		jobTitle: "Full Stack Developer",
		description:
			"Full Stack Developer with 3-4 years of experience building modern web applications. Specialized in React, Next.js, TypeScript, PostgreSQL, and modern web technologies.",
		sameAs: [
			"https://github.com/itsTarun",
			"https://www.linkedin.com/in/iamtarun/",
			"https://x.com/itstarun1381995",
		],
		worksFor: {
			"@id": `${baseUrl}/#organization`,
		},
		alumniOf: {
			"@type": "CollegeOrUniversity",
			name: "University",
		},
		knowsAbout: [
			"React",
			"Next.js",
			"TypeScript",
			"JavaScript",
			"Node.js",
			"PostgreSQL",
			"GraphQL",
			"Tailwind CSS",
			"Framer Motion",
			"Web Development",
			"Full Stack Development",
		],
	};

	const schemaJson = JSON.stringify(schema);

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: schemaJson }}
		/>
	);
}
