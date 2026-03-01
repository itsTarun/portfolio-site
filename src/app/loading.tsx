"use client";

export default function Loading() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-background">
			<div className="neo-panel p-8 flex flex-col items-center gap-4">
				<div className="h-8 w-8 animate-spin rounded-none border-2 border-border border-t-foreground" />
				<p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
					Loading...
				</p>
			</div>
		</div>
	);
}
