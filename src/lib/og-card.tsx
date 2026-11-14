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

export type OgCardRow = {
	label: string;
	value: string;
	live?: boolean;
};

export type OgFloatingMetric = {
	value: string;
	label: string;
};

export type RenderOgCardOptions = {
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
	titleFontSize?: number;
	subtitleFontSize?: number;
	visualVariant?: OgVisualVariant;
	panelTitle?: string;
	panelRows?: OgCardRow[];
	floatingMetrics?: OgFloatingMetric[];
};

type LoadedFonts = {
	display: ArrayBuffer;
	bodyRegular: ArrayBuffer;
	bodySemibold: ArrayBuffer;
};

const DEFAULT_PANEL_ROWS: OgCardRow[] = [
	{ label: "Chargespot", value: "App Store · Play", live: true },
	{ label: "Domain Collective", value: "Next.js · Redis" },
];

function hexToRgba(hex: string, alpha: number): string {
	const cleaned = hex.replace("#", "");
	if (!/^[0-9a-fA-F]{6}$/.test(cleaned)) {
		return `rgba(34, 197, 94, ${alpha})`;
	}
	const r = Number.parseInt(cleaned.slice(0, 2), 16);
	const g = Number.parseInt(cleaned.slice(2, 4), 16);
	const b = Number.parseInt(cleaned.slice(4, 6), 16);
	return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

let fontsPromise: Promise<LoadedFonts> | null = null;

async function fetchFont(url: URL): Promise<ArrayBuffer> {
	const res = await fetch(url);
	if (!res.ok) {
		throw new Error(
			`Failed to load font from ${url.pathname}: ${res.status} ${res.statusText}`,
		);
	}
	return res.arrayBuffer();
}

function loadOgFonts(): Promise<LoadedFonts> {
	if (!fontsPromise) {
		fontsPromise = Promise.all([
			fetchFont(
				new URL(
					"../assets/fonts/bricolage-grotesque-700.woff",
					import.meta.url,
				),
			),
			fetchFont(
				new URL("../assets/fonts/instrument-sans-400.woff", import.meta.url),
			),
			fetchFont(
				new URL("../assets/fonts/instrument-sans-600.woff", import.meta.url),
			),
		])
			.then(([display, bodyRegular, bodySemibold]) => ({
				display,
				bodyRegular,
				bodySemibold,
			}))
			.catch((err) => {
				fontsPromise = null;
				throw err;
			});
	}
	return fontsPromise;
}

function PanelRows({
	rows,
	accentColor,
	compact = false,
}: {
	rows: OgCardRow[];
	accentColor: string;
	compact?: boolean;
}) {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: compact ? "8px" : "10px",
				width: "100%",
			}}
		>
			{rows.map((row) => (
				<div
					key={`${row.label}-${row.value}`}
					style={{
						width: "100%",
						height: compact ? "34px" : "40px",
						borderRadius: "10px",
						border: "1px solid #222229",
						backgroundColor: "#111116",
						padding: compact ? "0 10px" : "0 14px",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
						<div
							style={{
								width: "6px",
								height: "6px",
								borderRadius: "999px",
								backgroundColor: row.live ? accentColor : "#52525b",
								display: "flex",
							}}
						/>
						<span
							style={{
								fontSize: compact ? 12 : 14,
								fontWeight: 600,
								color: "#e4e4e7",
							}}
						>
							{row.label}
						</span>
					</div>
					<span
						style={{
							fontSize: compact ? 11 : 13,
							fontWeight: 400,
							color: row.live ? accentColor : "#a1a1aa",
						}}
					>
						{row.value}
					</span>
				</div>
			))}
		</div>
	);
}

