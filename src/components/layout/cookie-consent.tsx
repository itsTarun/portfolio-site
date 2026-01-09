"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function CookieConsent() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const savedConsent = localStorage.getItem("analytics-consent") as
			| "not-set"
			| "accepted"
			| "rejected"
			| null;

		if (savedConsent === "accepted" || savedConsent === "rejected") {
			setIsVisible(false);
		} else {
			setIsVisible(true);
		}
	}, []);

	if (!isVisible) {
		return null;
	}

	const handleAccept = () => {
		localStorage.setItem("analytics-consent", "accepted");
		setIsVisible(false);

		if (process.env.NODE_ENV === "production") {
			window.location.reload();
		}
	};

	const handleReject = () => {
		localStorage.setItem("analytics-consent", "rejected");
		setIsVisible(false);
	};

	return (
		<div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container mx-auto max-w-7xl px-4 py-4 md:py-6">
				<div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
					<div className="flex-1">
						<h3 className="mb-2 font-semibold">Cookie & Analytics Consent</h3>
						<p className="mb-3 text-sm text-muted-foreground">
							We use cookies and analytics tools (Google Analytics, Google Tag
							Manager, Microsoft Clarity) to improve your experience. You can
							accept all, reject all, or customize your preferences.
						</p>
						<div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
							<a
								href="/privacy"
								className="text-primary underline-offset-4 hover:underline"
							>
								Privacy Policy
							</a>
							<span>•</span>
							<button
								type="button"
								onClick={() => {
									localStorage.removeItem("analytics-consent");
									window.location.reload();
								}}
								className="text-primary underline-offset-4 hover:underline"
							>
								Manage Preferences
							</button>
						</div>
					</div>
					<div className="flex flex-col gap-2 md:flex-row">
						<Button
							variant="outline"
							onClick={handleReject}
							className="text-sm"
						>
							Reject All
						</Button>
						<Button onClick={handleAccept} className="text-sm">
							Accept All
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
