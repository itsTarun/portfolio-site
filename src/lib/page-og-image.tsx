import {
	type OgVisualVariant,
	ogContentType,
	ogRuntime,
	ogSize,
	renderOgCard,
} from "./og-card";

export const pageOgRuntime = ogRuntime;
export const pageOgSize = ogSize;
export const pageOgContentType = ogContentType;

type CreatePageOgImageOptions = {
	title: string;
	subtitle: string;
	badge?: string;
	pathLabel?: string;
	footerText?: string;
	footerRightText?: string;
	accentText?: string;
	accentColor?: string;
	subtitleColor?: string;
	subtitleFontSize?: number;
	titleFontSize?: number;
	visualVariant?: OgVisualVariant;
};

export function createPageOgImage({
	title,
	subtitle,
	badge,
	pathLabel,
	footerText,
	footerRightText,
	accentText,
	accentColor,
	subtitleColor,
	subtitleFontSize = 26,
	titleFontSize = 76,
	visualVariant = "hybrid",
}: CreatePageOgImageOptions) {
	return renderOgCard({
		title,
		subtitle,
		badge,
		pathLabel,
		footerText,
		footerRightText,
		accentText,
		accentColor,
		subtitleColor,
		subtitleFontSize,
		titleFontSize,
		visualVariant,
	});
}
