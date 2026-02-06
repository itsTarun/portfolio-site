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
			className="grid grid-cols-2 gap-6 md:grid-cols-4"
		>
			{items.map((item, index) => (
				<motion.div
					key={item.id}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
					className="group relative"
				>
					<div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
					<div className="relative rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 text-center transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
						<div className="mb-3 flex justify-center text-primary">
							{item.icon}
						</div>
						<div className="text-3xl font-bold text-gradient mb-1">
							+
							<Counter value={item.value} />
							{item.suffix}
						</div>
						<div className="text-sm text-muted-foreground font-medium">
							{item.label}
						</div>
					</div>
				</motion.div>
			))}
		</motion.div>
	);
}
