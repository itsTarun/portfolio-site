import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

function formatDateForLocale(
	date: string,
	options: Intl.DateTimeFormatOptions,
): string {
	return new Date(date).toLocaleDateString("en-US", options);
}

export function formatDate(date: string): string {
	return formatDateForLocale(date, {
		month: "long",
		year: "numeric",
	});
}

export function formatBlogDate(
	date: string,
	style: "short" | "long" = "long",
): string {
	return formatDateForLocale(date, {
		month: style === "short" ? "short" : "long",
		day: "numeric",
		year: "numeric",
	});
}

export function sortByDateDesc<T extends { date: string }>(items: T[]): T[] {
	return [...items].sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
	);
}

export function calculateDuration(startDate: string, endDate?: string): string {
	const start = new Date(startDate);
	const end = endDate ? new Date(endDate) : new Date();

	const years = end.getFullYear() - start.getFullYear();
	const months = end.getMonth() - start.getMonth();

	const totalMonths = years * 12 + months;

	if (totalMonths === 1) return "1 month";
	if (totalMonths < 12) return `${totalMonths} months`;
	return `${years}+ years`;
}

export function getSkillLevelPercentage(level: string): number {
	const levels = {
		beginner: 25,
		intermediate: 50,
		advanced: 75,
		expert: 100,
	};
	return levels[level as keyof typeof levels] || 0;
}
