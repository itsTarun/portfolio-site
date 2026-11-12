import {
	type OgVisualVariant,
	ogContentType,
	ogRuntime,
	ogSize,
	renderOgCard,
} from "./og-card";

export const projectOgRuntime = ogRuntime;
export const projectOgSize = ogSize;
export const projectOgContentType = ogContentType;

type CreateProjectOgImageOptions = {
	title: string;
	description: string;
	badge?: string;
	pathLabel?: string;
	footerText?: string;
	footerRightText?: string;
	accentColor?: string;
	descriptionColor?: string;
	descriptionFontSize?: number;
	titleFontSize?: number;
	visualVariant?: OgVisualVariant;
};

export function createProjectOgImage({
	title,
	description,
	badge = "Case Study",
	pathLabel,
	footerText = "Shipped Production Build",
	footerRightText = "Case Study",
	accentColor = "#22c55e",
	descriptionColor = "#a1a1aa",
	descriptionFontSize = 26,
	titleFontSize = 72,
	visualVariant = "mobile",
}: CreateProjectOgImageOptions) {
	return renderOgCard({
		title,
		subtitle: description,
		badge,
		pathLabel,
		footerText,
		footerRightText,
		accentColor,
		subtitleColor: descriptionColor,
		subtitleFontSize: descriptionFontSize,
		titleFontSize,
		visualVariant,
	});
}
