"use client";

export default function BlogLoading() {
	return (
		<div className="container mx-auto px-4 py-16 md:py-20 lg:py-24">
			<span className="eyebrow mb-4 block">Blog</span>
			<h1 className="section-title mb-4">Blog</h1>
			<p className="section-subtitle mb-12">
				Thoughts on mobile development and building products
			</p>

			<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{[1, 2, 3, 4, 5, 6].map((i) => (
					<div key={i} className="neo-panel p-6 animate-pulse">
						<div className="h-4 w-20 bg-muted rounded mb-3" />
						<div className="h-6 w-3/4 bg-muted rounded mb-3" />
						<div className="h-4 w-full bg-muted rounded mb-2" />
						<div className="h-4 w-full bg-muted rounded mb-2" />
						<div className="h-4 w-2/3 bg-muted rounded mb-4" />
						<div className="flex gap-2 mt-4">
							<div className="h-5 w-16 bg-muted rounded" />
							<div className="h-5 w-16 bg-muted rounded" />
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
