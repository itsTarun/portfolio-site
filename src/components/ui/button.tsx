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
					"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
					{
						"bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg":
							variant === "default",
						"border-2 border-border bg-background hover:bg-muted hover:border-primary/50":
							variant === "outline",
						"hover:bg-muted hover:text-foreground": variant === "ghost",
						"text-primary underline-offset-4 hover:underline":
							variant === "link",
					},
					{
						"h-9 px-4 py-2": size === "default",
						"h-8 px-3 text-sm": size === "sm",
						"h-11 px-8": size === "lg",
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
