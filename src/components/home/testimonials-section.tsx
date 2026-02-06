"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { ScrollReveal } from "@/components/animation/scroll-reveal";

const testimonials = [
	{
		name: "Sarah Johnson",
		role: "Product Manager",
		company: "Tech Startup",
		content:
			"Tarun's ability to transform complex requirements into elegant solutions is remarkable. His attention to detail and commitment to quality exceeded our expectations.",
		rating: 5,
	},
	{
		name: "Michael Chen",
		role: "CTO",
		company: "Web3 Company",
		content:
			"Working with Tarun on OpenTribe was a game-changer. His deep understanding of modern web technologies and blockchain integration helped us launch ahead of schedule.",
		rating: 5,
	},
	{
		name: "Emily Davis",
		role: "Lead Developer",
		company: "EV Solutions",
		content:
			"Tarun's full-stack expertise and problem-solving skills made the Chargespot platform a reality. He's not just a developer, he's a true technology partner.",
		rating: 5,
	},
];

export function TestimonialsSection() {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % testimonials.length);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	const goToTestimonial = (index: number) => {
		setCurrentIndex(index);
	};

	const nextTestimonial = () => {
		setCurrentIndex((prev) => (prev + 1) % testimonials.length);
	};

	const prevTestimonial = () => {
		setCurrentIndex(
			(prev) => (prev - 1 + testimonials.length) % testimonials.length,
		);
	};

	return (
		<section className="py-20 relative overflow-hidden">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<ScrollReveal>
					<div className="mb-16 text-center">
						<h2 className="mb-4 text-3xl font-bold sm:text-4xl">
							What People Say
						</h2>
						<p className="mx-auto max-w-2xl text-muted-foreground">
							Collaborator insights and feedback from my professional journey
						</p>
					</div>
				</ScrollReveal>

				<div className="mx-auto max-w-4xl">
					<ScrollReveal delay={200}>
						<motion.div
							key={currentIndex}
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -20 }}
							transition={{ duration: 0.5 }}
							className="relative"
						>
							<div className="absolute -top-6 -left-6 text-primary/10">
								<Quote className="h-32 w-32" />
							</div>

							<div className="relative rounded-xl border border-border bg-card p-8 shadow-lg">
								<div className="mb-6 flex gap-1">
									{[...Array(testimonials[currentIndex].rating)].map((_, i) => (
										<Star
											key={i}
											className="h-5 w-5 fill-primary text-primary"
										/>
									))}
								</div>

								<p className="mb-8 text-lg italic text-muted-foreground">
									&quot;{testimonials[currentIndex].content}&quot;
								</p>

								<div className="flex items-center justify-between">
									<div>
										<h4 className="font-bold">
											{testimonials[currentIndex].name}
										</h4>
										<p className="text-sm text-muted-foreground">
											{testimonials[currentIndex].role} at{" "}
											{testimonials[currentIndex].company}
										</p>
									</div>

									<div className="flex gap-2">
										<button
											type="button"
											onClick={prevTestimonial}
											className="rounded-lg border border-border p-2 hover:bg-muted transition-colors"
											aria-label="Previous testimonial"
										>
											<svg
												className="h-5 w-5"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												aria-hidden="true"
											>
												<title>Previous</title>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M15 19l-7-7 7-7"
												/>
											</svg>
										</button>
										<button
											type="button"
											onClick={nextTestimonial}
											className="rounded-lg border border-border p-2 hover:bg-muted transition-colors"
											aria-label="Next testimonial"
										>
											<svg
												className="h-5 w-5"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												aria-hidden="true"
											>
												<title>Next</title>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M9 5l7 7-7 7"
												/>
											</svg>
										</button>
									</div>
								</div>
							</div>
						</motion.div>
					</ScrollReveal>

					<div className="mt-8 flex justify-center gap-2">
						{testimonials.map((_, idx) => (
							<button
								key={idx}
								type="button"
								onClick={() => goToTestimonial(idx)}
								className={`h-2 w-2 rounded-full transition-all ${
									currentIndex === idx
										? "w-8 bg-primary"
										: "w-2 bg-muted hover:bg-muted-foreground"
								}`}
								aria-label={`Go to testimonial ${idx + 1}`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
