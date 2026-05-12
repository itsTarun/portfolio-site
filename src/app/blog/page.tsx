import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const revalidate = 3600;

export const metadata: Metadata = {
	title: "Blog - Tarun Sharma",
};

export default function BlogPage() {
	notFound();
}
