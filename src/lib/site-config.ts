export const SITE_URL = "https://itstarun.fyi";
export const SITE_NAME = "Tarun Portfolio";
export const SITE_DESCRIPTION =
	"Personal portfolio showcasing iOS and Flutter work, experience, and case studies.";
export const CONTACT_EMAIL = "itstarun1994@gmail.com";
export const CONTACT_EMAIL_MAILTO = `mailto:${CONTACT_EMAIL}`;

export const SOCIAL_LINKS = {
	github: "https://github.com/itsTarun",
	linkedin: "https://www.linkedin.com/in/iamtarun/",
	twitter: "https://x.com/itstarun1994",
} as const;

export const OG_IMAGE_SIZE = {
	width: 1200,
	height: 630,
} as const;

export const SOCIAL_PROFILE_URLS = [
	SOCIAL_LINKS.github,
	SOCIAL_LINKS.linkedin,
	SOCIAL_LINKS.twitter,
] as const;
