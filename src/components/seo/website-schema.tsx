import { JsonLdScript } from "./json-ld-script";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site-config";

export function WebSiteSchema() {
	const schema = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		"@id": `${SITE_URL}/#website`,
		url: SITE_URL,
		name: SITE_NAME,
		description: SITE_DESCRIPTION,
		publisher: {
			"@id": `${SITE_URL}/#organization`,
		},
	};

	return <JsonLdScript schema={schema} />;
}
