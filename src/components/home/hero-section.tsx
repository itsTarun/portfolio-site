"use client";

import { motion, type Variants } from "framer-motion";
import {
	ArrowRight,
	Code2,
	Github,
	Linkedin,
	Mail,
	Sparkles,
	Twitter,
} from "lucide-react";
import Link from "next/link";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Button } from "@/components/ui/button";

const socialLinks = [
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
];

const stats = [
	{
		id: 1,
		label: "Years Experience",
		value: 4,
		suffix: "+",
		icon: <Code2 className="h-6 w-6" />,
	},
	{
		id: 2,
		label: "Projects Completed",
		value: 15,
		suffix: "+",
		icon: <Sparkles className="h-6 w-6" />,
	},
	{
		id: 3,
		label: "Technologies",
		value: 12,
		suffix: "+",
		icon: <Code2 className="h-6 w-6" />,
	},
	{
		id: 4,
		label: "Happy Clients",
		value: 8,
		suffix: "",
		icon: <Sparkles className="h-6 w-6" />,
	},
];

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.2,
		},
	},
};

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: "easeOut",
		},
	},
};

const floatingVariants: Variants = {
	animate: {
		y: [0, -20, 0],
		transition: {
			duration: 3,
			repeat: Infinity,
			ease: "easeInOut",
		},
	},
};

export function HeroSection() {
	return (
		<section className="relative min-h-screen flex flex-col justify-center overflow-hidden gradient-fade-bottom">
			<div className="blob-bg absolute inset-0 -z-10">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
				<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
			</div>

			<div className="container max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 relative z-10">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="mx-auto max-w-5xl text-center"
				>
					<motion.div variants={itemVariants} className="mb-6">
						<motion.span
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5 }}
							className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
						>
							<span className="relative flex h-2 w-2">
								<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
								<span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
							</span>
							Available for freelance projects
						</motion.span>
					</motion.div>

					<motion.h1
						variants={itemVariants}
						className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
					>
						<motion.span
							variants={floatingVariants}
							animate="animate"
							className="block text-balance"
						>
							Hi, I&apos;m{" "}
							<span className="text-gradient animate-gradient bg-300%">
								Tarun
							</span>
						</motion.span>
						<motion.span
							variants={floatingVariants}
							animate="animate"
							style={{ animationDelay: "0.5s" }}
							className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground/90"
						>
							Full Stack Developer
						</motion.span>
					</motion.h1>

					<motion.p
						variants={itemVariants}
						className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed"
					>
						Building modern web applications with passion and precision.
						Specializing in React, Next.js, TypeScript, and creating exceptional
						user experiences that make a difference.
					</motion.p>

					<motion.div
						variants={itemVariants}
						className="mb-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
					>
						<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
							<Link href="/projects">
								<Button
									size="lg"
									className="gap-2 text-base px-8 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-shadow"
								>
									View My Work
									<ArrowRight className="h-4 w-4" />
								</Button>
							</Link>
						</motion.div>
						<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
							<Link href="/contact">
								<Button variant="outline" size="lg" className="text-base px-8">
									Get In Touch
								</Button>
							</Link>
						</motion.div>
					</motion.div>

					<motion.div variants={itemVariants} className="mb-16">
						<AnimatedCounter items={stats} />
					</motion.div>

					<motion.div
						variants={itemVariants}
						className="flex justify-center gap-4"
					>
						{socialLinks.map((social, index) => (
							<motion.div
								key={social.label}
								initial={{ opacity: 0, scale: 0 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{
									duration: 0.4,
									delay: 0.8 + index * 0.1,
									type: "spring",
									stiffness: 200,
									damping: 15,
								}}
								whileHover={{ scale: 1.1, y: -5 }}
								whileTap={{ scale: 0.95 }}
							>
								<a
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									className="relative group"
									aria-label={social.label}
								>
									<div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-0 blur-md transition-all duration-300 group-hover:opacity-50 group-hover:blur-lg" />
									<div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-muted/50 backdrop-blur-sm border border-border/50 text-muted-foreground transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
										<social.icon className="h-5 w-5" />
									</div>
								</a>
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.5, duration: 1 }}
				className="absolute bottom-8 left-1/2 -translate-x-1/2"
			>
				<motion.div
					animate={{ y: [0, 10, 0] }}
					transition={{ repeat: Infinity, duration: 2 }}
					className="flex flex-col items-center gap-2 text-muted-foreground"
				>
					<span className="text-xs uppercase tracking-widest">Scroll</span>
					<div className="h-8 w-5 rounded-full border-2 border-border flex justify-center pt-1">
						<motion.div
							animate={{ y: [0, 8, 0] }}
							transition={{ repeat: Infinity, duration: 1.5 }}
							className="h-1.5 w-1.5 rounded-full bg-primary"
						/>
					</div>
				</motion.div>
			</motion.div>
		</section>
	);
}
