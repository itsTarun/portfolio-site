interface JsonLdScriptProps {
	schema: Record<string, unknown>;
}

export function JsonLdScript({ schema }: JsonLdScriptProps) {
	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
		/>
	);
}
