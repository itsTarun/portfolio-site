"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedBackgroundProps {
	children: React.ReactNode;
	className?: string;
}

function FloatingBlob({
	x,
	y,
	size,
	delay,
	duration,
	color,
}: {
	x: number;
	y: number;
	size: number;
	delay: number;
	duration: number;
	color: string;
}) {
	const xMotion = useMotionValue(x);
	const yMotion = useMotionValue(y);

	const springConfig = { stiffness: 30, damping: 20 };
	const xSpring = useSpring(xMotion, springConfig);
	const ySpring = useSpring(yMotion, springConfig);

	const xRange = useTransform(xSpring, [0, 100], [-20, 20]);
	const yRange = useTransform(ySpring, [0, 100], [-20, 20]);

	useEffect(() => {
		const animate = () => {
			const randomX = Math.random() * 100;
			const randomY = Math.random() * 100;
			xMotion.set(randomX);
			yMotion.set(randomY);
		};

		const interval = setInterval(animate, duration * 1000);
		animate();

		return () => clearInterval(interval);
	}, [xMotion, yMotion, duration]);

	return (
		<motion.div
			style={{
				left: `${xRange}%`,
				top: `${yRange}%`,
			}}
			initial={{ opacity: 0, scale: 0 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ delay, duration: 1 }}
			className="absolute pointer-events-none"
		>
			<div
				className={`rounded-full blur-3xl ${color}`}
				style={{ width: size, height: size }}
			/>
		</motion.div>
	);
}

export function AnimatedBackground({
	children,
	className = "",
}: AnimatedBackgroundProps) {
	const containerRef = useRef<HTMLDivElement>(null);

	return (
		<div ref={containerRef} className={`relative overflow-hidden ${className}`}>
			<div className="absolute inset-0 -z-10">
				<FloatingBlob
					x={10}
					y={20}
					size={400}
					delay={0}
					duration={20}
					color="bg-primary/20"
				/>
				<FloatingBlob
					x={80}
					y={15}
					size={500}
					delay={2}
					duration={25}
					color="bg-secondary/20"
				/>
				<FloatingBlob
					x={50}
					y={70}
					size={450}
					delay={4}
					duration={22}
					color="bg-primary/15"
				/>
				<FloatingBlob
					x={20}
					y={80}
					size={350}
					delay={1}
					duration={18}
					color="bg-secondary/15"
				/>
				<FloatingBlob
					x={70}
					y={50}
					size={300}
					delay={3}
					duration={24}
					color="bg-primary/10"
				/>
			</div>
			{children}
		</div>
	);
}
