import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import {
	RESUME_DOWNLOAD_LINK_PROPS,
	RESUME_URL,
	RESUME_VIEW_LINK_PROPS,
} from "@/lib/site-config";

describe("resume config", () => {
	it("points at a file that exists in public/", () => {
		expect(existsSync(join(process.cwd(), "public", RESUME_URL))).toBe(true);
	});

	it("saves under a descriptive filename rather than resume.pdf", () => {
		expect(RESUME_DOWNLOAD_LINK_PROPS.download).toMatch(/^[\w-]+\.pdf$/);
		expect(RESUME_DOWNLOAD_LINK_PROPS.download).not.toBe("resume.pdf");
	});

	it("opens the view link in a new tab without leaking the opener", () => {
		expect(RESUME_VIEW_LINK_PROPS.target).toBe("_blank");
		expect(RESUME_VIEW_LINK_PROPS.rel).toContain("noopener");
	});

	it("never forces a download on the view link", () => {
		expect(RESUME_VIEW_LINK_PROPS).not.toHaveProperty("download");
	});
});
