import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { RESUME_URL, SITE_URL } from "@/lib/site-config";

describe("resume config", () => {
	it("points at a file that exists in public/", () => {
		expect(existsSync(join(process.cwd(), "public", RESUME_URL))).toBe(true);
	});
});

describe("site url", () => {
	it("uses the www host, which is what the apex redirects to", () => {
		expect(SITE_URL).toBe("https://www.itstarun.fyi");
	});

	it("has no trailing slash, so concatenating a path stays well formed", () => {
		expect(SITE_URL.endsWith("/")).toBe(false);
	});
});
