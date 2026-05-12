import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const revalidate = 3600;

export async function generateStaticParams() {
	return [];
}

export function generateMetadata(): Metadata {
	return { title: "Post Not Found" };
}

export default function BlogPage() {
	notFound();
}
