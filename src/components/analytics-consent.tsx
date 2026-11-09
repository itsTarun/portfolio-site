"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { startAnalytics, stopAnalytics } from "@/lib/analytics";

const storageKey = "analytics-consent";
type Choice = "granted" | "denied" | null;

export function AnalyticsConsent({ enabled }: { enabled: boolean }) {
	const [ready, setReady] = useState(false);
	const [choice, setChoice] = useState<Choice>(null);
	const [open, setOpen] = useState(false);
	const [storageError, setStorageError] = useState(false);

	useEffect(() => {
		try {
			const saved = localStorage.getItem(storageKey);
			if (saved === "granted" || saved === "denied") setChoice(saved);
		} catch {
			setStorageError(true);
		}
		setReady(true);
	}, []);

	useEffect(() => {
		if (!ready || !enabled || choice !== "granted") return;
		void startAnalytics().catch((error: unknown) => {
			console.error("Analytics could not start", error);
		});
	}, [choice, enabled, ready]);

	function choose(value: Exclude<Choice, null>) {
		if (value === "denied") stopAnalytics();
		try {
			localStorage.setItem(storageKey, value);
		} catch {
			setStorageError(true);
		}
		setChoice(value);
		setOpen(false);
	}

	if (!ready || !enabled) return null;

	return (
		<div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
			<Button
				variant="link"
				onClick={() => setOpen(!open)}
				aria-expanded={open || choice === null}
			>
				Analytics preferences
			</Button>
			{(open || choice === null) && (
				<section
					aria-label="Analytics preferences"
					className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-2xl border-2 border-border bg-background p-5 shadow-[4px_4px_0_var(--color-border)]"
				>
					<h2 className="mb-2 font-semibold">Optional analytics</h2>
					<p className="mb-4 text-sm text-muted-foreground">
						Allow Google Analytics and PostHog to measure visits and page views?
						They use browser identifiers. Vercel provides basic cookieless
						measurement. You can change this choice here at any time.{" "}
						<Link href="/privacy" className="underline">
							Privacy policy
						</Link>
					</p>
					<div className="flex flex-wrap gap-3">
						<Button
							variant="outline"
							className="h-auto min-h-11 whitespace-normal py-2"
							onClick={() => choose("denied")}
						>
							Reject optional analytics
						</Button>
						<Button
							variant="outline"
							className="h-auto min-h-11 whitespace-normal py-2"
							onClick={() => choose("granted")}
						>
							Allow optional analytics
						</Button>
					</div>
				</section>
			)}
			{storageError && (
				<p aria-live="polite" className="mt-2 text-sm">
					This browser cannot save your choice. It applies to this page only.
				</p>
			)}
		</div>
	);
}
