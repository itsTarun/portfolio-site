import { JsonLdScript } from "./json-ld-script";
import {
	CONTACT_EMAIL,
	SITE_DESCRIPTION,
	SITE_URL,
	SOCIAL_PROFILE_URLS,
} from "@/lib/site-config";

export function OrganizationSchema() {
	const schema = {
		"@context": "https://schema.org",
		"@type": "Organization",
		"@id": `${SITE_URL}/#organization`,
		name: "Tarun",
		url: SITE_URL,
		logo: {
			"@type": "ImageObject",
			url: `${SITE_URL}/favicon.svg`,
			width: 512,
			height: 512,
		},
		description: SITE_DESCRIPTION,
		sameAs: SOCIAL_PROFILE_URLS,
		contactPoint: {
			"@type": "ContactPoint",
			email: CONTACT_EMAIL,
			contactType: "inquiries",
		},
	};

	return <JsonLdScript schema={schema} />;
}
