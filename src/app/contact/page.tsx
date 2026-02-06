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
		<div className="min-h-screen relative overflow-hidden">
			<div className="blob-bg absolute inset-0 -z-10">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
				<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
			</div>

			<div className="container max-w-7xl mx-auto px-4 py-16 md:py-20 lg:py-24 sm:px-6 lg:px-8 relative z-10">
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
							Feel free to reach out through any of these channels
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
							<Card className="border-2 shadow-xl bg-gradient-to-br from-primary/5 to-secondary/5">
								<CardHeader>
									<CardTitle className="text-2xl">Let&apos;s Connect</CardTitle>
									<CardDescription>
										I&apos;m always open to discussing new projects,
										opportunities, or just having a chat about technology.
									</CardDescription>
								</CardHeader>
								<CardContent>
									<a
										href="mailto:itstarun1994@gmail.com"
										className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105"
									>
										<Mail className="h-4 w-4" />
										Send me an email
									</a>
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
								<Card className="h-full transition-all hover:scale-105">
									<CardHeader>
										<div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg">
											<social.icon className="h-6 w-6" />
										</div>
										<CardTitle>{social.name}</CardTitle>
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
