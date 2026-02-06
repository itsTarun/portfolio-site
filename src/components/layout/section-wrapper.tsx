"use client";

import type * as React from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
	children: React.ReactNode;
	className?: string;
	hasBackground?: boolean;
	gradientFade?: "top" | "bottom" | "both" | "none";
	id?: string;
}

export function SectionWrapper({
	children,
	className,
	hasBackground = true,
	gradientFade = "none",
	id,
}: SectionWrapperProps) {
	return (
		<section
			id={id}
			className={cn(
				"relative overflow-hidden",
				gradientFade === "bottom" && "gradient-fade-bottom",
				gradientFade === "top" && "gradient-fade-top",
				gradientFade === "both" && "gradient-fade-bottom gradient-fade-top",
				className,
			)}
		>
			{hasBackground && (
				<div className="absolute inset-0 -z-10 blob-bg">
					<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
					<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
				</div>
			)}

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24 relative z-10 content-above">
				{children}
			</div>
		</section>
	);
}
