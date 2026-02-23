import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
	"inline-flex items-center rounded-none border-2 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors focus:outline-none focus:ring-1 focus:ring-primary",
	{
		variants: {
			variant: {
				default:
					"border-border bg-foreground text-background hover:bg-foreground/90",
				secondary: "border-border bg-muted text-foreground hover:bg-muted/80",
				outline: "border-border text-foreground bg-background",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

export interface BadgeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
	return (
		<div className={cn(badgeVariants({ variant }), className)} {...props} />
	);
}

export { Badge, badgeVariants };
