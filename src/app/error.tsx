"use client";

import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

export default function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<div className="flex min-h-screen items-center justify-center bg-background">
			<div className="neo-panel p-8 md:p-12 text-center max-w-md">
				<span className="eyebrow mb-4 block">Error</span>
				<h1 className="section-title mb-4">Something went wrong</h1>
				<p className="section-subtitle mb-8">
					An unexpected error occurred. Please try again.
				</p>
				<div className="flex flex-col gap-4">
					<Button onClick={reset} size="lg">
						Try again
					</Button>
					<Button variant="outline" size="lg" asChild>
						<Link href="/">
							<Home className="mr-2 h-4 w-4" />
							Go Home
						</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
