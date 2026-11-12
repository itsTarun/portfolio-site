import { ImageResponse } from "next/og";
import {
	OG_IMAGE_CONTENT_TYPE,
	OG_IMAGE_RUNTIME,
	OG_IMAGE_SIZE,
} from "./og-image-constants";

export const ogRuntime = OG_IMAGE_RUNTIME;
export const ogSize = OG_IMAGE_SIZE;
export const ogContentType = OG_IMAGE_CONTENT_TYPE;

export type OgVisualVariant = "hybrid" | "mobile" | "web";

export type RenderOgCardOptions = {
	title: string;
	subtitle: string;
	badge?: string;
	pathLabel?: string;
	footerText?: string;
	footerRightText?: string;
	accentText?: string;
	accentColor?: string;
	subtitleColor?: string;
	titleFontSize?: number;
	subtitleFontSize?: number;
	visualVariant?: OgVisualVariant;
};

type LoadedFonts = {
	display: ArrayBuffer;
	bodyRegular: ArrayBuffer;
	bodySemibold: ArrayBuffer;
};

let fontsPromise: Promise<LoadedFonts> | null = null;

function loadOgFonts(): Promise<LoadedFonts> {
	if (!fontsPromise) {
		fontsPromise = Promise.all([
			fetch(
				new URL(
					"../assets/fonts/bricolage-grotesque-700.woff",
					import.meta.url,
				),
			).then((res) => res.arrayBuffer()),
			fetch(
				new URL("../assets/fonts/instrument-sans-400.woff", import.meta.url),
			).then((res) => res.arrayBuffer()),
			fetch(
				new URL("../assets/fonts/instrument-sans-600.woff", import.meta.url),
			).then((res) => res.arrayBuffer()),
		]).then(([display, bodyRegular, bodySemibold]) => ({
			display,
			bodyRegular,
			bodySemibold,
		}));
	}
	return fontsPromise;
}

