import { describe, expect, it } from "vitest";
import { createProjectMetadata } from "./project-metadata";

describe("createProjectMetadata", () => {
	it("builds canonical, openGraph, and twitter metadata with string twitter images", () => {
		const metadata = createProjectMetadata({
			title: "OpenTribe - Web3 Talent Marketplace | Tarun Portfolio",
			description: "OpenTribe description",
			path: "/projects/opentribe",
			ogTitle: "OpenTribe - Web3 Talent Marketplace",
			ogDescription: "OpenGraph description",
			imageUrl: "/opengraph-image",
			imageAlt: "OpenTribe project case study",
		});

		expect(metadata.alternates?.canonical).toBe(
			"https://itstarun.fyi/projects/opentribe",
		);
		expect(metadata.openGraph?.url).toBe(
			"https://itstarun.fyi/projects/opentribe",
		);
		expect(metadata.twitter?.images).toEqual(["/opengraph-image"]);
	});

	it("supports object-based twitter images", () => {
		const metadata = createProjectMetadata({
			title: "Chargespot - EV Charging Platform | Tarun Portfolio",
			description: "Chargespot description",
			path: "/projects/chargespot",
			ogTitle: "Chargespot - EV Charging Platform",
			ogDescription: "OpenGraph description",
			imageUrl: "/images/projects/chargespot.webp",
			imageAlt: "Chargespot - EV Charging Platform",
			twitterImageType: "object",
		});

		expect(metadata.twitter?.images).toEqual([
			{
				url: "/images/projects/chargespot.webp",
				width: 1200,
				height: 630,
				alt: "Chargespot - EV Charging Platform",
			},
		]);
	});
});
