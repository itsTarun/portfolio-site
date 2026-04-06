"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animation/scroll-reveal";

const techStack = [
	{
		category: "Mobile",
		color: "bg-blue-500/10 border-blue-500/30 text-blue-700 dark:text-blue-300",
		dot: "bg-blue-500",
		items: [
			{ name: "Swift", note: "Primary" },
			{ name: "UIKit", note: "5 yrs" },
			{ name: "SwiftUI", note: "Growing" },
			{ name: "Flutter", note: "2 yrs" },
			{ name: "Dart", note: "Primary" },
		],
	},
	{
		category: "Architecture",
		color:
			"bg-purple-500/10 border-purple-500/30 text-purple-700 dark:text-purple-300",
		dot: "bg-purple-500",
		items: [
			{ name: "VIPER", note: "Expert" },
			{ name: "Coordinator", note: "Expert" },
			{ name: "Clean Arch", note: "Applied" },
			{ name: "BLoC", note: "Flutter" },
			{ name: "Protocol-OOP", note: "iOS" },
		],
	},
	{
		category: "Backend & Data",
		color:
			"bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-300",
		dot: "bg-emerald-500",
		items: [
			{ name: "Firebase", note: "4 yrs" },
			{ name: "FCM", note: "Push" },
			{ name: "Crashlytics", note: "QA" },
			{ name: "REST APIs", note: "Postman" },
			{ name: "Isar DB", note: "Offline" },
		],
	},
	{
		category: "Release & Quality",
		color:
			"bg-orange-500/10 border-orange-500/30 text-orange-700 dark:text-orange-300",
		dot: "bg-orange-500",
		items: [
			{ name: "App Store", note: "Shipped" },
			{ name: "XCTest", note: "Unit+UI" },
			{ name: "GitLab CI", note: "Pipelines" },
			{ name: "TestFlight", note: "Beta" },
			{ name: "Jira", note: "Agile" },
		],
	},
];

interface TechItem {
	name: string;
	note: string;
}

interface TechGroupProps {
	category: string;
	items: TechItem[];
	color: string;
	dot: string;
	index: number;
}

function TechGroup({ category, items, color, dot, index }: TechGroupProps) {
	return (
		<ScrollReveal delay={index * 80}>
			<motion.div
				initial={{ opacity: 0, y: 12 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className="neo-panel p-5 h-full"
			>
				<div className="flex items-center gap-2 mb-4">
					<div className={`w-2 h-2 rounded-full ${dot}`} />
					<p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
						{category}
					</p>
				</div>
				<div className="flex flex-wrap gap-2">
					{items.map((item) => (
						<motion.div
							key={item.name}
							whileHover={{ scale: 1.04, y: -1 }}
							transition={{ duration: 0.15 }}
							className={`border flex items-center gap-1.5 px-2.5 py-1.5 cursor-default transition-shadow hover:shadow-sm ${color}`}
						>
							<span className="text-xs font-semibold">{item.name}</span>
							<span className="text-[9px] opacity-60 font-medium">
								{item.note}
							</span>
						</motion.div>
					))}
				</div>
			</motion.div>
		</ScrollReveal>
	);
}

export function TechStackSection() {
	return (
		<section className="border-b-2 border-border py-16 md:py-20 lg:py-24">
			<div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<ScrollReveal>
					<div className="mb-12">
						<p className="eyebrow mb-4">Capabilities</p>
						<h2 className="section-title">The full stack I ship with.</h2>
						<p className="section-subtitle mt-4 max-w-2xl">
							From native iOS to cross-platform Flutter — every layer of the
							mobile stack, from architecture to release.
						</p>
					</div>
				</ScrollReveal>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
					{techStack.map((group, index) => (
						<TechGroup key={group.category} {...group} index={index} />
					))}
				</div>
			</div>
		</section>
	);
}
