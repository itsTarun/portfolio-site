// The apex redirects (307) to www, so www is what actually serves every page.
// Canonicals, sitemap entries and og:url all have to point at the served host.
export const SITE_URL = "https://www.itstarun.fyi";

// TODO(tarun): set NEXT_PUBLIC_APP_URL to https://www.itstarun.fyi in the Vercel
// project settings (all environments). robots.ts and sitemap.ts read that env
// var in preference to SITE_URL, so while it still holds the apex, production
// ships a sitemap and a Sitemap: line advertising a host every crawler gets
// redirected away from — even though every canonical on the page says www.
// Verified locally: with the apex value the built sitemap.xml emits apex URLs.

// Vercel sets VERCEL_ENV on every deployment. Matching a single preview
// hostname left every other preview URL (branch and commit deploys) indexable,
// so gate on the env instead. Absent outside Vercel, i.e. local builds index.
export const IS_PREVIEW_DEPLOYMENT =
	!!process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production";
export const SITE_NAME = "Tarun Portfolio";
export const SITE_DESCRIPTION =
	"Personal portfolio showcasing iOS and Flutter work, experience, and projects.";
export const CONTACT_EMAIL = "itstarun1994@gmail.com";
export const CONTACT_EMAIL_MAILTO = `mailto:${CONTACT_EMAIL}`;

export const RESUME_URL = "/resume.pdf";

const RESUME_DOWNLOAD_FILENAME = "Tarun_Sharma_Flutter_Resume.pdf";

// href and download travel together: without the filename the browser saves
// the file as "resume.pdf". `download` only honors a filename same-origin.
export const RESUME_DOWNLOAD_LINK_PROPS = {
	href: RESUME_URL,
	download: RESUME_DOWNLOAD_FILENAME,
} as const;

export const SOCIAL_LINKS = {
	github: "https://github.com/itsTarun",
	linkedin: "https://www.linkedin.com/in/iamtarun/",
	twitter: "https://x.com/itstarun1994",
} as const;

// twitter:creator / twitter:site want the @handle, not the profile URL.
export const TWITTER_HANDLE = "@itstarun1994";

export const OG_IMAGE_SIZE = {
	width: 1200,
	height: 630,
} as const;

export const SOCIAL_PROFILE_URLS = [
	SOCIAL_LINKS.github,
	SOCIAL_LINKS.linkedin,
	SOCIAL_LINKS.twitter,
] as const;
