import { SITE_URL, SOCIAL_PROFILE_URLS } from "@/lib/site-config";
import { JsonLdScript } from "./json-ld-script";

export function PersonSchema() {
	const schema = {
		"@context": "https://schema.org",
		"@type": "Person",
		"@id": `${SITE_URL}/#person`,
		name: "Tarun",
		url: SITE_URL,
		image: `${SITE_URL}/images/headshot.webp`,
		jobTitle: "Mobile & Full-Stack Engineer",
		description:
			"Mobile & Full-Stack Engineer focused on iOS, Flutter, and web applications, stability, and release quality.",
		sameAs: SOCIAL_PROFILE_URLS,
		worksFor: {
			"@id": `${SITE_URL}/#organization`,
		},
		alumniOf: {
			"@type": "CollegeOrUniversity",
			name: "Punjab Technical University",
		},
		knowsAbout: [
			"Mobile App Development",
			"Full-Stack Development",
			"iOS Development",
			"Android Development",
			"Flutter",
			"Dart",
			"Swift",
			"Next.js",
			"React",
			"TypeScript",
			"Node.js",
			"UIKit",
			"SwiftUI",
			"WidgetKit",
			"VIPER",
			"Clean Architecture",
			"REST APIs",
			"PostgreSQL",
			"Prisma",
			"Firebase",
			"Sentry",
		],
	};

	return <JsonLdScript schema={schema} />;
}
