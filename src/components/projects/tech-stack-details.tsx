"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface TechStackDetailsProps {
	technologies: string[];
	description?: string;
}

export function TechStackDetails({
	technologies,
	description,
}: TechStackDetailsProps) {
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
					className="mx-auto max-w-5xl"
				>
					<h2 className="mb-4 text-3xl font-bold">Tech Stack</h2>

					{description && (
						<p className="mb-8 text-lg text-muted-foreground">{description}</p>
					)}

					<div className="rounded-2xl border-2 border-border bg-muted/30 p-8">
						<div className="flex flex-wrap gap-3">
							{technologies.map((tech, index) => (
								<motion.div
									key={tech}
									initial={{ opacity: 0, scale: 0.9 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.3, delay: index * 0.05 }}
									whileHover={{ scale: 1.1 }}
									className="group"
								>
									<Badge
										variant="outline"
										className="group-hover:border-primary group-hover:bg-primary/5 transition-all border-2 text-base py-2"
									>
										{tech}
									</Badge>
								</motion.div>
							))}
						</div>
					</div>

					<div className="mt-8 grid gap-4 md:grid-cols-3">
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.3 }}
							className="rounded-xl border border-border bg-card p-6"
						>
							<h3 className="mb-2 text-lg font-semibold">Frontend</h3>
							<p className="text-sm text-muted-foreground">
								Modern, responsive interfaces using React and cutting-edge
								libraries
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.4 }}
							className="rounded-xl border border-border bg-card p-6"
						>
							<h3 className="mb-2 text-lg font-semibold">Backend</h3>
							<p className="text-sm text-muted-foreground">
								Scalable APIs and database architecture
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.5 }}
							className="rounded-xl border border-border bg-card p-6"
						>
							<h3 className="mb-2 text-lg font-semibold">Infrastructure</h3>
							<p className="text-sm text-muted-foreground">
								Cloud deployment with CI/CD pipelines
							</p>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</motion.section>
	);
}
