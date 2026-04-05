interface NumberedFeatureListProps {
	features: string[];
}

export function NumberedFeatureList({ features }: NumberedFeatureListProps) {
	return (
		<ul className="space-y-4">
			{features.map((feature, index) => (
				<li key={feature} className="flex gap-3">
					<div className="flex h-6 w-6 flex-shrink-0 items-center justify-center border-2 border-border text-xs font-semibold">
						{index + 1}
					</div>
					<p className="text-muted-foreground">{feature}</p>
				</li>
			))}
		</ul>
	);
}
