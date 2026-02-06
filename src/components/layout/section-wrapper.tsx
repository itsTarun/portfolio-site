"use client";

import type * as React from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
	children: React.ReactNode;
	className?: string;
	hasBackground?: boolean;
	id?: string;
}

export function SectionWrapper({
	children,
	className,
	hasBackground = true,
	id,
}: SectionWrapperProps) {
	return (
		<section
			id={id}
			className={cn(
				"relative",
				hasBackground && "bg-muted/30",
				className,
			)}
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
				{children}
			</div>
		</section>
	);
}