function MobileWireframe({ accentColor }: { accentColor: string }) {
	return (
		<div
			style={{
				width: "236px",
				height: "420px",
				borderRadius: "34px",
				border: "1.5px solid #3a3a44",
				backgroundColor: "#070709",
				padding: "16px",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: "16px",
				}}
			>
				<div
					style={{
						width: "72px",
						height: "18px",
						borderRadius: "999px",
						backgroundColor: "#18181d",
						border: "1px solid #27272f",
						display: "flex",
					}}
				/>
				<div
					style={{
						width: "100%",
						height: "152px",
						borderRadius: "16px",
						border: "1px solid #23232a",
						backgroundColor: "#0f0f13",
						padding: "12px",
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
					}}
				>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							width: "100%",
						}}
					>
						<div
							style={{
								display: "flex",
								alignItems: "center",
								gap: "6px",
							}}
						>
							<div
								style={{
									width: "7px",
									height: "7px",
									borderRadius: "999px",
									backgroundColor: accentColor,
									display: "flex",
								}}
							/>
							<div
								style={{
									width: "56px",
									height: "6px",
									borderRadius: "999px",
									backgroundColor: "#3f3f46",
									display: "flex",
								}}
							/>
						</div>
						<div
							style={{
								width: "28px",
								height: "6px",
								borderRadius: "999px",
								backgroundColor: "#27272f",
								display: "flex",
							}}
						/>
					</div>

					<svg
						width="178"
						height="96"
						viewBox="0 0 178 96"
						fill="none"
						role="img"
						aria-label="Mobile route geometry"
						style={{ display: "flex" }}
					>
						<path
							d="M12 76 C 48 76, 56 26, 94 42 C 122 54, 134 22, 166 18"
							stroke={accentColor}
							strokeWidth="2.5"
							strokeLinecap="round"
						/>
						<path
							d="M12 58 L 166 58 M 12 34 L 166 34 M 58 10 L 58 86 M 118 10 L 118 86"
							stroke="#1e1e26"
							strokeWidth="1"
						/>
						<circle cx="12" cy="76" r="4.5" fill="#fafafa" />
						<circle
							cx="94"
							cy="42"
							r="4"
							fill="#18181b"
							stroke={accentColor}
							strokeWidth="2"
						/>
						<circle cx="166" cy="18" r="5" fill={accentColor} />
					</svg>
				</div>

				<div
					style={{
						width: "100%",
						display: "flex",
						gap: "8px",
					}}
				>
					<div
						style={{
							flex: 1,
							height: "36px",
							borderRadius: "10px",
							border: "1px solid #23232a",
							backgroundColor: "#0e0e12",
							padding: "0 10px",
							display: "flex",
							alignItems: "center",
							gap: "6px",
						}}
					>
						<div
							style={{
								width: "6px",
								height: "6px",
								borderRadius: "999px",
								backgroundColor: accentColor,
								display: "flex",
							}}
						/>
						<div
							style={{
								width: "44px",
								height: "5px",
								borderRadius: "999px",
								backgroundColor: "#52525b",
								display: "flex",
							}}
						/>
					</div>
					<div
						style={{
							flex: 1,
							height: "36px",
							borderRadius: "10px",
							border: "1px solid #23232a",
							backgroundColor: "#0e0e12",
							padding: "0 10px",
							display: "flex",
							alignItems: "center",
						}}
					>
						<div
							style={{
								width: "50px",
								height: "5px",
								borderRadius: "999px",
								backgroundColor: "#3f3f46",
								display: "flex",
							}}
						/>
					</div>
				</div>
			</div>

			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "12px",
					backgroundColor: "#101015",
					border: "1px solid #24242c",
					borderRadius: "18px",
					padding: "14px",
				}}
			>
				<div
					style={{
						width: "34px",
						height: "4px",
						borderRadius: "999px",
						backgroundColor: "#2e2e36",
						alignSelf: "center",
						display: "flex",
					}}
				/>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "8px",
					}}
				>
					<div
						style={{
							width: "118px",
							height: "8px",
							borderRadius: "999px",
							backgroundColor: "#e4e4e7",
							display: "flex",
						}}
					/>
					<div
						style={{
							width: "84px",
							height: "6px",
							borderRadius: "999px",
							backgroundColor: "#52525b",
							display: "flex",
						}}
					/>
				</div>
				<div
					style={{
						width: "100%",
						height: "32px",
						borderRadius: "999px",
						backgroundColor: "#fafafa",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<div
						style={{
							width: "64px",
							height: "6px",
							borderRadius: "999px",
							backgroundColor: "#09090b",
							display: "flex",
						}}
					/>
				</div>
			</div>
		</div>
	);
}

