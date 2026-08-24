"use client";

import { MotionConfig } from "framer-motion";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type * as React from "react";

export function ThemeProvider({
	children,
	...props
}: React.ComponentProps<typeof NextThemesProvider>) {
	return (
		<NextThemesProvider {...props}>
			{/* Every framer-motion consumer renders below this, so one MotionConfig
			    covers the whole tree. `reducedMotion="user"` makes framer drop
			    transitions on positional keys (x/y/scale/rotate/width/height/inset)
			    to instant when the OS asks for reduced motion; opacity is left
			    animating on purpose, since a cross-fade isn't motion. */}
			<MotionConfig reducedMotion="user">{children}</MotionConfig>
		</NextThemesProvider>
	);
}
