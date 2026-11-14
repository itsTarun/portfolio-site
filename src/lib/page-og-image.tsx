import {
	type OgCardRow,
	type OgFloatingMetric,
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
	eyebrow?: string;
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
	panelTitle?: string;
	panelRows?: OgCardRow[];
	floatingMetrics?: OgFloatingMetric[];
};

export function createPageOgImage({
	title,
	subtitle,
	eyebrow,
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
	panelTitle,
	panelRows,
	floatingMetrics,
}: CreatePageOgImageOptions) {
	return renderOgCard({
		title,
		subtitle,
		eyebrow,
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
		panelTitle,
		panelRows,
		floatingMetrics,
	});
}
