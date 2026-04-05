import { ImageResponse } from "next/og";
import {
	OG_IMAGE_CONTENT_TYPE,
	OG_IMAGE_RUNTIME,
	OG_IMAGE_SIZE,
} from "./og-image-constants";

export const projectOgRuntime = OG_IMAGE_RUNTIME;

export const projectOgSize = OG_IMAGE_SIZE;

export const projectOgContentType = OG_IMAGE_CONTENT_TYPE;

type CreateProjectOgImageOptions = {
	backgroundColor: string;
	backgroundImage: string;
	description: string;
	descriptionColor: string;
	descriptionFontSize: number;
	descriptionLineHeight: number;
	title: string;
	titleFontSize: number;
};

export function createProjectOgImage({
	backgroundColor,
	backgroundImage,
	description,
	descriptionColor,
	descriptionFontSize,
	descriptionLineHeight,
	title,
	titleFontSize,
}: CreateProjectOgImageOptions) {
	return new ImageResponse(
		<div
			style={{
				height: "100%",
				width: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				backgroundColor,
				backgroundImage,
				fontFamily: "system-ui, -apple-system, sans-serif",
				padding: "48px",
			}}
		>
			<div
				style={{
					fontSize: titleFontSize,
					fontWeight: 700,
					color: "#ffffff",
					letterSpacing: "-0.03em",
					marginBottom: "20px",
				}}
			>
				{title}
			</div>
			<div
				style={{
					fontSize: descriptionFontSize,
					fontWeight: 500,
					color: descriptionColor,
					textAlign: "center",
					maxWidth: "920px",
					lineHeight: descriptionLineHeight,
				}}
			>
				{description}
			</div>
		</div>,
		{ ...projectOgSize },
	);
}