function RouteChartCard({
	accentColor,
	title,
	compact = false,
	statusBadge = "LIVE",
	footerLeft = "Release Health",
	footerRight = "Production",
}: {
	accentColor: string;
	title: string;
	compact?: boolean;
	statusBadge?: string;
	footerLeft?: string;
	footerRight?: string;
}) {
	return (
		<div
			style={{
				width: "100%",
				borderRadius: "14px",
				border: "1px solid #23232a",
				backgroundColor: "#0e0e13",
				padding: compact ? "10px 12px" : "14px",
				display: "flex",
				flexDirection: "column",
				gap: compact ? "8px" : "10px",
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
				<div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
					<div
						style={{
							width: "7px",
							height: "7px",
							borderRadius: "999px",
							backgroundColor: accentColor,
							display: "flex",
						}}
					/>
					<span
						style={{
							fontSize: compact ? 12 : 13,
							fontWeight: 600,
							color: "#fafafa",
						}}
					>
						{title}
					</span>
				</div>
				<span
					style={{
						fontSize: 11,
						fontWeight: 600,
						color: accentColor,
					}}
				>
					{statusBadge}
				</span>
			</div>

			<svg
				width={compact ? "190" : "212"}
				height={compact ? "54" : "68"}
				viewBox="0 0 212 76"
				fill="none"
				role="img"
				aria-label="Route and telemetry spline"
				style={{ display: "flex" }}
			>
				<path
					d="M8 60 L204 60 M8 38 L204 38 M8 16 L204 16 M64 8 L64 68 M148 8 L148 68"
					stroke="#1e1e26"
					strokeWidth="1"
				/>
				<path
					d="M12 60 C 52 60, 66 20, 106 34 C 138 44, 158 18, 200 14"
					stroke={accentColor}
					strokeWidth="2.5"
					strokeLinecap="round"
				/>
				<circle cx="12" cy="60" r="4.5" fill="#fafafa" />
				<circle
					cx="106"
					cy="34"
					r="4"
					fill="#18181b"
					stroke={accentColor}
					strokeWidth="2"
				/>
				<circle cx="200" cy="14" r="5" fill={accentColor} />
			</svg>

			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					borderTop: "1px solid #1b1b23",
					paddingTop: "7px",
					width: "100%",
				}}
			>
				<span style={{ fontSize: 10, fontWeight: 400, color: "#71717a" }}>
					{footerLeft}
				</span>
				<span style={{ fontSize: 10, fontWeight: 600, color: accentColor }}>
					{footerRight}
				</span>
			</div>
		</div>
	);
}

function MobileWireframe({
	accentColor,
	panelTitle,
	rows,
	compact = false,
}: {
	accentColor: string;
	panelTitle: string;
	rows: OgCardRow[];
	compact?: boolean;
}) {
	return (
		<div
			style={{
				width: compact ? "248px" : "276px",
				height: compact ? "386px" : "428px",
				borderRadius: "34px",
				border: "1.5px solid #3a3a44",
				backgroundColor: "#07070a",
				padding: compact ? "14px" : "16px",
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
					gap: "12px",
					width: "100%",
				}}
			>
				<div
					style={{
						width: "70px",
						height: "18px",
						borderRadius: "999px",
						backgroundColor: "#16161b",
						border: "1px solid #27272f",
						display: "flex",
					}}
				/>
				<RouteChartCard
					accentColor={accentColor}
					title={panelTitle}
					compact={compact}
					statusBadge={
						panelTitle === "Published Apps"
							? "VERIFIED"
							: panelTitle === "Engineering"
								? "ACTIVE"
								: "LIVE"
					}
					footerLeft={
						panelTitle === "Published Apps"
							? "Crash-Free"
							: panelTitle === "Engineering"
								? "Experience"
								: "Release Health"
					}
					footerRight={
						panelTitle === "Published Apps"
							? "99%+"
							: panelTitle === "Engineering"
								? "8+ Years"
								: "Production"
					}
				/>
			</div>

			<PanelRows rows={rows.slice(0, 3)} accentColor={accentColor} compact />
		</div>
	);
}

