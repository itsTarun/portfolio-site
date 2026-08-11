import { describe, expect, it } from "vitest";
import { createProjectMetadata } from "./project-metadata";

const opentribeMetadata = createProjectMetadata({
	title: "OpenTribe - Talent Marketplace for Polkadot",
	description: "OpenTribe description",
	path: "/projects/opentribe",
	ogTitle: "OpenTribe - Talent Marketplace for Polkadot",
	ogDescription: "OpenGraph description",
});

describe("createProjectMetadata", () => {
	it("builds canonical and openGraph urls on the canonical host", () => {
		expect(opentribeMetadata.alternates?.canonical).toBe(
			"https://www.itstarun.fyi/projects/opentribe",
		);
		expect(opentribeMetadata.openGraph?.url).toBe(
			"https://www.itstarun.fyi/projects/opentribe",
		);
	});

	it("leaves images unset so the route's opengraph-image.tsx is used", () => {
		expect(opentribeMetadata.openGraph).not.toHaveProperty("images");
		expect(opentribeMetadata.twitter).not.toHaveProperty("images");
	});

	it("falls back to the openGraph copy for the twitter card", () => {
		expect(opentribeMetadata.twitter?.title).toBe(
			"OpenTribe - Talent Marketplace for Polkadot",
		);
		expect(opentribeMetadata.twitter?.description).toBe(
			"OpenGraph description",
		);
	});

	it("allows twitter copy to diverge from openGraph copy", () => {
		const metadata = createProjectMetadata({
			title: "Chargespot - Flutter EV Charging Platform",
			description: "Chargespot description",
			path: "/projects/chargespot",
			ogTitle: "Chargespot - EV Charging Platform",
			ogDescription: "OpenGraph description",
			twitterTitle: "Chargespot",
			twitterDescription: "Twitter description",
		});

		expect(metadata.twitter?.title).toBe("Chargespot");
		expect(metadata.twitter?.description).toBe("Twitter description");
	});
});
