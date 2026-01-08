import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	pageExtensions: ["js", "jsx", "mdx", "ts", "tsx", "md"],
	experimental: {
		typedRoutes: true,
	},
};

export default nextConfig;
