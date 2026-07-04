interface JsonLdScriptProps {
	schema: Record<string, unknown>;
}

export function JsonLdScript({ schema }: JsonLdScriptProps) {
	return (
		<script
			type="application/ld+json"
			// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD requires raw script injection; schema is app-controlled data serialized with JSON.stringify, never user input
			dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
		/>
	);
}
