export const SITE_URL = "https://itstarun.fyi";
export const SITE_NAME = "Tarun Portfolio";
export const SITE_DESCRIPTION =
	"Personal portfolio showcasing iOS and Flutter work, experience, and projects.";
export const CONTACT_EMAIL = "itstarun1994@gmail.com";
export const CONTACT_EMAIL_MAILTO = `mailto:${CONTACT_EMAIL}`;

export const RESUME_URL = "/resume.pdf";

const RESUME_DOWNLOAD_FILENAME = "Tarun_Sharma_Flutter_Resume.pdf";

// `download` only honors a filename for same-origin URLs, which /resume.pdf is.
export const RESUME_DOWNLOAD_LINK_PROPS = {
	href: RESUME_URL,
	download: RESUME_DOWNLOAD_FILENAME,
} as const;

export const RESUME_VIEW_LINK_PROPS = {
	href: RESUME_URL,
	target: "_blank",
	rel: "noopener noreferrer",
} as const;

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
