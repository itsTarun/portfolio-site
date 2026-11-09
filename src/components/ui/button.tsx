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
					"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
					{
						"bg-foreground text-background hover:bg-foreground/90 border border-transparent":
							variant === "default",
						"border border-border/80 bg-background/50 text-foreground hover:bg-muted/50 hover:border-border":
							variant === "outline",
						"border border-transparent bg-transparent text-foreground hover:bg-muted/50":
							variant === "ghost",
						"border border-transparent bg-transparent text-foreground underline underline-offset-4":
							variant === "link",
					},
					{
						"h-10 px-5 text-sm": size === "default",
						"h-8 px-3.5 text-xs": size === "sm",
						"h-12 px-7 text-sm sm:text-base": size === "lg",
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
