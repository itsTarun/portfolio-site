"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ScrollProgress() {
	const [scrollProgress, setScrollProgress] = useState(0);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const totalHeight =
				document.documentElement.scrollHeight - window.innerHeight;
			const progress = (window.scrollY / totalHeight) * 100;
			setScrollProgress(Math.min(100, Math.max(0, progress)));
			setIsVisible(progress > 5 && progress < 95);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					initial={{ opacity: 0, scaleX: 0.9, scaleY: 0.9 }}
					animate={{ opacity: 1, scaleX: 1, scaleY: 1 }}
					exit={{ opacity: 0, scaleX: 0.9, scaleY: 0.9 }}
					className="fixed top-0 left-0 right-0 z-50 p-1"
				>
					<div className="mx-auto max-w-4xl">
						<div className="overflow-hidden rounded-full bg-muted h-1.5 shadow-lg">
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
