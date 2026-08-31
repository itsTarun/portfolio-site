"use client";

import { useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface StatItem {
	id: number;
	label: string;
	value: number;
	suffix: string;
	icon?: React.ReactNode;
}

interface AnimatedCounterProps {
	items: StatItem[];
}

function Counter({
	value,
	duration = 0.8,
}: {
	value: number;
	duration?: number;
}) {
	const [count, setCount] = useState(0);
	const ref = useRef<HTMLSpanElement>(null);
	const isInView = useInView(ref, { once: true });
	const prefersReducedMotion = useReducedMotion();

	useEffect(() => {
		if (!isInView) return;

		if (prefersReducedMotion) {
			setCount(value);
			return;
		}

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
	}, [value, duration, isInView, prefersReducedMotion]);

	return (
		<span aria-hidden="true" ref={ref}>
			{count}
		</span>
	);
}

export function AnimatedCounter({ items }: AnimatedCounterProps) {
	return (
		<div className="grid grid-cols-2 gap-4">
			{items.map((item) => (
				<div
					key={item.id}
					className="border border-border bg-background px-3 py-3"
				>
					<div className="flex items-center justify-between gap-2">
						<div className="text-2xl font-semibold text-foreground">
							<span className="sr-only">
								{item.value}
								{item.suffix} {item.label}
							</span>
							<Counter value={item.value} />
							<span aria-hidden="true">{item.suffix}</span>
						</div>
						{item.icon && (
							<span className="flex h-8 w-8 items-center justify-center border border-border bg-muted text-foreground">
								{item.icon}
							</span>
						)}
					</div>
					<div className="mt-2 text-xs font-medium text-muted-foreground">
						{item.label}
					</div>
				</div>
			))}
		</div>
	);
}
