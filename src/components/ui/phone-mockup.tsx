"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const screens = [
	{
		id: "chargespot",
		label: "Chargespot · EV Charging",
		content: <ChargespotScreen />,
	},
	{
		id: "ios",
		label: "iOS · DailyObjects",
		content: <IOSScreen />,
	},
	{
		id: "flutter",
		label: "Flutter · Droidsize",
		content: <FlutterScreen />,
	},
];

function ChargespotScreen() {
	return (
		<div className="w-full h-full bg-slate-950 relative overflow-hidden select-none">
			{/* Map grid background */}
			<div className="absolute inset-0 opacity-20">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage:
							"linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
						backgroundSize: "24px 24px",
					}}
				/>
			</div>
			{/* Road lines */}
			<div className="absolute inset-0 opacity-25">
				<div className="absolute top-1/3 left-0 right-0 h-px bg-slate-500" />
				<div className="absolute top-2/3 left-0 right-0 h-px bg-slate-500" />
				<div className="absolute left-1/3 top-0 bottom-0 w-px bg-slate-500" />
				<div className="absolute left-2/3 top-0 bottom-0 w-px bg-slate-500" />
			</div>

			{/* Station pins */}
			<motion.div
				className="absolute"
				style={{ top: "30%", left: "45%" }}
				animate={{ y: [0, -4, 0] }}
				transition={{
					duration: 2,
					repeat: Number.POSITIVE_INFINITY,
					ease: "easeInOut",
				}}
			>
				<div className="relative">
					<div className="w-5 h-5 rounded-full bg-emerald-400 border-2 border-white shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
					<div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-white" />
				</div>
			</motion.div>

			<div
				className="absolute w-4 h-4 rounded-full bg-emerald-400/60 border border-emerald-300"
				style={{ top: "55%", left: "62%" }}
			/>
			<div
				className="absolute w-4 h-4 rounded-full bg-yellow-400/70 border border-yellow-300"
				style={{ top: "40%", left: "22%" }}
			/>
			<div
				className="absolute w-3.5 h-3.5 rounded-full bg-red-400/60 border border-red-300"
				style={{ top: "65%", left: "35%" }}
			/>

			{/* Current location ring */}
			<motion.div
				className="absolute"
				style={{ top: "48%", left: "50%" }}
				animate={{ scale: [1, 1.4, 1], opacity: [0.8, 0.3, 0.8] }}
				transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
			>
				<div className="w-6 h-6 rounded-full border-2 border-blue-400 -translate-x-1/2 -translate-y-1/2" />
			</motion.div>
			<div
				className="absolute w-3 h-3 rounded-full bg-blue-500 border-2 border-white"
				style={{ top: "48%", left: "50%", transform: "translate(-50%, -50%)" }}
			/>

			{/* Bottom card */}
			<div className="absolute bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur-sm p-3 border-t border-slate-700">
				<div className="flex items-center justify-between mb-1.5">
					<div>
						<div className="text-white text-[11px] font-bold tracking-wide">
							Nearby Stations
						</div>
						<div className="text-emerald-400 text-[9px] tracking-widest uppercase">
							3 available
						</div>
					</div>
					<div className="flex items-center gap-1">
						<div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
						<span className="text-emerald-400 text-[9px]">Live</span>
					</div>
				</div>
				<div className="flex gap-1.5">
					{["AC · 0.3km", "DC · 0.8km", "AC · 1.2km"].map((s) => (
						<div
							key={s}
							className="flex-1 bg-slate-800 rounded px-1.5 py-1 text-[8px] text-slate-300 text-center"
						>
							{s}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

function IOSScreen() {
	const items = [
		{ name: "Phone Case", price: "₹1,299", badge: "Best Seller" },
		{ name: "Laptop Sleeve", price: "₹2,499", badge: "New" },
		{ name: "Watch Strap", price: "₹899", badge: null },
		{ name: "Desk Mat", price: "₹1,799", badge: "Sale" },
	];

	return (
		<div className="w-full h-full bg-gray-50 relative overflow-hidden select-none">
			{/* Search bar */}
			<div className="bg-white px-3 pt-2 pb-2 shadow-sm">
				<div className="flex items-center gap-2 bg-gray-100 rounded-xl px-3 py-1.5">
					<svg
						className="w-3 h-3 text-gray-400"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-label="Search"
					>
						<title>Search</title>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
					<span className="text-gray-400 text-[10px]">Search products…</span>
				</div>
			</div>

			{/* Banner */}
			<div className="mx-3 mt-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-3 text-white">
				<div className="text-[9px] uppercase tracking-widest opacity-80">
					New Collection
				</div>
				<div className="text-[12px] font-bold mt-0.5">Premium Accessories</div>
				<div className="text-[9px] opacity-75 mt-0.5">
					Free shipping on ₹999+
				</div>
			</div>

			{/* Product list */}
			<div className="px-3 mt-2.5 space-y-2">
				{items.map((item) => (
					<div
						key={item.name}
						className="bg-white rounded-xl px-3 py-2 flex items-center justify-between shadow-sm"
					>
						<div className="flex items-center gap-2">
							<div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-100 to-purple-100" />
							<div>
								<div className="text-[10px] font-semibold text-gray-800">
									{item.name}
								</div>
								<div className="text-[9px] text-gray-400">{item.price}</div>
							</div>
						</div>
						{item.badge && (
							<span className="text-[8px] bg-indigo-50 text-indigo-600 px-1.5 py-0.5 rounded-full font-semibold">
								{item.badge}
							</span>
						)}
					</div>
				))}
			</div>
		</div>
	);
}

function FlutterScreen() {
	const categories = ["All", "UI", "Booking", "Profile"];

	return (
		<div className="w-full h-full bg-white relative overflow-hidden select-none">
			{/* Header */}
			<div className="bg-sky-600 px-3 pt-2 pb-4">
				<div className="text-white/70 text-[9px] uppercase tracking-widest">
					Dashboard
				</div>
				<div className="text-white text-[13px] font-bold mt-0.5">
					Good morning, Tarun
				</div>
			</div>

			{/* Stats card */}
			<div className="mx-3 -mt-2 bg-white rounded-xl shadow-lg p-3 flex gap-3">
				{[
					{ label: "Sessions", value: "2.4k" },
					{ label: "Crash-Free", value: "99%" },
					{ label: "Rating", value: "4.8★" },
				].map((stat) => (
					<div key={stat.label} className="flex-1 text-center">
						<div className="text-[13px] font-bold text-sky-700">
							{stat.value}
						</div>
						<div className="text-[8px] text-gray-400">{stat.label}</div>
					</div>
				))}
			</div>

			{/* Category chips */}
			<div className="flex gap-1.5 px-3 mt-3 overflow-x-auto">
				{categories.map((cat, i) => (
					<div
						key={cat}
						className={`text-[9px] px-2.5 py-1 rounded-full whitespace-nowrap font-semibold ${
							i === 0 ? "bg-sky-600 text-white" : "bg-gray-100 text-gray-500"
						}`}
					>
						{cat}
					</div>
				))}
			</div>

			{/* Feature list */}
			<div className="px-3 mt-3 space-y-2">
				{[
					{ title: "Push Notifications", status: "Active", color: "green" },
					{ title: "Backend-Driven UI", status: "Enabled", color: "blue" },
					{ title: "Offline Support", status: "Synced", color: "purple" },
				].map((feat) => (
					<div
						key={feat.title}
						className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2"
					>
						<span className="text-[10px] font-medium text-gray-700">
							{feat.title}
						</span>
						<span
							className={`text-[8px] font-semibold px-1.5 py-0.5 rounded-full ${
								feat.color === "green"
									? "bg-green-100 text-green-700"
									: feat.color === "blue"
										? "bg-blue-100 text-blue-700"
										: "bg-purple-100 text-purple-700"
							}`}
						>
							{feat.status}
						</span>
					</div>
				))}
			</div>
		</div>
	);
}

export function PhoneMockup() {
	const [current, setCurrent] = useState(0);
	const [direction, setDirection] = useState(1);

	useEffect(() => {
		const interval = setInterval(() => {
			setDirection(1);
			setCurrent((prev) => (prev + 1) % screens.length);
		}, 3500);
		return () => clearInterval(interval);
	}, []);

	const variants = {
		enter: (dir: number) => ({
			x: dir > 0 ? 60 : -60,
			opacity: 0,
		}),
		center: {
			x: 0,
			opacity: 1,
		},
		exit: (dir: number) => ({
			x: dir > 0 ? -60 : 60,
			opacity: 0,
		}),
	};

	return (
		<div className="flex flex-col items-center gap-3">
			{/* Phone frame */}
			<motion.div
				animate={{ y: [0, -6, 0] }}
				transition={{
					duration: 4,
					repeat: Number.POSITIVE_INFINITY,
					ease: "easeInOut",
				}}
				className="relative"
			>
				{/* Outer phone shell */}
				<div
					className="relative border-2 border-border bg-card neo-shadow"
					style={{
						width: 200,
						height: 400,
						borderRadius: 32,
					}}
				>
					{/* Inner bezel */}
					<div
						className="absolute bg-slate-950 overflow-hidden"
						style={{
							inset: 6,
							borderRadius: 26,
						}}
					>
						{/* Dynamic island / notch */}
						<div
							className="absolute top-2 left-1/2 -translate-x-1/2 z-10 bg-black"
							style={{
								width: 72,
								height: 22,
								borderRadius: 12,
							}}
						/>

						{/* Status bar */}
						<div className="absolute top-2.5 left-4 right-4 z-10 flex items-center justify-between px-1">
							<span
								className="text-white font-semibold"
								style={{ fontSize: 8 }}
							>
								9:41
							</span>
							<div className="flex items-center gap-1">
								<div className="flex gap-0.5 items-end">
									{[3, 5, 7, 9].map((h) => (
										<div
											key={h}
											className="w-0.5 bg-white rounded-sm"
											style={{ height: h }}
										/>
									))}
								</div>
								<svg
									width="10"
									height="8"
									viewBox="0 0 10 8"
									fill="white"
									aria-label="Wi-Fi"
								>
									<title>Wi-Fi</title>
									<path d="M5 2.5c1.1 0 2 .45 2.7 1.17l.9-.9C7.7 1.68 6.42 1 5 1S2.3 1.68 1.4 2.77l.9.9C3 2.95 3.9 2.5 5 2.5zm0-2.5C3.07 0 1.33.8 0 2.07l.9.9C2.03 1.78 3.43 1 5 1s2.97.78 4.1 1.97l.9-.9C8.67.8 6.93 0 5 0zm0 5c-.83 0-1.5.67-1.5 1.5S4.17 8 5 8s1.5-.67 1.5-1.5S5.83 5 5 5z" />
								</svg>
								<div className="flex gap-px items-center border border-white/70 rounded-sm px-0.5">
									<div
										className="bg-white rounded-sm"
										style={{ width: 12, height: 6 }}
									/>
								</div>
							</div>
						</div>

						{/* Screen content */}
						<div className="absolute top-8 inset-x-0 bottom-0 overflow-hidden">
							<AnimatePresence initial={false} custom={direction} mode="wait">
								<motion.div
									key={screens[current].id}
									custom={direction}
									variants={variants}
									initial="enter"
									animate="center"
									exit="exit"
									transition={{ duration: 0.35, ease: "easeInOut" }}
									className="absolute inset-0"
								>
									{screens[current].content}
								</motion.div>
							</AnimatePresence>
						</div>

						{/* Home indicator */}
						<div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-20 h-1 bg-white/40 rounded-full" />
					</div>

					{/* Side buttons (decorative) */}
					<div className="absolute right-full top-16 w-0.5 h-10 bg-border -mr-px rounded-l-sm" />
					<div className="absolute right-full top-28 w-0.5 h-7 bg-border -mr-px rounded-l-sm" />
					<div className="absolute left-full top-20 w-0.5 h-14 bg-border -ml-px rounded-r-sm" />
				</div>
			</motion.div>

			{/* Screen label + dots */}
			<div className="flex flex-col items-center gap-2">
				<p className="text-[10px] text-muted-foreground tracking-[0.15em] uppercase">
					{screens[current].label}
				</p>
				<div className="flex gap-1.5">
					{screens.map((_, i) => (
						<button
							key={screens[i].id}
							type="button"
							onClick={() => {
								setDirection(i > current ? 1 : -1);
								setCurrent(i);
							}}
							className={`h-1.5 rounded-full transition-all duration-300 ${
								i === current
									? "w-5 bg-foreground"
									: "w-1.5 bg-muted-foreground/40"
							}`}
							aria-label={`View ${screens[i].label}`}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
