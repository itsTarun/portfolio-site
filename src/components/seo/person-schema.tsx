export function PersonSchema() {
	const baseUrl = "https://itstarun.fyi";
	const schema = {
		"@context": "https://schema.org",
		"@type": "Person",
		"@id": `${baseUrl}/#person`,
		name: "Tarun Sharma",
		url: baseUrl,
		image: `${baseUrl}/favicon.svg`,
		jobTitle: "Mobile App Developer",
		description:
			"Mobile app developer focused on iOS and Flutter apps, stability, and release quality.",
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
			name: "Delhi University",
		},
		knowsAbout: [
			"iOS Development",
			"Android Development",
			"Flutter",
			"Dart",
			"UIKit",
			"VIPER",
			"Firebase",
			"FCM",
			"Crashlytics",
			"REST APIs",
			"Mobile App Development",
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
