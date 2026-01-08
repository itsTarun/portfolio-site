"use client";

import { motion } from "framer-motion";
import { CheckCircle, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

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
	const Icon = icon;

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
					className="mb-8 text-center"
				>
					<div className="mb-6 flex justify-center">
						{Icon && (
							<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg">
								<Icon className="h-8 w-8" />
							</div>
						)}
					</div>
					<h2 className="mb-4 text-3xl font-bold">{title}</h2>
					<p className="mx-auto max-w-2xl text-lg text-muted-foreground">
						{description}
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 }}
					className="mb-12 rounded-2xl border-2 border-border bg-muted/30 p-8"
				>
					<h3 className="mb-6 text-xl font-bold">Key Features</h3>
					<div className="grid gap-4 md:grid-cols-2">
						{features.map((feature, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="flex items-start gap-4"
							>
								<div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 mt-1">
									<CheckCircle className="h-5 w-5 text-primary" />
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
					className="rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 p-8 text-center"
				>
					<div className="flex flex-col items-center gap-4">
						<Zap className="h-12 w-12 text-primary" />
						<div>
							<h3 className="mb-2 text-xl font-semibold">Ready to explore?</h3>
							<p className="text-sm text-muted-foreground">
								Dive deep into the technical details, architecture, and
								implementation.
							</p>
						</div>
					</div>
				</motion.div>
			</div>
		</motion.section>
	);
}