function WebWindowWireframe({
	accentColor,
	panelTitle,
	rows,
	pathLabel,
	compact = false,
}: {
	accentColor: string;
	panelTitle: string;
	rows: OgCardRow[];
	pathLabel?: string;
	compact?: boolean;
}) {
	return (
		<div
			style={{
				width: compact ? "300px" : "344px",
				height: compact ? "212px" : "336px",
				borderRadius: "16px",
				border: "1px solid #2c2c35",
				backgroundColor: "#0c0c10",
				display: "flex",
				flexDirection: "column",
				overflow: "hidden",
			}}
		>
			<div
				style={{
					height: "36px",
					borderBottom: "1px solid #222229",
					backgroundColor: "#121218",
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
				<span
					style={{
						fontSize: 12,
						fontWeight: 600,
						color: "#a1a1aa",
					}}
				>
					{pathLabel ? `itstarun.fyi${pathLabel}` : "itstarun.fyi"}
				</span>
			</div>

			<div
				style={{
					flex: 1,
					padding: compact ? "12px 14px" : "18px",
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
					}}
				>
					<span
						style={{
							fontSize: compact ? 14 : 15,
							fontWeight: 600,
							color: "#fafafa",
						}}
					>
						{panelTitle}
					</span>
					<span
						style={{
							fontSize: 11,
							fontWeight: 600,
							color: accentColor,
							borderRadius: "999px",
							border: `1px solid ${accentColor}`,
							padding: "2px 8px",
						}}
					>
						SHIPPED
					</span>
				</div>

				{compact ? (
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-end",
							gap: "8px",
						}}
					>
						<div
							style={{
								width: "96px",
								height: "42px",
								borderRadius: "9px",
								border: "1px solid #24242d",
								backgroundColor: "#14141b",
								padding: "6px 8px",
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between",
							}}
						>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									gap: "5px",
								}}
							>
								<div
									style={{
										width: "5px",
										height: "5px",
										borderRadius: "999px",
										backgroundColor: accentColor,
										display: "flex",
									}}
								/>
								<span
									style={{
										fontSize: 10,
										fontWeight: 600,
										color: "#fafafa",
									}}
								>
									Next.js
								</span>
							</div>
							<span style={{ fontSize: 10, fontWeight: 400, color: "#a1a1aa" }}>
								App Router
							</span>
						</div>
						<div
							style={{
								width: "96px",
								height: "42px",
								borderRadius: "9px",
								border: "1px solid #24242d",
								backgroundColor: "#14141b",
								padding: "6px 8px",
								display: "flex",
								flexDirection: "column",
								justifyContent: "space-between",
							}}
						>
							<span style={{ fontSize: 10, fontWeight: 600, color: "#e4e4e7" }}>
								TypeScript
							</span>
							<span style={{ fontSize: 10, fontWeight: 400, color: "#a1a1aa" }}>
								Full-Stack
							</span>
						</div>
					</div>
				) : (
					<PanelRows rows={rows.slice(0, 3)} accentColor={accentColor} />
				)}

				{!compact ? (
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							borderTop: "1px solid #1e1e26",
							paddingTop: "10px",
						}}
					>
						<span style={{ fontSize: 12, fontWeight: 400, color: "#71717a" }}>
							Architecture · Release QA
						</span>
						<span style={{ fontSize: 12, fontWeight: 600, color: accentColor }}>
							Production
						</span>
					</div>
				) : null}
			</div>
		</div>
	);
}

function FloatingProofCard({
	metrics,
	accentColor,
	placement = "bottom",
}: {
	metrics: OgFloatingMetric[];
	accentColor: string;
	placement?: "bottom" | "middle";
}) {
	return (
		<div
			style={{
				position: "absolute",
				...(placement === "middle"
					? { top: "268px", right: "10px" }
					: { bottom: "24px", right: "18px" }),
				borderRadius: "14px",
				border: "1px solid #2e2e38",
				backgroundColor: "#121217",
				padding: "12px 16px",
				display: "flex",
				alignItems: "center",
				gap: "18px",
			}}
		>
			{metrics.map((metric, idx) => (
				<div
					key={metric.label}
					style={{
						display: "flex",
						flexDirection: "column",
						paddingLeft: idx > 0 ? "16px" : "0px",
						borderLeft: idx > 0 ? "1px solid #27272f" : "none",
					}}
				>
					<span
						style={{
							fontFamily: "Bricolage Grotesque",
							fontSize: 24,
							fontWeight: 700,
							color: idx === 0 ? accentColor : "#ffffff",
							lineHeight: 1.05,
						}}
					>
						{metric.value}
					</span>
					<span
						style={{
							fontSize: 12,
							fontWeight: 400,
							color: "#a1a1aa",
							marginTop: "2px",
						}}
					>
						{metric.label}
					</span>
				</div>
			))}
		</div>
	);
}

