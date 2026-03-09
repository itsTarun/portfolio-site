import { describe, expect, it } from "vitest";
import vercelConfig from "./vercel.json";

describe("vercel.json headers configuration", () => {
	it("should apply X-Robots-Tag header to all routes", () => {
		const headers = vercelConfig.headers;

		// Find the header rule that matches all routes
		const allRoutesRule = headers.find((rule) => rule.source === "/(.*)");

		expect(allRoutesRule).toBeDefined();
		expect(allRoutesRule?.headers.some((h) => h.key === "X-Robots-Tag")).toBe(
			true,
		);
	});

	it('should have X-Robots-Tag header value of "noindex, nofollow"', () => {
		const headers = vercelConfig.headers;

		const allRoutesRule = headers.find((rule) => rule.source === "/(.*)");
		const xRobotsTag = allRoutesRule?.headers.find(
			(h) => h.key === "X-Robots-Tag",
		);

		expect(xRobotsTag?.value).toBe("noindex, nofollow");
	});
});
