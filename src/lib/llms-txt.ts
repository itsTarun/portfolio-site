import { PROJECTS } from "@/config/projects";
import { CONTACT_EMAIL, SITE_URL, SOCIAL_LINKS } from "@/lib/site-config";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || SITE_URL;

function getProjectLines(): string[] {
	return Object.values(PROJECTS)
		.sort((a, b) => {
			if (a.featured !== b.featured) {
				return a.featured ? -1 : 1;
			}

			return a.name.localeCompare(b.name);
		})
		.map((project) => `- [${project.name}](${project.url}): ${project.tagline}`);
}

export function buildLlmsTxt(): string {
	return [
		"# Tarun Sharma — Mobile App Developer",
		"",
		"> iOS and Flutter developer focused on stable releases and product quality.",
		"",
		"Mobile developer based in Delhi, India, building and shipping iOS and Flutter products since 2018. Specialises in iOS and Flutter with experience in UIKit, VIPER Architecture, Firebase, FCM, Crashlytics, and App Store deployments.",
		"",
		"## Projects",
		...getProjectLines(),
		"",
		"## Pages",
		`- [About](${BASE_URL}/about): Background, experience, and skills`,
		`- [Projects](${BASE_URL}/projects): All projects`,
		`- [Contact](${BASE_URL}/contact): Get in touch`,
		"",
		"## Optional",
		`- [GitHub](${SOCIAL_LINKS.github})`,
		`- [LinkedIn](${SOCIAL_LINKS.linkedin})`,
		`- [X](${SOCIAL_LINKS.twitter})`,
		`- [Email](mailto:${CONTACT_EMAIL})`,
		"",
	].join("\n");
}
