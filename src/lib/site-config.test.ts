import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { RESUME_URL } from "@/lib/site-config";

describe("resume config", () => {
	it("points at a file that exists in public/", () => {
		expect(existsSync(join(process.cwd(), "public", RESUME_URL))).toBe(true);
	});
});
