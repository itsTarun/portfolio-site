import { describe, expect, it } from "vitest";
import { sortByDateDesc } from "./utils";

describe("sortByDateDesc", () => {
	it("sorts items from newest to oldest", () => {
		const items = [
			{ id: "oldest", date: "2024-01-01" },
			{ id: "newest", date: "2024-03-01" },
			{ id: "middle", date: "2024-02-01" },
		];

		const sorted = sortByDateDesc(items);

		expect(sorted.map((item) => item.id)).toEqual(["newest", "middle", "oldest"]);
	});

	it("does not mutate the original array", () => {
		const items = [
			{ id: "oldest", date: "2024-01-01" },
			{ id: "newest", date: "2024-03-01" },
		];

		const copy = [...items];
		void sortByDateDesc(items);

		expect(items).toEqual(copy);
	});
});
