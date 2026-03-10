import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/png";

export default async function Image() {
	return new ImageResponse(
		<div
			style={{
				height: "100%",
				width: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				backgroundColor: "#000000",
				backgroundImage: "linear-gradient(135deg, #000000 0%, #1a1a2e 100%)",
				fontFamily: "system-ui, -apple-system, sans-serif",
				padding: "48px",
			}}
		>
			<div
				style={{
					fontSize: 72,
					fontWeight: 700,
					color: "#ffffff",
					letterSpacing: "-0.03em",
					marginBottom: "20px",
				}}
			>
				OpenTribe
			</div>
			<div
				style={{
					fontSize: 28,
					fontWeight: 500,
					color: "#a78bfa",
					textAlign: "center",
					maxWidth: "920px",
					lineHeight: 1.4,
				}}
			>
				Talent marketplace for Polkadot ecosystem
			</div>
		</div>,
		{ ...size },
	);
}
