import { describe, expect, it } from "vitest";
import { compareBlogPostsByNewest, type BlogPost } from "./blog-utils";

const makePost = (id: string, date: string): BlogPost => ({
	id,
	title: id,
	date,
	excerpt: "",
	contentMarkdown: "",
	contentHtml: "",
	tags: [],
	category: "general",
});

describe("compareBlogPostsByNewest", () => {
	it("orders newer posts before older posts", () => {
		const newer = makePost("newer", "2026-03-11");
		const older = makePost("older", "2026-02-01");
		const posts = [older, newer];

		posts.sort(compareBlogPostsByNewest);

		expect(posts.map((post) => post.id)).toEqual(["newer", "older"]);
	});
});
