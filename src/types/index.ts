export interface Project {
	id: string;
	title: string;
	description: string;
	longDescription: string;
	image: string;
	technologies: string[];
	liveUrl?: string;
	githubUrl?: string;
	featured: boolean;
	category: "web" | "mobile" | "design" | "other";
}

export interface Skill {
	name: string;
	category: string;
	level: "beginner" | "intermediate" | "advanced" | "expert";
}

export interface Experience {
	id: string;
	title: string;
	company: string;
	location: string;
	startDate: string;
	endDate?: string;
	description: string[];
	technologies: string[];
}

export interface ContactForm {
	name: string;
	email: string;
	subject: string;
	message: string;
}

export interface SiteMetadata {
	title: string;
	description: string;
	keywords: string[];
	ogImage?: string;
}
