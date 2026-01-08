"use client";

import { motion } from "framer-motion";
import {
	ArrowRight,
	Code2,
	Database,
	Github,
	Globe,
	Linkedin,
	Mail,
	Sparkles,
	Twitter,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const fadeInUp = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.5 },
};

const staggerContainer = {
	animate: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

export default function Home() {
	return (
		<div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/50">
			<div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="mx-auto max-w-5xl"
				>
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5 }}
						className="mb-12 flex justify-center"
					>
						<div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-6 py-2 text-sm font-semibold text-primary">
							<Sparkles className="h-4 w-4" />
							<span>Welcome to my portfolio</span>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 }}
						className="mb-8 text-center"
					>
						<h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
							<motion.span
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2 }}
								className="block"
							>
								Hi, I&apos;m{" "}
								<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
									Tarun
								</span>
							</motion.span>
							<motion.span
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.3 }}
								className="block"
							>
								Full Stack Developer
							</motion.span>
						</h1>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4 }}
							className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl"
						>
							Full Stack Developer building modern web applications. For past
							3-4 years, I&apos;ve been focused on three major projects:{" "}
							<span className="font-semibold text-foreground">Chargespot</span>,{" "}
							<span className="font-semibold text-foreground">OpenTribe</span>,
							and{" "}
							<span className="font-semibold text-foreground">
								Domain Collective
							</span>
							.
						</motion.p>
					</motion.div>

					<motion.div
						variants={staggerContainer}
						initial="initial"
						animate="animate"
						className="mb-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
					>
						<motion.div variants={fadeInUp}>
							<Link href="/projects">
								<Button size="lg" className="gap-2">
									View My Work
									<ArrowRight className="h-4 w-4" />
								</Button>
							</Link>
						</motion.div>
						<motion.div variants={fadeInUp}>
							<Link href="/contact">
								<Button variant="outline" size="lg">
									Get In Touch
								</Button>
							</Link>
						</motion.div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5 }}
						className="mb-16 flex justify-center gap-6"
					>
						{[
							{
								icon: Github,
								href: "https://github.com/itsTarun",
								label: "GitHub",
							},
							{
								icon: Linkedin,
								href: "https://www.linkedin.com/in/iamtarun/",
								label: "LinkedIn",
							},
							{
								icon: Twitter,
								href: "https://x.com/itstarun1381995",
								label: "Twitter/X",
							},
							{
								icon: Mail,
								href: "mailto:itstarun1994@gmail.com",
								label: "Email",
							},
						].map((social) => (
							<motion.a
								key={social.label}
								href={social.href}
								target="_blank"
								rel="noopener noreferrer"
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.95 }}
								className="rounded-full bg-muted p-3 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
								aria-label={social.label}
							>
								<social.icon className="h-6 w-6" />
							</motion.a>
						))}
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6 }}
						className="grid gap-6 md:grid-cols-3"
					>
						{[
							{
								icon: Database,
								title: "Chargespot",
								description:
									"EV Charging Platform - Flutter, Google Maps, Razorpay",
								gradient: "from-blue-500 to-blue-600",
							},
							{
								icon: Globe,
								title: "OpenTribe",
								description:
									"Polkadot Talent Marketplace - Next.js 15, React 19",
								gradient: "from-purple-500 to-purple-600",
							},
							{
								icon: Code2,
								title: "Domain Collective",
								description:
									"Multi-Registrar Platform - Next.js 15, PostgreSQL",
								gradient: "from-pink-500 to-pink-600",
							},
						].map((card) => (
							<motion.div
								key={card.title}
								variants={fadeInUp}
								whileHover={{ y: -8 }}
								transition={{ duration: 0.2 }}
								className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 text-card-foreground shadow-lg"
							>
								<div
									className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 transition-opacity group-hover:opacity-5`}
								/>
								<div className="relative">
									<div
										className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${card.gradient} text-white shadow-lg`}
									>
										<card.icon className="h-7 w-7" />
									</div>
									<h3 className="mb-2 text-xl font-bold">{card.title}</h3>
									<p className="text-muted-foreground">{card.description}</p>
								</div>
							</motion.div>
						))}
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.7 }}
						className="rounded-xl border border-border bg-gradient-to-br from-card to-muted/30 p-8 text-center shadow-lg"
					>
						<h2 className="mb-4 text-2xl font-bold">Ready to collaborate?</h2>
						<p className="mb-6 text-muted-foreground">
							I&apos;m currently available for freelance projects and full-time
							opportunities. Let&apos;s build something amazing together!
						</p>
						<Link href="/contact">
							<Button size="lg" className="w-full gap-2 sm:w-auto">
								<Mail className="h-4 w-4" />
								Start a Conversation
							</Button>
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}