function RightShowcase({
	accentColor,
	visualVariant,
	panelTitle,
	panelRows,
	floatingMetrics,
	pathLabel,
}: {
	accentColor: string;
	visualVariant: OgVisualVariant;
	panelTitle: string;
	panelRows: OgCardRow[];
	floatingMetrics?: OgFloatingMetric[];
	pathLabel?: string;
}) {
	if (visualVariant === "web") {
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
				<WebWindowWireframe
					accentColor={accentColor}
					panelTitle={panelTitle}
					rows={panelRows}
					pathLabel={pathLabel}
				/>
				{floatingMetrics && floatingMetrics.length > 0 ? (
					<FloatingProofCard
						metrics={floatingMetrics}
						accentColor={accentColor}
					/>
				) : null}
			</div>
		);
	}

	if (visualVariant === "mobile") {
		return (
			<div
				style={{
					position: "relative",
					width: "100%",
					height: "100%",
					display: "flex",
					alignItems: "flex-start",
					justifyContent: "center",
					paddingTop: "22px",
				}}
			>
				<MobileWireframe
					accentColor={accentColor}
					panelTitle={panelTitle}
					rows={panelRows}
				/>
				{floatingMetrics && floatingMetrics.length > 0 ? (
					<FloatingProofCard
						metrics={floatingMetrics}
						accentColor={accentColor}
					/>
				) : null}
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
					top: "16px",
					right: "8px",
					display: "flex",
				}}
			>
				<WebWindowWireframe
					accentColor={accentColor}
					panelTitle="Full-Stack Web"
					rows={panelRows}
					pathLabel={pathLabel}
					compact
				/>
			</div>
			<div
				style={{
					position: "relative",
					marginTop: "80px",
					marginRight: "112px",
					display: "flex",
				}}
			>
				<MobileWireframe
					accentColor={accentColor}
					panelTitle={panelTitle}
					rows={panelRows}
					compact
				/>
			</div>
			{floatingMetrics && floatingMetrics.length > 0 ? (
				<FloatingProofCard
					metrics={floatingMetrics}
					accentColor={accentColor}
					placement="middle"
				/>
			) : null}
		</div>
	);
}

export async function renderOgCard({
	title,
	subtitle,
	eyebrow,
	badge = "Portfolio",
	pathLabel,
	footerText = "iOS  ·  Flutter  ·  Next.js  ·  TypeScript",
	footerRightText = "Since 2018",
	accentText,
	accentColor = "#22c55e",
	subtitleColor = "#b4b4bd",
	titleFontSize = 76,
	subtitleFontSize = 26,
	visualVariant = "hybrid",
	panelTitle = "Impact Board",
	panelRows = DEFAULT_PANEL_ROWS,
	floatingMetrics,
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
							padding: "44px 40px 34px 44px",
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
							{eyebrow ? (
								<div
									style={{
										display: "flex",
										alignItems: "center",
										gap: "8px",
										fontSize: 13,
										fontWeight: 600,
										letterSpacing: "0.14em",
										textTransform: "uppercase",
										color: accentColor,
										marginBottom: "14px",
									}}
								>
									<div
										style={{
											width: "18px",
											height: "2px",
											borderRadius: "999px",
											backgroundColor: accentColor,
											display: "flex",
										}}
									/>
									<span>{eyebrow}</span>
								</div>
							) : null}
							<div
								style={{
									fontFamily: "Bricolage Grotesque",
									fontSize: titleFontSize,
									fontWeight: 700,
									color: "#ffffff",
									letterSpacing: "-0.03em",
									lineHeight: 1.04,
									marginBottom: "18px",
								}}
							>
								{title}
							</div>
							<div
								style={{
									fontSize: subtitleFontSize,
									fontWeight: 400,
									color: subtitleColor,
									lineHeight: 1.44,
									maxWidth: "560px",
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
							width: "436px",
							height: "100%",
							borderLeft: "1px solid #1f1f24",
							backgroundColor: "#0a0a0d",
							backgroundImage: `radial-gradient(circle at 58% 42%, ${hexToRgba(accentColor, 0.16)} 0%, rgba(10,10,13,0) 68%)`,
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							padding: "20px",
							overflow: "hidden",
						}}
					>
						<RightShowcase
							accentColor={accentColor}
							visualVariant={visualVariant}
							panelTitle={panelTitle}
							panelRows={panelRows}
							floatingMetrics={floatingMetrics}
							pathLabel={pathLabel}
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
