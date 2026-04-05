const sharedFormFieldClasses =
	"w-full border-border bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50";

export const inputFieldClasses = `${sharedFormFieldClasses} flex h-10 rounded-none border-2 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground`;

export const textareaFieldClasses = `${sharedFormFieldClasses} flex min-h-[80px] rounded-md border`;
