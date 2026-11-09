interface NumberedFeatureListProps {
	features: string[];
}

export function NumberedFeatureList({ features }: NumberedFeatureListProps) {
	return (
		<ul className="space-y-4">
			{features.map((feature, index) => (
				<li key={feature} className="flex gap-3">
					<div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md border border-border/60 bg-muted/30 text-xs font-mono font-medium text-foreground">
						{index + 1}
					</div>
					<p className="text-muted-foreground">{feature}</p>
				</li>
			))}
		</ul>
	);
}
