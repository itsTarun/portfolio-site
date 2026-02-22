import { BlogClient } from "@/components/blog/blog-client";
import {
	getAllBlogPosts,
	getBlogCategories,
	getBlogTags,
} from "@/lib/load-blog-posts";

export const revalidate = 3600;

export default async function BlogPage() {
	const allPosts = await getAllBlogPosts();
	const categories = await getBlogCategories();
	const tags = await getBlogTags();

	return (
		<section className="py-16 md:py-20 lg:py-24">
			<div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="mb-12">
					<p className="eyebrow mb-3">Writing</p>
					<h1 className="section-title">
						Notes on building, design, and product craft.
					</h1>
					<p className="section-subtitle mt-4 max-w-2xl">
						Short reflections on tools, systems, and lessons learned in product
						work.
					</p>
				</div>

				<BlogClient initialPosts={allPosts} categories={categories} tags={tags} />
			</div>
		</section>
	);
}
