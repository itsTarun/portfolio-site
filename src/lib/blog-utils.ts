import readingTime from "reading-time";

export interface BlogPost {
	id: string;
	title: string;
	date: string;
	excerpt: string;
	contentMarkdown: string;
	contentHtml: string;
	tags: string[];
	category: string;
	featured?: boolean;
	readingTime?: number;
}

export interface BlogFrontmatter {
	title: string;
	date: string;
	excerpt: string;
	tags: string[];
	category: string;
	featured?: boolean;
}

export function calculateReadingTime(content: string): number {
	const stats = readingTime(content);
	return Math.ceil(stats.minutes);
}

export function formatDate(dateString: string): string {
	const date = new Date(dateString);
	const now = new Date();
	const diff = now.getTime() - date.getTime();
	const days = Math.floor(diff / (1000 * 60 * 60 * 24));

	if (days === 0) return "Today";
	if (days === 1) return "Yesterday";
	if (days < 7) return `${days} days ago`;
	if (days < 30) return `${Math.floor(days / 7)} weeks ago`;
	if (days < 365) return `${Math.floor(days / 30)} months ago`;
	return `${Math.floor(days / 365)} years ago`;
}

export function getFeaturedPosts(posts: BlogPost[], count = 3): BlogPost[] {
	return posts.filter((post) => post.featured).slice(0, count);
}

export function getRelatedPosts(
	currentPost: BlogPost,
	allPosts: BlogPost[],
	count = 3,
): BlogPost[] {
	return allPosts
		.filter((post) => {
			// Exclude current post
			if (post.id === currentPost.id) return false;

			// Find posts with matching tags
			const hasMatchingTag = post.tags.some((tag) =>
				currentPost.tags.includes(tag),
			);

			return hasMatchingTag;
		})
		.slice(0, count);
}

export function getUniqueTags(posts: BlogPost[]): string[] {
	const allTags = posts.flatMap((post) => post.tags);
	const uniqueTags = Array.from(new Set(allTags));
	return uniqueTags.sort();
}

export function getUniqueCategories(posts: BlogPost[]): string[] {
	const allCategories = posts.map((post) => post.category);
	const uniqueCategories = Array.from(new Set(allCategories));
	return uniqueCategories.sort();
}
