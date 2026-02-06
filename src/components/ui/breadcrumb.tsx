import { ChevronRight, Home } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";

export interface BreadcrumbItem {
	label: string;
	href: Route;
}

interface BreadcrumbProps {
	items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
	return (
		<nav className="mb-6" aria-label="Breadcrumb">
			<ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
				{items.map((item, index) => (
					<li key={item.href} className="flex items-center gap-2">
						{index === 0 && <Home className="h-4 w-4" />}
						<Link
							href={item.href}
							className={`transition-colors hover:text-primary ${
								index === items.length - 1
									? "font-semibold text-foreground"
									: ""
							}`}
							aria-current={index === items.length - 1 ? "page" : undefined}
						>
							{item.label}
						</Link>
						{index < items.length - 1 && (
							<ChevronRight className="h-4 w-4 text-muted-foreground/50" />
						)}
					</li>
				))}
			</ol>
		</nav>
	);
}
