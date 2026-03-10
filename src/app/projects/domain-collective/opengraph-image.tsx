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
				backgroundColor: "#0f172a",
				backgroundImage: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
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
				Domain Collective
			</div>
			<div
				style={{
					fontSize: 28,
					fontWeight: 500,
					color: "#94a3b8",
					textAlign: "center",
					maxWidth: "920px",
					lineHeight: 1.4,
				}}
			>
				Unified domain management across GoDaddy, Namecheap, Gandi, and more
			</div>
		</div>,
		{ ...size },
	);
}
