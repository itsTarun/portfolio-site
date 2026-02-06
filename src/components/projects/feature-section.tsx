"use client";

import { motion } from "framer-motion";
import { CheckCircle, Zap } from "lucide-react";
import * as React from "react";

interface FeatureSectionProps {
	title: string;
	description: string;
	features: string[];
	icon?: React.ComponentType<{ className?: string }>;
}

export function FeatureSection({
	title,
	description,
	features,
	icon,
}: FeatureSectionProps) {
	return (
		<motion.section
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			className="py-16"
		>
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
					className="mb-8"
				>
					<div className="mb-4 flex items-center gap-3">
						{icon && (
							<div className="flex h-10 w-10 items-center justify-center rounded-full border border-border">
								{React.createElement(icon, { className: "h-5 w-5" })}
							</div>
						)}
						<p className="eyebrow">Focus</p>
					</div>
					<h2 className="mb-3 text-3xl font-semibold">{title}</h2>
					<p className="max-w-2xl text-lg text-muted-foreground">
						{description}
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 }}
					className="mb-12 rounded-lg border border-border bg-card p-8"
				>
					<h3 className="mb-6 text-xl font-semibold">Key Features</h3>
					<div className="grid gap-4 md:grid-cols-2">
						{features.map((feature, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="flex items-start gap-4"
							>
								<div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-border mt-1">
									<CheckCircle className="h-4 w-4" />
								</div>
								<span className="text-muted-foreground">{feature}</span>
							</motion.div>
						))}
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4 }}
					className="rounded-lg border border-border bg-card p-8 text-center"
				>
					<div className="flex flex-col items-center gap-4">
						<Zap className="h-10 w-10" />
						<div>
							<h3 className="mb-2 text-xl font-semibold">Ready to explore?</h3>
							<p className="text-sm text-muted-foreground">
								Dive deep into technical details, architecture, and
								implementation.
							</p>
						</div>
					</div>
				</motion.div>
			</div>
		</motion.section>
	);
}
