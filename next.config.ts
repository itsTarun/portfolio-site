import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	pageExtensions: ["js", "jsx", "mdx", "ts", "tsx", "md"],
	// A stray lockfile above the repo makes Next infer a parent directory as the
	// workspace root, so local builds trace differently from Vercel's. Pin it.
	outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
