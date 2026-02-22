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
				backgroundColor: "#0a0a0a",
				backgroundImage: "linear-gradient(135deg, #0a0a0a 0%, #1f2937 100%)",
				fontFamily: "system-ui, -apple-system, sans-serif",
				padding: "48px",
			}}
		>
			<div
				style={{
					fontSize: 92,
					fontWeight: 700,
					color: "#ffffff",
					letterSpacing: "-0.03em",
					marginBottom: "20px",
				}}
			>
				Chargespot
			</div>
			<div
				style={{
					fontSize: 30,
					fontWeight: 500,
					color: "#cbd5e1",
					textAlign: "center",
					maxWidth: "920px",
					lineHeight: 1.3,
				}}
			>
				EV charging platform with real-time station discovery, trip planning, and
				in-app charging flows.
			</div>
		</div>,
		{ ...size },
	);
}
