"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
	children: React.ReactNode;
	delay?: number;
	threshold?: number;
	className?: string;
}

export function ScrollReveal({
	children,
	delay = 0,
	threshold = 0.1,
	className = "",
}: ScrollRevealProps) {
	// Default: no style (content visible). Applied only after JS confirms
	// motion is OK and the element is genuinely off-screen.
	const [style, setStyle] = useState<React.CSSProperties>({});
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

		// Reduced-motion users: leave style empty (content stays visible).
		if (mediaQuery.matches) return;

		const element = ref.current;
		if (!element) return;

		// Elements already in the viewport on mount skip the entrance.
		// This covers above-fold content, back-navigation, and hash links.
		const rect = element.getBoundingClientRect();
		if (rect.top < window.innerHeight) return;

		// Element is off-screen — safe to start hidden (user can't see it yet).
		setStyle({
			opacity: 0,
			transform: "translateY(30px)",
			transition: `opacity 0.8s ease-out ${delay}ms, transform 0.8s ease-out ${delay}ms`,
		});

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setStyle({
						opacity: 1,
						transform: "translateY(0)",
						transition: `opacity 0.8s ease-out ${delay}ms, transform 0.8s ease-out ${delay}ms`,
					});
					observer.unobserve(entry.target);
				}
			},
			{ threshold },
		);

		observer.observe(element);

		const handler = (e: MediaQueryListEvent) => {
			if (e.matches) {
				// User enables reduced motion mid-session: reveal immediately.
				setStyle({});
				observer.disconnect();
			}
		};
		mediaQuery.addEventListener("change", handler);

		return () => {
			observer.disconnect();
			mediaQuery.removeEventListener("change", handler);
		};
	}, [delay, threshold]);

	return (
		<div ref={ref} className={className} style={style}>
			{children}
		</div>
	);
}
