import { describe, expect, it } from "vitest";
import vercelConfig from "./vercel.json";

describe("vercel.json headers configuration", () => {
  it("should apply X-Robots-Tag only to preview deployments", () => {
    const allRoutesRule = vercelConfig.headers.find(
      (rule) => rule.source === "/(.*)",
    );

    expect(allRoutesRule).toBeDefined();
    expect(allRoutesRule?.headers.some((h) => h.key === "X-Robots-Tag")).toBe(
      true,
    );
  });

  it("should scope X-Robots-Tag to the preview host", () => {
    const allRoutesRule = vercelConfig.headers.find(
      (rule) => rule.source === "/(.*)",
    );

    expect(allRoutesRule?.has).toEqual([
      { type: "host", value: "droidsize-web.vercel.app" },
    ]);
  });

  it('should have X-Robots-Tag value of "noindex, nofollow"', () => {
    const allRoutesRule = vercelConfig.headers.find(
      (rule) => rule.source === "/(.*)",
    );
    const xRobotsTag = allRoutesRule?.headers.find(
      (h) => h.key === "X-Robots-Tag",
    );

    expect(xRobotsTag?.value).toBe("noindex, nofollow");
  });
});
