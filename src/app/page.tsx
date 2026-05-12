"use client";

import { CtaSection } from "@/components/home/cta-section";
import { HeroSection } from "@/components/home/hero-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { TimelineSection } from "@/components/home/timeline-section";

export default function Home() {
	return (
		<>
			<HeroSection />
			<TimelineSection />
			<ProjectsSection />
			<CtaSection />
		</>
	);
}