function WebWindowWireframe({
	accentColor,
	compact = false,
}: {
	accentColor: string;
	compact?: boolean;
}) {
	return (
		<div
			style={{
				width: compact ? "290px" : "326px",
				height: compact ? "250px" : "300px",
				borderRadius: "16px",
				border: "1px solid #2c2c34",
				backgroundColor: "#0d0d11",
				display: "flex",
				flexDirection: "column",
				overflow: "hidden",
			}}
		>
			<div
				style={{
					height: "36px",
					borderBottom: "1px solid #222229",
					backgroundColor: "#121217",
					padding: "0 14px",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
					<div
						style={{
							width: "7px",
							height: "7px",
							borderRadius: "999px",
							backgroundColor: "#3f3f46",
							display: "flex",
						}}
					/>
					<div
						style={{
							width: "7px",
							height: "7px",
							borderRadius: "999px",
							backgroundColor: "#3f3f46",
							display: "flex",
						}}
					/>
					<div
						style={{
							width: "7px",
							height: "7px",
							borderRadius: "999px",
							backgroundColor: "#3f3f46",
							display: "flex",
						}}
					/>
				</div>
				<div
					style={{
						width: "110px",
						height: "14px",
						borderRadius: "999px",
						backgroundColor: "#1b1b22",
						border: "1px solid #272730",
						display: "flex",
					}}
				/>
			</div>

			<div
				style={{
					flex: 1,
					padding: "16px",
					display: "flex",
					flexDirection: "column",
					gap: "12px",
				}}
			>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<div
						style={{
							width: "96px",
							height: "10px",
							borderRadius: "999px",
							backgroundColor: "#e4e4e7",
							display: "flex",
						}}
					/>
					<div
						style={{
							width: "44px",
							height: "16px",
							borderRadius: "999px",
							border: `1px solid ${accentColor}`,
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<div
							style={{
								width: "20px",
								height: "4px",
								borderRadius: "999px",
								backgroundColor: accentColor,
								display: "flex",
							}}
						/>
					</div>
				</div>

				<div
					style={{
						display: "flex",
						gap: "10px",
						flex: 1,
					}}
				>
					<div
						style={{
							flex: 1,
							borderRadius: "10px",
							border: "1px solid #23232b",
							backgroundColor: "#121218",
							padding: "12px",
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
						}}
					>
						<div
							style={{
								width: "52px",
								height: "6px",
								borderRadius: "999px",
								backgroundColor: "#3f3f46",
								display: "flex",
							}}
						/>
						<svg
							width="100"
							height="68"
							viewBox="0 0 100 68"
							fill="none"
							role="img"
							aria-label="System chart geometry"
							style={{ display: "flex" }}
						>
							<path
								d="M4 54 L26 42 L48 48 L72 22 L96 14"
								stroke={accentColor}
								strokeWidth="2.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<circle cx="96" cy="14" r="3.5" fill={accentColor} />
						</svg>
					</div>

					<div
						style={{
							width: "84px",
							display: "flex",
							flexDirection: "column",
							gap: "8px",
						}}
					>
						<div
							style={{
								flex: 1,
								borderRadius: "10px",
								border: "1px solid #23232b",
								backgroundColor: "#121218",
								display: "flex",
							}}
						/>
						<div
							style={{
								flex: 1,
								borderRadius: "10px",
								border: "1px solid #23232b",
								backgroundColor: "#121218",
								display: "flex",
							}}
						/>
					</div>
				</div>

				<div
					style={{
						height: "44px",
						borderRadius: "10px",
						border: "1px solid #23232b",
						backgroundColor: "#121218",
						padding: "0 12px",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<div
						style={{
							width: "120px",
							height: "7px",
							borderRadius: "999px",
							backgroundColor: "#52525b",
							display: "flex",
						}}
					/>
					<div
						style={{
							width: "24px",
							height: "7px",
							borderRadius: "999px",
							backgroundColor: accentColor,
							display: "flex",
						}}
					/>
				</div>
			</div>
		</div>
	);
}

function RightShowcase({
	accentColor,
	visualVariant,
}: {
	accentColor: string;
	visualVariant: OgVisualVariant;
}) {
	if (visualVariant === "web") {
		return <WebWindowWireframe accentColor={accentColor} />;
	}

	if (visualVariant === "mobile") {
		return (
			<div
				style={{
					display: "flex",
					alignItems: "flex-start",
					justifyContent: "center",
					marginTop: "68px",
				}}
			>
				<MobileWireframe accentColor={accentColor} />
			</div>
		);
	}

	return (
		<div
			style={{
				position: "relative",
				width: "100%",
				height: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<div
				style={{
					position: "absolute",
					top: "26px",
					right: "18px",
					display: "flex",
				}}
			>
				<WebWindowWireframe accentColor={accentColor} compact />
			</div>
			<div
				style={{
					position: "relative",
					marginTop: "110px",
					marginRight: "86px",
					display: "flex",
				}}
			>
				<MobileWireframe accentColor={accentColor} />
			</div>
		</div>
	);
}

export async function renderOgCard({
	title,
	subtitle,
	badge = "Portfolio",
	pathLabel,
	footerText = "iOS  ·  Flutter  ·  Next.js  ·  TypeScript",
	footerRightText = "Since 2018",
	accentText,
	accentColor = "#22c55e",
	subtitleColor = "#a1a1aa",
	titleFontSize = 76,
	subtitleFontSize = 26,
	visualVariant = "hybrid",
}: RenderOgCardOptions) {
	const fonts = await loadOgFonts();
	const bottomCopy = accentText ?? footerText;
	const bottomColor = accentText ? accentColor : "#e4e4e7";

	return new ImageResponse(
		<div
			style={{
				height: "100%",
				width: "100%",
				display: "flex",
				padding: "28px",
				backgroundColor: "#000000",
				fontFamily: "Instrument Sans",
			}}
		>
			<div
				style={{
					height: "100%",
					width: "100%",
					display: "flex",
					flexDirection: "column",
					borderRadius: "24px",
					border: "1px solid #26262b",
					backgroundColor: "#070709",
					overflow: "hidden",
				}}
			>
				<div
					style={{
						height: "62px",
						width: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						padding: "0 36px",
						borderBottom: "1px solid #1f1f24",
						backgroundColor: "#0b0b0e",
					}}
				>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							gap: "12px",
						}}
					>
						<div
							style={{
								width: "9px",
								height: "9px",
								borderRadius: "999px",
								backgroundColor: accentColor,
								display: "flex",
							}}
						/>
						<span
							style={{
								fontSize: 19,
								fontWeight: 600,
								color: "#fafafa",
								letterSpacing: "-0.01em",
							}}
						>
							itstarun.fyi
						</span>
						{pathLabel ? (
							<span
								style={{
									fontSize: 18,
									fontWeight: 400,
									color: "#71717a",
								}}
							>
								{pathLabel}
							</span>
						) : null}
					</div>

					<div
						style={{
							display: "flex",
							alignItems: "center",
							borderRadius: "999px",
							border: "1px solid #27272e",
							backgroundColor: "#141418",
							padding: "6px 16px",
							fontSize: 15,
							fontWeight: 600,
							color: "#d4d4d8",
						}}
					>
						{badge}
					</div>
				</div>

				<div
					style={{
						flex: 1,
						width: "100%",
						display: "flex",
						flexDirection: "row",
					}}
				>
					<div
						style={{
							flex: 1,
							height: "100%",
							padding: "46px 44px 36px 44px",
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
						}}
					>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
							}}
						>
							<div
								style={{
									fontFamily: "Bricolage Grotesque",
									fontSize: titleFontSize,
									fontWeight: 700,
									color: "#ffffff",
									letterSpacing: "-0.03em",
									lineHeight: 1.04,
									marginBottom: "20px",
								}}
							>
								{title}
							</div>
							<div
								style={{
									fontSize: subtitleFontSize,
									fontWeight: 400,
									color: subtitleColor,
									lineHeight: 1.4,
									maxWidth: "600px",
								}}
							>
								{subtitle}
							</div>
						</div>

						<div
							style={{
								display: "flex",
								alignItems: "center",
								justifyContent: "space-between",
								width: "100%",
								borderTop: "1px solid #1d1d22",
								paddingTop: "22px",
							}}
						>
							<span
								style={{
									fontSize: 18,
									fontWeight: 600,
									color: bottomColor,
								}}
							>
								{bottomCopy}
							</span>
							<span
								style={{
									fontSize: 16,
									fontWeight: 400,
									color: "#71717a",
								}}
							>
								{footerRightText}
							</span>
						</div>
					</div>

					<div
						style={{
							width: "396px",
							height: "100%",
							borderLeft: "1px solid #1f1f24",
							backgroundColor: "#0a0a0d",
							backgroundImage:
								"radial-gradient(circle at 65% 28%, rgba(255,255,255,0.06) 0%, rgba(10,10,13,0) 70%)",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							padding: "24px",
							overflow: "hidden",
						}}
					>
						<RightShowcase
							accentColor={accentColor}
							visualVariant={visualVariant}
						/>
					</div>
				</div>
			</div>
		</div>,
		{
			...ogSize,
			fonts: [
				{
					name: "Bricolage Grotesque",
					data: fonts.display,
					weight: 700,
					style: "normal",
				},
				{
					name: "Instrument Sans",
					data: fonts.bodyRegular,
					weight: 400,
					style: "normal",
				},
				{
					name: "Instrument Sans",
					data: fonts.bodySemibold,
					weight: 600,
					style: "normal",
				},
			],
		},
	);
}
