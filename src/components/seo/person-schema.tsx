import { JsonLdScript } from "./json-ld-script";
import { SITE_URL, SOCIAL_PROFILE_URLS } from "@/lib/site-config";

export function PersonSchema() {
	const schema = {
		"@context": "https://schema.org",
		"@type": "Person",
		"@id": `${SITE_URL}/#person`,
		name: "Tarun Sharma",
		url: SITE_URL,
		image: `${SITE_URL}/images/headshot.webp`,
		jobTitle: "Mobile App Developer",
		description:
			"Mobile app developer focused on iOS and Flutter apps, stability, and release quality.",
		sameAs: SOCIAL_PROFILE_URLS,
		worksFor: {
			"@id": `${SITE_URL}/#organization`,
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

	return <JsonLdScript schema={schema} />;
}
