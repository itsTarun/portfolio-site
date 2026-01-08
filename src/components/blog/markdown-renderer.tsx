"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface MarkdownRendererProps {
	content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
	const [htmlContent, setHtmlContent] = useState("");

	useEffect(() => {
		// Simple markdown parser
		const html = content
			// Headers
			.replace(
				/^### (.*$)/gim,
				'<h3 class="text-2xl font-bold mt-8 mb-4">$1</h3>',
			)
			.replace(
				/^## (.*$)/gim,
				'<h2 class="text-3xl font-bold mt-8 mb-4">$1</h2>',
			)
			.replace(
				/^# (.*$)/gim,
				'<h1 class="text-4xl font-bold mt-8 mb-4">$1</h1>',
			)

			// Bold
			.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold">$1</strong>')
			.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold">$1</strong>')

			// Italic
			.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
			.replace(/_(.*?)_/g, '<em class="italic">$1</em>')

			// Code blocks
			.replace(
				/```(\w+)?\n([\s\S]*?)```/g,
				'<pre class="bg-muted rounded-lg p-4 my-4 overflow-x-auto"><code class="text-sm">$2</code></pre>',
			)

			// Inline code
			.replace(
				/`([^`]+)`/g,
				'<code class="bg-muted px-2 py-1 rounded text-sm">$1</code>',
			)

			// Links
			.replace(
				/\[([^\]]+)\]\(([^)]+)\)/g,
				'<a href="$2" class="text-primary hover:underline">$1</a>',
			)

			// Lists
			.replace(/^\s*-\s+(.*$)/gim, '<li class="ml-6">$1</li>')
			.replace(/(<li.*<\/li>\n?)+/g, '<ul class="ml-6 space-y-2">$&</ul>')

			// Paragraphs
			.replace(/\n\n/g, '</p><p class="leading-relaxed">')
			.replace(/^/, '<p class="leading-relaxed">')
			.concat("</p>");

		setHtmlContent(html);
	}, [content]);

	return (
		<div
			className="prose prose-lg max-w-4xl mx-auto"
			dangerouslySetInnerHTML={{ __html: htmlContent }}
		/>
	);
}
