import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Me | Tarun - Full Stack Developer',
  description: 'Learn about Tarun - Full Stack Developer. View my skills, experience, education, and background in web development.',
  alternates: {
    canonical: 'https://itstarun.fyi/about',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
