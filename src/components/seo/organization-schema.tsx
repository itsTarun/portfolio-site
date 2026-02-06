export function OrganizationSchema() {
	const baseUrl = "https://itstarun.fyi";
	const schema = {
		"@context": "https://schema.org",
		"@type": "Organization",
		"@id": `${baseUrl}/#organization`,
		name: "Tarun",
		url: baseUrl,
		logo: {
			"@type": "ImageObject",
			url: `${baseUrl}/favicon.svg`,
			width: 512,
			height: 512,
		},
		description:
			"Personal portfolio showcasing iOS and Flutter work, experience, and case studies.",
		sameAs: [
			"https://github.com/itsTarun",
			"https://www.linkedin.com/in/iamtarun/",
			"https://x.com/itstarun1381995",
		],
		contactPoint: {
			"@type": "ContactPoint",
			email: "itstarun1994@gmail.com",
			contactType: "inquiries",
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
