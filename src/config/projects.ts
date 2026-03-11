export interface ProjectConfig {
	id: string;
	name: string;
	slug: string;
	url: string;
	tagline: string;
	category: "mobile" | "web";
	featured: boolean;
	githubUrl: string | null;
	imageUrl: string;
	projectDuration?: string;
	builtBy?: string;
	description?: string;
}

export const PROJECTS: Record<string, ProjectConfig> = {
	chargespot: {
		id: "chargespot",
		name: "Chargespot",
		slug: "chargespot",
		url: "https://chargespot.app/",
		tagline: "Your EV charging companion - Find, charge, track, repeat",
		category: "mobile",
		featured: true,
		githubUrl: null,
		imageUrl: "/images/projects/chargespot.webp",
		builtBy: "CHARGE23 LABS PVT. LTD.",
		description:
			"EV Charging Platform featuring real-time station tracking, payment integration, and comprehensive charging analytics.",
	},
	opentribe: {
		id: "opentribe",
		name: "OpenTribe",
		slug: "opentribe",
		url: "https://opentribe.io/",
		tagline:
			"Talent marketplace for Polkadot ecosystem connecting organizations with contributors",
		category: "web",
		featured: false,
		githubUrl: null,
		imageUrl: "/images/projects/opentribe.webp",
		projectDuration: "1-2 years",
		description:
			"Polkadot Talent Marketplace connecting developers with opportunities in the Web3 ecosystem with decentralized identity.",
	},
	domainCollective: {
		id: "domain-collective",
		name: "Domain Collective",
		slug: "domain-collective",
		url: "https://collective.domains/",
		tagline: "Manage all your domains from one unified interface",
		category: "web",
		featured: false,
		githubUrl: null,
		imageUrl: "/images/projects/domain-collective.webp",
		projectDuration: "3-4 years",
		description:
			"Multi-Registrar Platform for seamless domain management across multiple registrars with advanced search and bulk operations.",
	},
};
