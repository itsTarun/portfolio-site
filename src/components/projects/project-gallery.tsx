"use client";

/* eslint-disable @next/next/no-img-element */

import { AnimatePresence, motion } from "framer-motion";
import { Expand, ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Screenshot {
	url: string;
	alt: string;
	caption?: string;
}

interface ProjectGalleryProps {
	screenshots: Screenshot[];
	liveUrl?: string;
	githubUrl?: string;
}

export function ProjectGallery({
	screenshots,
	liveUrl,
	githubUrl,
}: ProjectGalleryProps) {
	const [selectedImage, setSelectedImage] = useState<Screenshot | null>(null);

	return (
		<>
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
						className="mx-auto max-w-7xl"
					>
						<h2 className="mb-8 text-2xl font-semibold">Project Gallery</h2>

						<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
							{screenshots.map((screenshot, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, scale: 0.9 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									whileHover={{ y: -8 }}
									className="group cursor-pointer"
									onClick={() => setSelectedImage(screenshot)}
								>
									<div className="overflow-hidden rounded-lg border border-border bg-card transition-all group-hover:border-foreground/40">
										<div className="relative aspect-video bg-muted">
											<img
												src={screenshot.url}
												alt={screenshot.alt}
												className="h-full w-full object-cover transition-transform group-hover:scale-105"
											/>
											<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
												<Expand className="h-10 w-10 text-white" />
											</div>
										</div>

										{screenshot.caption && (
											<div className="p-4">
												<p className="text-sm text-muted-foreground">
													{screenshot.caption}
												</p>
											</div>
										)}
									</div>
								</motion.div>
							))}
						</div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4 }}
							className="mt-12 flex flex-wrap gap-4 justify-center"
						>
							{liveUrl && (
								<Button asChild size="lg" className="gap-2">
									<a href={liveUrl} target="_blank" rel="noopener noreferrer">
										<ExternalLink className="h-4 w-4" />
										<span className="hidden sm:inline">View Live Demo</span>
										<span className="sm:hidden">Live</span>
									</a>
								</Button>
							)}

							{githubUrl && (
								<Button asChild variant="outline" size="lg" className="gap-2">
									<a href={githubUrl} target="_blank" rel="noopener noreferrer">
										<Github className="h-4 w-4" />
										<span className="hidden sm:inline">View Source Code</span>
										<span className="sm:hidden">Source</span>
									</a>
								</Button>
							)}
						</motion.div>
					</motion.div>
				</div>
			</motion.section>

			<AnimatePresence>
				{selectedImage && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
						onClick={() => setSelectedImage(null)}
					>
						<motion.div
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl"
							onClick={(e) => e.stopPropagation()}
						>
							<Button
								className="absolute top-4 right-4 z-10"
								onClick={() => setSelectedImage(null)}
								aria-label="Close lightbox"
							>
								✕
							</Button>

							<img
								src={selectedImage.url}
								alt={selectedImage.alt}
								className="max-h-[85vh] w-auto object-contain"
							/>

							{selectedImage.caption && (
								<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
									<p className="text-sm text-white">{selectedImage.caption}</p>
								</div>
							)}
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
