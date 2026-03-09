"use client";

export default function BlogPostLoading() {
	return (
		<div className="container mx-auto px-4 py-16 md:py-20 lg:py-24">
			<div className="mx-auto max-w-3xl">
				<div className="neo-panel p-8 animate-pulse mb-12">
					<div className="h-4 w-20 bg-muted rounded mb-4" />
					<div className="h-10 w-3/4 bg-muted rounded mb-4" />
					<div className="flex gap-4 mb-8">
						<div className="h-4 w-32 bg-muted rounded" />
						<div className="h-4 w-24 bg-muted rounded" />
					</div>
					<div className="flex gap-2">
						<div className="h-5 w-16 bg-muted rounded" />
						<div className="h-5 w-20 bg-muted rounded" />
					</div>
				</div>

				<div className="space-y-4">
					{[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
						<div
							key={i}
							className="h-4 bg-muted rounded"
							style={{ width: i === 8 ? "60%" : "100%" }}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
