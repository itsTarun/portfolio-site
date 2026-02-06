"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

const fadeInUp = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.5 },
};

const socialLinks = [
	{
		name: "Email",
		href: "mailto:itstarun1994@gmail.com",
		icon: Mail,
		description: "itstarun1994@gmail.com",
	},
	{
		name: "GitHub",
		href: "https://github.com/itsTarun",
		icon: Github,
		description: "github.com/itsTarun",
	},
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/in/iamtarun/",
		icon: Linkedin,
		description: "linkedin.com/in/iamtarun",
	},
	{
		name: "Twitter",
		href: "https://x.com/itstarun1381995",
		icon: Twitter,
		description: "x.com/itstarun1381995",
	},
];

export default function ContactPage() {
	return (
		<div className="min-h-screen">
			<div className="container max-w-6xl mx-auto px-4 py-16 md:py-20 lg:py-24 sm:px-6 lg:px-8">
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
						className="mb-12"
					>
						<p className="eyebrow mb-3">Contact</p>
						<h1 className="section-title">Let&apos;s start a conversation.</h1>
						<p className="section-subtitle mt-4">
							I&apos;m always open to new projects, collaborations, or product
							consulting.
						</p>
					</motion.div>

					<div className="grid gap-6 md:grid-cols-2">
						<motion.div
							variants={fadeInUp}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3 }}
							className="md:col-span-2"
						>
							<Card className="border border-border bg-card">
								<CardHeader>
									<CardTitle className="text-2xl font-semibold">
										Let&apos;s Connect
									</CardTitle>
									<CardDescription>
										I&apos;m always open to discussing new projects,
										opportunities, or just having a chat about technology.
									</CardDescription>
								</CardHeader>
								<CardContent>
									<Button asChild size="lg">
										<a href="mailto:itstarun1994@gmail.com">
											<Mail className="h-4 w-4" />
											Send me an email
										</a>
									</Button>
								</CardContent>
							</Card>
						</motion.div>

						{socialLinks.map((social, index) => (
							<motion.div
								key={social.name}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.4 + index * 0.1 }}
							>
								<Card className="h-full">
									<CardHeader>
										<div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full border border-border">
											<social.icon className="h-5 w-5" />
										</div>
										<CardTitle className="text-lg font-semibold">
											{social.name}
										</CardTitle>
										<CardDescription>{social.description}</CardDescription>
									</CardHeader>
									<CardContent>
										<Button asChild variant="outline" className="w-full">
											<a
												href={social.href}
												target="_blank"
												rel="noopener noreferrer"
											>
												Connect
											</a>
										</Button>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	);
}
