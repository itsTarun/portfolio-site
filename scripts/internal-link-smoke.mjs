import { spawn } from "node:child_process";

const PORT = Number(process.env.INTERNAL_LINK_PORT || 4010);
const BASE_URL = `http://127.0.0.1:${PORT}`;

const CORE_ROUTES = [
	"/",
	"/projects",
	"/projects/chargespot",
	"/projects/domain-collective",
	"/projects/opentribe",
	"/blog",
	"/privacy",
];

const EXTRA_ROUTES = (process.env.INTERNAL_LINK_EXTRA_ROUTES || "")
	.split(",")
	.map((route) => route.trim())
	.filter(Boolean);

const SKIP_EXTENSIONS = [
	".css",
	".js",
	".json",
	".png",
	".jpg",
	".jpeg",
	".gif",
	".svg",
	".webp",
	".ico",
	".txt",
	".xml",
	".pdf",
];

function normalizeRoute(route) {
	if (!route.startsWith("/")) {
		return null;
	}

	const withoutHash = route.split("#")[0];
	if (!withoutHash) {
		return null;
	}

	try {
		const url = new URL(withoutHash, BASE_URL);
		if (url.origin !== BASE_URL) {
			return null;
		}
		if (SKIP_EXTENSIONS.some((ext) => url.pathname.endsWith(ext))) {
			return null;
		}
		if (url.pathname === "/") {
			return "/";
		}
		return `${url.pathname}${url.search}`;
	} catch {
		return null;
	}
}

function extractInternalRoutesFromHtml(html) {
	const hrefPattern = /href=["']([^"']+)["']/g;
	const discovered = new Set();

	for (const match of html.matchAll(hrefPattern)) {
		const href = match[1];
		if (!href || href.startsWith("mailto:") || href.startsWith("tel:")) {
			continue;
		}
		if (
			href.startsWith("http://") ||
			href.startsWith("https://") ||
			href.startsWith("//")
		) {
			continue;
		}

		const normalized = normalizeRoute(href);
		if (normalized) {
			discovered.add(normalized);
		}
	}

	return [...discovered];
}

async function waitForServerReady(timeoutMs = 30000) {
	const start = Date.now();
	while (Date.now() - start < timeoutMs) {
		try {
			const response = await fetch(BASE_URL);
			if (response.status < 500) {
				return;
			}
		} catch {
			// Keep polling until server is available.
		}
		await new Promise((resolve) => setTimeout(resolve, 500));
	}
	throw new Error(`Timed out waiting for server at ${BASE_URL}`);
}

async function run() {
	console.log(
		`Starting Next.js server on port ${PORT} for internal link smoke checks...`,
	);
	const server = spawn("npm", ["run", "start", "--", "--port", String(PORT)], {
		stdio: ["ignore", "pipe", "pipe"],
		env: {
			...process.env,
			PORT: String(PORT),
		},
	});

	server.stdout.on("data", (chunk) => process.stdout.write(chunk));
	server.stderr.on("data", (chunk) => process.stderr.write(chunk));

	try {
		await waitForServerReady();

		const queue = [...CORE_ROUTES, ...EXTRA_ROUTES]
			.map(normalizeRoute)
			.filter(Boolean);
		const visited = new Set();
		const failures = [];

		while (queue.length > 0) {
			const route = queue.shift();
			if (!route || visited.has(route)) {
				continue;
			}
			visited.add(route);

			const url = `${BASE_URL}${route}`;
			const response = await fetch(url, { redirect: "manual" });

			if (response.status >= 400) {
				failures.push(`${route} -> ${response.status}`);
				continue;
			}

			const contentType = response.headers.get("content-type") || "";
			if (!contentType.includes("text/html")) {
				continue;
			}

			const html = await response.text();
			const discoveredRoutes = extractInternalRoutesFromHtml(html);
			for (const discoveredRoute of discoveredRoutes) {
				if (!visited.has(discoveredRoute)) {
					queue.push(discoveredRoute);
				}
			}
		}

		if (failures.length > 0) {
			throw new Error(
				`Internal link smoke check failed:\n${failures.map((failure) => `- ${failure}`).join("\n")}`,
			);
		}

		console.log(
			`Internal link smoke check passed. Checked ${visited.size} route(s).`,
		);
	} finally {
		server.kill("SIGTERM");
	}
}

run().catch((error) => {
	console.error(error instanceof Error ? error.message : error);
	process.exitCode = 1;
});
