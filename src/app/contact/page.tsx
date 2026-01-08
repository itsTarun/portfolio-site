"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import {
	AlertCircle,
	CheckCircle,
	Github,
	Linkedin,
	Mail,
	Send,
	Twitter,
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { z } from "zod";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { Textarea } from "@/components/ui/textarea";
import { contactFormSchema } from "@/lib/validation";

type ContactFormData = z.infer<typeof contactFormSchema>;

const fadeInUp = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.5 },
};

const containerVariants = {
	animate: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const socialLinks = [
	{
		name: "GitHub",
		href: "https://github.com/itsTarun",
		icon: Github,
	},
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/in/iamtarun/",
		icon: Linkedin,
	},
	{
		name: "Twitter",
		href: "https://x.com/itstarun1381995",
		icon: Twitter,
	},
];

export default function ContactPage() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<
		"idle" | "success" | "error"
	>("idle");

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ContactFormData>({
		resolver: zodResolver(contactFormSchema),
	});

	const onSubmit = async (data: ContactFormData) => {
		setIsSubmitting(true);
		setSubmitStatus("idle");

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (response.ok) {
				setSubmitStatus("success");
				reset();
			} else {
				setSubmitStatus("error");
			}
		} catch (error) {
			setSubmitStatus("error");
			console.error("Error submitting form:", error);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/50">
			<div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="mx-auto max-w-4xl"
				>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="mb-12 text-center"
					>
						<h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
							Get In Touch
						</h1>
						<p className="text-lg text-muted-foreground">
							Have a question or want to work together? Send me a message!
						</p>
					</motion.div>

					<div className="grid gap-8 lg:grid-cols-2">
						<motion.div
							variants={containerVariants}
							initial="initial"
							animate="animate"
						>
							<Card className="border-2 shadow-2xl">
								<CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5">
									<CardTitle className="text-2xl">Send a Message</CardTitle>
									<CardDescription>
										Fill out form below and I&apos;ll get back to you as soon as
										possible.
									</CardDescription>
								</CardHeader>
								<CardContent className="pt-6">
									<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
										<div>
											<label
												htmlFor="name"
												className="mb-2 block text-sm font-medium"
											>
												Name
											</label>
											<Input
												id="name"
												placeholder="Your name"
												{...register("name")}
												className={errors.name ? "border-destructive" : ""}
											/>
											{errors.name && (
												<p className="mt-1 text-sm text-destructive">
													{errors.name.message}
												</p>
											)}
										</div>

										<div>
											<label
												htmlFor="email"
												className="mb-2 block text-sm font-medium"
											>
												Email
											</label>
											<Input
												id="email"
												type="email"
												placeholder="your.email@example.com"
												{...register("email")}
												className={errors.email ? "border-destructive" : ""}
											/>
											{errors.email && (
												<p className="mt-1 text-sm text-destructive">
													{errors.email.message}
												</p>
											)}
										</div>

										<div>
											<label
												htmlFor="subject"
												className="mb-2 block text-sm font-medium"
											>
												Subject
											</label>
											<Input
												id="subject"
												placeholder="What is this about?"
												{...register("subject")}
												className={errors.subject ? "border-destructive" : ""}
											/>
											{errors.subject && (
												<p className="mt-1 text-sm text-destructive">
													{errors.subject.message}
												</p>
											)}
										</div>

										<div>
											<label
												htmlFor="message"
												className="mb-2 block text-sm font-medium"
											>
												Message
											</label>
											<Textarea
												id="message"
												placeholder="Your message..."
												rows={6}
												{...register("message")}
												className={errors.message ? "border-destructive" : ""}
											/>
											{errors.message && (
												<p className="mt-1 text-sm text-destructive">
													{errors.message.message}
												</p>
											)}
										</div>

										{submitStatus === "success" && (
											<motion.div
												initial={{ opacity: 0, y: -10 }}
												animate={{ opacity: 1, y: 0 }}
												className="rounded-lg bg-green-50 p-4 text-green-900 dark:bg-green-900/20 dark:text-green-300 border border-green-200"
											>
												<div className="flex items-center gap-2">
													<CheckCircle className="h-5 w-5" />
													<span>
														Message sent successfully! I&apos;ll get back to you
														soon.
													</span>
												</div>
											</motion.div>
										)}

										{submitStatus === "error" && (
											<motion.div
												initial={{ opacity: 0, y: -10 }}
												animate={{ opacity: 1, y: 0 }}
												className="rounded-lg bg-red-50 p-4 text-red-900 dark:bg-red-900/20 dark:text-red-300 border border-red-200"
											>
												<div className="flex items-center gap-2">
													<AlertCircle className="h-5 w-5" />
													<span>
														Something went wrong. Please try again or email me
														directly.
													</span>
												</div>
											</motion.div>
										)}

										<Button
											type="submit"
											className="w-full gap-2"
											disabled={isSubmitting}
										>
											{isSubmitting ? (
												<LoadingSpinner size="sm" />
											) : (
												<>
													<Send className="h-4 w-4" />
													Send Message
												</>
											)}
										</Button>
									</form>
								</CardContent>
							</Card>
						</motion.div>

						<motion.div
							variants={fadeInUp}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4 }}
							className="space-y-6"
						>
							<Card className="shadow-lg">
								<CardHeader>
									<CardTitle>Contact Information</CardTitle>
									<CardDescription>
										Feel free to reach out through any of these channels.
									</CardDescription>
								</CardHeader>
								<CardContent className="space-y-4">
									<a
										href="mailto:itstarun1994@gmail.com"
										className="flex items-center gap-3 rounded-lg p-3 transition-all hover:bg-muted hover:scale-105"
									>
										<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
											<Mail className="h-5 w-5 text-primary" />
										</div>
										<div>
											<p className="text-sm font-medium">Email</p>
											<p className="text-sm text-muted-foreground">
												itstarun1994@gmail.com
											</p>
										</div>
									</a>

									<div className="space-y-3">
										<p className="text-sm font-medium">Social Media</p>
										<div className="space-y-2">
											{socialLinks.map((social) => (
												<a
													key={social.name}
													href={social.href}
													target="_blank"
													rel="noopener noreferrer"
													className="flex items-center gap-3 rounded-lg p-3 transition-all hover:bg-muted hover:scale-105"
												>
													<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
														<social.icon className="h-5 w-5 text-primary" />
													</div>
													<span className="text-sm">{social.name}</span>
												</a>
											))}
										</div>
									</div>
								</CardContent>
							</Card>

							<Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
								<CardHeader>
									<CardTitle>Response Time</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-sm text-muted-foreground">
										I typically respond to emails within 24-48 hours on business
										days. For urgent matters, please include
										&quot;[URGENT]&quot; in subject line.
									</p>
								</CardContent>
							</Card>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
