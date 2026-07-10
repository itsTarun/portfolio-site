"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function ScrollProgress() {
	const [scrollProgress, setScrollProgress] = useState(0);
	const [isVisible, setIsVisible] = useState(false);
	const tickingRef = useRef(false);

	useEffect(() => {
		const handleScroll = () => {
			if (tickingRef.current) return;
			tickingRef.current = true;

			requestAnimationFrame(() => {
				const totalHeight =
					document.documentElement.scrollHeight - window.innerHeight;
				const progress =
					totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
				const clamped = Math.min(100, Math.max(0, progress));
				setScrollProgress(clamped);
				setIsVisible(clamped > 5 && clamped < 95);
				tickingRef.current = false;
			});
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					initial={{ opacity: 0, scaleX: 0.9, scaleY: 0.9 }}
					animate={{ opacity: 1, scaleX: 1, scaleY: 1 }}
					exit={{ opacity: 0, scaleX: 0.9, scaleY: 0.9 }}
					className="fixed top-0 left-0 right-0 z-50 px-4 py-2"
				>
					<div
						role="progressbar"
						aria-label="Page scroll progress"
						aria-valuenow={Math.round(scrollProgress)}
						aria-valuemin={0}
						aria-valuemax={100}
						className="mx-auto max-w-4xl border-2 border-border bg-background neo-shadow-sm"
					>
						<div className="h-2 bg-muted">
							<motion.div
								className="h-full bg-primary transition-colors"
								style={{ width: `${scrollProgress}%` }}
								initial={false}
								animate={{ width: `${scrollProgress}%` }}
							/>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
