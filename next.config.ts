import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	pageExtensions: ["js", "jsx", "mdx", "ts", "tsx", "md"],
	// A stray lockfile above the repo makes Next infer a parent directory as the
	// workspace root, so local builds trace differently from Vercel's. Pin it.
	outputFileTracingRoot: process.cwd(),
	// The blog was removed in 8b08cc7, leaving its URLs to 404. `permanent: true`
	// emits 308 so the link equity moves instead of evaporating. Order matters:
	// the one post with a real successor is claimed before the catch-all.
	async redirects() {
		return [
			{
				source: "/blog/domain-collective-technical-deep-dive",
				destination: "/projects/domain-collective",
				permanent: true,
			},
			{
				source: "/blog",
				destination: "/projects",
				permanent: true,
			},
			{
				// `:slug*` matches one or more nested segments, e.g. /blog/a/b/c.
				source: "/blog/:slug*",
				destination: "/projects",
				permanent: true,
			},
		];
	},
};

export default nextConfig;
