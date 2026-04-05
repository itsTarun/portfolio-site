import { describe, expect, it } from "vitest";
import { buildProjectBreadcrumbs } from "./project-breadcrumbs";

describe("buildProjectBreadcrumbs", () => {
	it("returns the shared project breadcrumb trail", () => {
		expect(buildProjectBreadcrumbs("Chargespot", "chargespot")).toEqual([
			{ name: "Home", url: "/" },
			{ name: "Projects", url: "/projects" },
			{ name: "Chargespot", url: "/projects/chargespot" },
		]);
	});
});
