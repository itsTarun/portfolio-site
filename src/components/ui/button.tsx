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
					"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50",
					{
						"bg-primary text-primary-foreground hover:bg-primary/90":
							variant === "default",
						"border border-border bg-background hover:bg-muted":
							variant === "outline",
						"hover:bg-muted": variant === "ghost",
						"text-primary underline-offset-4 hover:underline":
							variant === "link",
					},
					{
						"h-9 px-4 py-2": size === "default",
						"h-8 px-3 text-sm": size === "sm",
						"h-10 px-8": size === "lg",
						"h-9 w-9": size === "icon",
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
