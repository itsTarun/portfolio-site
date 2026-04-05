import { ImageResponse } from "next/og";
import {
	OG_IMAGE_CONTENT_TYPE,
	OG_IMAGE_RUNTIME,
	OG_IMAGE_SIZE,
} from "./og-image-constants";

export const pageOgRuntime = OG_IMAGE_RUNTIME;

export const pageOgSize = OG_IMAGE_SIZE;

export const pageOgContentType = OG_IMAGE_CONTENT_TYPE;

type CreatePageOgImageOptions = {
	title: string;
	subtitle: string;
	accentText?: string;
	subtitleColor?: string;
	subtitleFontSize?: number;
	titleFontSize?: number;
	titleMarginBottom?: string;
};

export function createPageOgImage({
	title,
	subtitle,
	accentText,
	subtitleColor = "#888888",
	subtitleFontSize = 28,
	titleFontSize = 96,
	titleMarginBottom,
}: CreatePageOgImageOptions) {
	return new ImageResponse(
		<div
			style={{
				height: "100%",
				width: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: "#0a0a0a",
				backgroundImage: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
				fontFamily: "system-ui, -apple-system, sans-serif",
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: "24px",
				}}
			>
				<div
					style={{
						fontSize: titleFontSize,
						fontWeight: 700,
						color: "#ffffff",
						letterSpacing: "-0.02em",
						marginBottom: titleMarginBottom,
					}}
				>
					{title}
				</div>
				<div
					style={{
						fontSize: subtitleFontSize,
						fontWeight: 500,
						color: subtitleColor,
						letterSpacing: "0.01em",
					}}
				>
					{subtitle}
				</div>
				{accentText ? (
					<div
						style={{
							fontSize: 18,
							fontWeight: 600,
							color: "#8b5cf6",
							marginTop: "16px",
						}}
					>
						{accentText}
					</div>
				) : null}
			</div>
		</div>,
		{ ...pageOgSize },
	);
}
