import { PROJECTS } from "@/config/projects";
import {
	CONTACT_EMAIL,
	RESUME_URL,
	SITE_URL,
	SOCIAL_LINKS,
} from "@/lib/site-config";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || SITE_URL;

function getProjectLines(): string[] {
	return Object.values(PROJECTS)
		.sort((a, b) => {
			if (a.featured !== b.featured) {
				return a.featured ? -1 : 1;
			}

			return a.name.localeCompare(b.name);
		})
		.map(
			// The case study is the primary link — pointing straight at the product
			// site left an LLM with no way to discover these pages exist. The live
			// product URL rides along as secondary context.
			(project) =>
				`- [${project.name}](${BASE_URL}/projects/${project.slug}) — ${project.tagline} (live product: ${project.url})`,
		);
}

export function buildLlmsTxt(): string {
	return [
		"# Tarun Sharma — Mobile App Developer",
		"",
		"> iOS and Flutter developer focused on stable releases and product quality.",
		"",
		"## About",
		"Mobile developer based in Delhi, India, building and shipping iOS and Flutter products since 2018.",
		"",
		"## Projects",
		...getProjectLines(),
		"",
		"## Skills",
		"iOS, Flutter, Dart, UIKit, VIPER Architecture, Firebase, FCM, Crashlytics, App Store, Git",
		"",
		"## Links",
		`- About: ${BASE_URL}/about`,
		`- Projects: ${BASE_URL}/projects`,
		`- Contact: ${BASE_URL}/contact`,
		// The HTML route is listed first on purpose: a crawler can read it without
		// parsing a PDF. The file itself stays listed for anything that wants it.
		`- Resume: ${BASE_URL}/resume`,
		`- Resume (PDF): ${BASE_URL}${RESUME_URL}`,
		`- GitHub: ${SOCIAL_LINKS.github}`,
		`- LinkedIn: ${SOCIAL_LINKS.linkedin}`,
		`- X: ${SOCIAL_LINKS.twitter}`,
		`- Email: mailto:${CONTACT_EMAIL}`,
		"",
	].join("\n");
}
