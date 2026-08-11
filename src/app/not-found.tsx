import type { Metadata } from "next";
import { NotFoundContent } from "@/components/not-found-content";

export const metadata: Metadata = {
	// Without these the 404 inherited the homepage's title, description and
	// social card — a noindex page advertising itself as the homepage.
	title: "Page not found",
	description: "This page doesn't exist on itstarun.fyi.",
	// Next already injects its own <meta name="robots" content="noindex"> for
	// the 404 (NonIndex in next/dist/server/app-render/app-render.js), so the
	// built HTML carries both. Same direction, so they combine rather than
	// conflict; declaring it here keeps the intent visible in source.
	robots: { index: false, follow: false },
	// The root layout sets alternates.canonical to the site root. mergeMetadata
	// (next/dist/lib/metadata/resolve-metadata.js) walks the keys of the route's
	// own metadata, and resolveAlternates(null) returns null — so this genuinely
	// removes the inherited canonical rather than pointing it somewhere else.
	// A noindex page must not canonicalise to a different page.
	alternates: null,
	openGraph: null,
	twitter: null,
};

export default function NotFound() {
	return <NotFoundContent />;
}
