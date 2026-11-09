const sharedFormFieldClasses =
	"w-full rounded-xl border border-border/60 bg-muted/20 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:border-border disabled:cursor-not-allowed disabled:opacity-50";

export const inputFieldClasses = `${sharedFormFieldClasses} flex h-11 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground`;

export const textareaFieldClasses = `${sharedFormFieldClasses} flex min-h-[100px]`;
