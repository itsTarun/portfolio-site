"use client";

import { motion } from "framer-motion";

interface TypingTextProps {
	texts: string[];
	className?: string;
}

export function TypingText({ texts, className = "" }: TypingTextProps) {
	const textVariants = {
		hidden: {
			opacity: 0,
			y: 20,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
			},
		},
		exit: {
			opacity: 0,
			y: -20,
			transition: {
				duration: 0.3,
			},
		},
	};

	return (
		<motion.div className={`inline-block ${className}`}>
			<motion.div
				variants={textVariants}
				initial="hidden"
				animate="visible"
				exit="exit"
				key={texts[0]}
			>
				{texts.join(", ")}
			</motion.div>
			<motion.span
				className="inline-block ml-1"
				animate={{
					opacity: [1, 0],
				}}
				transition={{
					duration: 0.8,
					repeat: Infinity,
					repeatDelay: 0.2,
				}}
			>
				|
			</motion.span>
		</motion.div>
	);
}
