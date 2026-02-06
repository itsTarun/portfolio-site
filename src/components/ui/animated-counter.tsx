"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface StatItem {
	id: number;
	label: string;
	value: number;
	suffix: string;
	icon: React.ReactNode;
}

interface AnimatedCounterProps {
	items: StatItem[];
}

function Counter({
	value,
	duration = 2,
}: {
	value: number;
	duration?: number;
}) {
	const [count, setCount] = useState(0);
	const ref = useRef<HTMLSpanElement>(null);
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		if (!isInView) return;

		let startTime: number;
		let animationFrame: number;

		const animate = (currentTime: number) => {
			if (!startTime) startTime = currentTime;
			const elapsed = (currentTime - startTime) / 1000;
			const progress = Math.min(elapsed / duration, 1);
			const easeOut = 1 - (1 - progress) ** 3;
			const currentCount = Math.floor(value * easeOut);

			setCount(currentCount);

			if (progress < 1) {
				animationFrame = requestAnimationFrame(animate);
			}
		};

		animationFrame = requestAnimationFrame(animate);

		return () => {
			if (animationFrame) {
				cancelAnimationFrame(animationFrame);
			}
		};
	}, [value, duration, isInView]);

	return <span ref={ref}>{count}</span>;
}

export function AnimatedCounter({ items }: AnimatedCounterProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: 0.4 }}
			className="grid grid-cols-2 gap-4"
		>
			{items.map((item, index) => (
				<motion.div
					key={item.id}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
					className="border-2 border-border bg-background px-3 py-3"
				>
					<div className="flex items-center justify-between gap-2">
						<div className="text-2xl font-semibold text-foreground">
							<Counter value={item.value} />
							{item.suffix}
						</div>
						<span className="flex h-8 w-8 items-center justify-center border-2 border-border bg-muted text-foreground">
							{item.icon}
						</span>
					</div>
					<div className="mt-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
						{item.label}
					</div>
				</motion.div>
			))}
		</motion.div>
	);
}
