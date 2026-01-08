import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
	pageExtensions: ["js", "jsx", "mdx", "ts", "tsx", "md"],
	experimental: {
		typedRoutes: true,
	},
};

const withMDX = createMDX({
	extension: /\.mdx?$/,
	options: {
		rehypePlugins: [],
		mdxOptions: {
			development: process.env.NODE_ENV === "development",
			jsx: true,
			jsxImportSource: false,
		},
	},
});

export default withMDX(nextConfig);
