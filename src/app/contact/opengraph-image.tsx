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
						fontSize: 96,
						fontWeight: 700,
						color: "#ffffff",
						letterSpacing: "-0.02em",
					}}
				>
					Get In Touch
				</div>

				<div
					style={{
						fontSize: 28,
						fontWeight: 500,
						color: "#888888",
						letterSpacing: "0.01em",
					}}
				>
					Have a question or want to work together?
				</div>

				<div
					style={{
						fontSize: 18,
						fontWeight: 600,
						color: "#8b5cf6",
						marginTop: "16px",
					}}
				>
					itstarun1994@gmail.com
				</div>
			</div>
		</div>,
		{ ...size },
	);
}
