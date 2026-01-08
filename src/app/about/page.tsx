"use client";

import { motion } from "framer-motion";
import {
	Calendar,
	Code2,
	GraduationCap,
	Mail,
	MapPin,
	Rocket,
	Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

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

const skills = [
	{
		category: "Frontend",
		items: [
			"React",
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"Framer Motion",
			"HTML/CSS",
		],
		icon: Code2,
	},
	{
		category: "Backend",
		items: [
			"Node.js",
			"Express",
			"PostgreSQL",
			"MongoDB",
			"REST APIs",
			"GraphQL",
		],
		icon: Rocket,
	},
	{
		category: "Tools & Others",
		items: ["Git", "Docker", "AWS", "Vercel", "Figma", "Jest"],
		icon: Sparkles,
	},
];

const experience = [
	{
		id: 1,
		title: "Full Stack Developer",
		company: "Tech Company",
		location: "Remote",
		period: "2023 - Present",
		description: [
			"Developed and maintained web applications using Next.js and React",
			"Implemented RESTful APIs and integrated with third-party services",
			"Optimized application performance and improved page load times",
		],
		technologies: ["React", "Next.js", "TypeScript", "PostgreSQL", "AWS"],
	},
	{
		id: 2,
		title: "Frontend Developer",
		company: "Digital Agency",
		location: "New York",
		period: "2021 - 2023",
		description: [
			"Built responsive and accessible user interfaces",
			"Collaborated with designers to implement pixel-perfect designs",
			"Created reusable component libraries",
		],
		technologies: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
	},
];

const education = [
	{
		id: 1,
		degree: "Bachelor of Science in Computer Science",
		school: "University",
		period: "2017 - 2021",
		description:
			"Focus on software engineering, algorithms, and web development",
	},
];

export default function AboutPage() {
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
							About Me
						</h1>
						<p className="text-lg text-muted-foreground">
							Passionate Full Stack Developer creating modern web experiences
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}
						className="mb-12 rounded-2xl border border-border bg-gradient-to-br from-card to-muted/30 p-8 text-card-foreground shadow-lg"
					>
						<p className="mb-4 text-lg leading-relaxed">
							I&apos;m a Full Stack Developer with a passion for building
							modern, scalable web applications. With expertise in both frontend
							and backend technologies, I create seamless user experiences and
							robust solutions.
						</p>
						<p className="text-lg leading-relaxed text-muted-foreground">
							I love solving complex problems and turning ideas into reality.
							When I&apos;m not coding, you can find me exploring new
							technologies, contributing to open-source projects, or sharing
							knowledge with developer community.
						</p>
					</motion.div>

					<motion.div
						variants={containerVariants}
						initial="initial"
						animate="animate"
						className="mb-12"
					>
						<motion.h2 variants={fadeInUp} className="mb-6 text-2xl font-bold">
							Skills & Expertise
						</motion.h2>
						<div className="grid gap-6 md:grid-cols-3">
							{skills.map((skillGroup) => (
								<motion.div
									key={skillGroup.category}
									variants={fadeInUp}
									whileHover={{ y: -8 }}
									transition={{ duration: 0.2 }}
									className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 text-card-foreground shadow-lg"
								>
									<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 transition-opacity group-hover:opacity-100" />
									<div className="relative">
										<div className="mb-4 flex items-center gap-3">
											<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg">
												<skillGroup.icon className="h-6 w-6" />
											</div>
											<h3 className="text-xl font-semibold">
												{skillGroup.category}
											</h3>
										</div>
										<div className="flex flex-wrap gap-2">
											{skillGroup.items.map((skill) => (
												<Badge
													key={skill}
													variant="secondary"
													className="text-sm"
												>
													{skill}
												</Badge>
											))}
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>

					<motion.div
						variants={containerVariants}
						initial="initial"
						animate="animate"
						className="mb-12"
					>
						<motion.h2 variants={fadeInUp} className="mb-6 text-2xl font-bold">
							Experience
						</motion.h2>
						<div className="space-y-6">
							{experience.map((exp) => (
								<motion.div
									key={exp.id}
									variants={fadeInUp}
									whileHover={{ y: -4 }}
									transition={{ duration: 0.2 }}
									className="rounded-xl border border-border bg-card p-6 text-card-foreground shadow-lg"
								>
									<div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
										<div>
											<h3 className="text-xl font-semibold">{exp.title}</h3>
											<p className="text-muted-foreground">{exp.company}</p>
										</div>
										<div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
											<span className="flex items-center gap-1">
												<Calendar className="h-4 w-4" />
												{exp.period}
											</span>
											<span className="flex items-center gap-1">
												<MapPin className="h-4 w-4" />
												{exp.location}
											</span>
										</div>
									</div>
									<ul className="mb-4 list-inside list-disc space-y-2 text-muted-foreground">
										{exp.description.map((item, i) => (
											<li key={i}>{item}</li>
										))}
									</ul>
									<div className="flex flex-wrap gap-2">
										{exp.technologies.map((tech) => (
											<Badge key={tech} variant="outline">
												{tech}
											</Badge>
										))}
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>

					<motion.div
						variants={containerVariants}
						initial="initial"
						animate="animate"
						className="mb-12"
					>
						<motion.h2 variants={fadeInUp} className="mb-6 text-2xl font-bold">
							Education
						</motion.h2>
						<motion.div
							variants={fadeInUp}
							whileHover={{ y: -4 }}
							transition={{ duration: 0.2 }}
							className="rounded-xl border border-border bg-gradient-to-br from-card to-muted/30 p-6 text-card-foreground shadow-lg"
						>
							<div className="mb-2 flex items-start gap-3">
								<div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
									<GraduationCap className="h-5 w-5 text-primary" />
								</div>
								<div className="flex-1">
									<h3 className="mb-1 text-xl font-semibold">
										{education[0].degree}
									</h3>
									<p className="mb-2 text-muted-foreground">
										{education[0].school}
									</p>
									<p className="text-sm text-muted-foreground">
										{education[0].period}
									</p>
									<p className="mt-2 text-muted-foreground">
										{education[0].description}
									</p>
								</div>
							</div>
						</motion.div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5 }}
						className="rounded-2xl border border-border bg-gradient-to-br from-primary/10 to-secondary/10 p-8 text-center shadow-lg"
					>
						<h2 className="mb-4 text-2xl font-bold">
							Let&apos;s Work Together
						</h2>
						<p className="mb-6 text-muted-foreground">
							Interested in collaborating on a project or have a question?
						</p>
						<a
							href="mailto:itstarun1994@gmail.com"
							className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105"
						>
							<Mail className="h-4 w-4" />
							Get In Touch
						</a>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}
