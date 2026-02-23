import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "default" | "outline" | "ghost" | "link";
	size?: "default" | "sm" | "lg" | "icon";
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			variant = "default",
			size = "default",
			asChild = false,
			...props
		},
		ref,
	) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn(
					"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none border-2 border-border font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
					{
						"bg-primary text-primary-foreground shadow-[4px_4px_0_hsl(var(--border))] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_hsl(var(--border))]":
							variant === "default",
						"bg-background text-foreground shadow-[4px_4px_0_hsl(var(--border))] hover:bg-muted hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_hsl(var(--border))]":
							variant === "outline",
						"border-transparent bg-transparent text-foreground hover:bg-muted":
							variant === "ghost",
						"border-transparent bg-transparent text-foreground underline underline-offset-4":
							variant === "link",
					},
					{
						"h-10 px-5 text-sm tracking-[0.08em]": size === "default",
						"h-9 px-4 text-xs tracking-[0.16em]": size === "sm",
						"h-12 px-8 text-sm tracking-[0.1em]": size === "lg",
						"h-10 w-10": size === "icon",
					},
					className,
				)}
				ref={ref}
				{...props}
			/>
		);
	},
);
Button.displayName = "Button";

export { Button };
