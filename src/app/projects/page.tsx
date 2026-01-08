'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Github, ExternalLink, Sparkles, Smartphone, Globe, Layout } from 'lucide-react'

const flagshipProjects = [
  {
    id: 'chargespot',
    title: 'Chargespot',
    description: 'Comprehensive EV charging station finder and management platform for India',
    longDescription: 'Chargespot serves as a unified solution for discovering charging stations, managing charging sessions, planning trips, and handling payments - all from a single mobile application. Features real-time station discovery, AI-powered trip planning, live charging sessions with iOS Dynamic Island integration, multi-wallet payments, and comprehensive vehicle management.',
    technologies: ['Flutter', 'Dart', 'Google Maps', 'Razorpay', 'Firebase', 'PostgreSQL', 'Isar DB', 'Provider', 'OneSignal', 'Google Navigation SDK'],
    category: 'mobile',
    icon: Smartphone,
    highlights: ['iOS Live Activities & Widgets', 'AI-Powered Trip Planning', '100% Bilingual Support (EN/HI)', 'Multi-Wallet Integration', 'Offline-First Architecture'],
    githubUrl: null,
    liveUrl: null,
  },
  {
    id: 'opentribe',
    title: 'OpenTribe',
    description: 'Talent marketplace for Polkadot ecosystem connecting organizations with contributors',
    longDescription: 'OpenTribe is talent layer for Polkadot ecosystem - a centralized marketplace that connects Web3 organizations with skilled developers, designers, and contributors. Features include grant marketplace aggregation, multi-winner bounty management, professional talent profiles, and organization dashboards with real-time collaboration tools.',
    technologies: ['Next.js 15', 'React 19', 'TypeScript', 'PostgreSQL', 'Prisma', 'Polkadot (Dot)', 'Tailwind CSS', 'shadcn/ui', 'Better Auth', 'TanStack Query', 'React Email'],
    category: 'web',
    icon: Globe,
    highlights: ['Polkadot Blockchain Integration', 'Grant Marketplace Aggregation', 'Multi-Winner Bounties', 'Real-time Collaboration', 'Monorepo with Turborepo'],
    githubUrl: null,
    liveUrl: 'https://opentribe.io',
  },
  {
    id: 'domain-collective',
    title: 'Domain Collective',
    description: 'Unified domain management platform for multi-registrar portfolios',
    longDescription: 'Domain Collective standardizes multiple registrar APIs (GoDaddy, Namecheap, Gandi, Porkbun, Name.com, Cloudflare) into a single, intuitive interface. Manage domains, DNS records, and nameservers in real-time with automatic updates. Features intelligent API standardization, encrypted credential storage, and bulk operations.',
    technologies: ['Next.js 15', 'React 19', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'shadcn/ui', 'Better Auth', 'Resend', 'Biome'],
    category: 'web',
    icon: Layout,
    highlights: ['6+ Registrar Integrations', 'Real-time Synchronization', 'Provider Abstraction Layer', 'Encrypted Credential Storage', 'Background Job Processing'],
    githubUrl: null,
    liveUrl: null,
  },
]

const otherProjects = [
  {
    id: 4,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration and inventory management',
    longDescription: 'A comprehensive e-commerce platform featuring product listings, shopping cart, checkout process, and order management. Built with modern technologies for optimal performance.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    category: 'web',
    featured: false,
    githubUrl: 'https://github.com/itsTarun/ecommerce',
    liveUrl: 'https://ecommerce-demo.vercel.app',
  },
  {
    id: 5,
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates',
    longDescription: 'A modern task management tool enabling teams to collaborate effectively with features like task assignment, progress tracking, and real-time notifications.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    category: 'web',
    featured: false,
    githubUrl: 'https://github.com/itsTarun/task-manager',
    liveUrl: 'https://task-manager.vercel.app',
  },
  {
    id: 6,
    title: 'Weather Dashboard',
    description: 'Beautiful weather application with forecasts and interactive maps',
    longDescription: 'An intuitive weather dashboard providing current conditions, forecasts, and weather maps with location-based services and beautiful visualizations.',
    technologies: ['React', 'TypeScript', 'OpenWeather API', 'Framer Motion'],
    category: 'web',
    featured: false,
    githubUrl: 'https://github.com/itsTarun/weather-dashboard',
    liveUrl: 'https://weather-dashboard.vercel.app',
  },
  {
    id: 7,
    title: 'Blog Platform',
    description: 'Modern blogging platform with markdown support and SEO optimization',
    longDescription: 'A feature-rich blogging platform with markdown support, syntax highlighting, SEO optimization, and RSS feed generation.',
    technologies: ['Next.js', 'MDX', 'Tailwind CSS', 'Vercel'],
    category: 'web',
    featured: false,
    githubUrl: 'https://github.com/itsTarun/blog-platform',
    liveUrl: 'https://blog.itstarun.fyi',
  },
  {
    id: 8,
    title: 'Portfolio Website',
    description: 'Personal portfolio website with animations and modern design',
    longDescription: 'The website you&apos;re viewing! Built with Next.js, featuring smooth animations, dark/light mode, and responsive design.',
    technologies: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
    category: 'web',
    featured: true,
    githubUrl: 'https://github.com/itsTarun/portfolio-site',
    liveUrl: 'https://itstarun.fyi',
  },
]

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Apps' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'design', label: 'Design' },
]

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredProjects = otherProjects.filter((project) => {
    if (selectedCategory === 'all') return true
    return project.category === selectedCategory
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/50">
      <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-7xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12 text-center"
          >
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Projects
            </h1>
            <p className="text-lg text-muted-foreground">
              A showcase of my flagship projects and other work
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <div className="mb-8 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold">Flagship Projects</h2>
            </div>
            <motion.div
              variants={containerVariants}
              initial="initial"
              animate="animate"
              className="grid gap-8 lg:grid-cols-1"
            >
              {flagshipProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="overflow-hidden border-2 border-primary/20 shadow-2xl">
                    <CardHeader className="border-b bg-gradient-to-r from-primary/5 to-secondary/5">
                      <div className="flex items-start justify-between">
                        <div className="mb-2 flex items-center gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg">
                            <project.icon className="h-6 w-6" />
                          </div>
                          <div>
                            <CardTitle className="text-2xl">{project.title}</CardTitle>
                            <Badge className="mt-1 bg-primary" variant="secondary">
                              Flagship
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <CardDescription className="text-base">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-6">
                      <p className="mb-6 text-sm text-muted-foreground">
                        {project.longDescription}
                      </p>

                      <div className="mb-6">
                        <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                          Key Highlights
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.highlights.map((highlight, idx) => (
                            <Badge key={idx} variant="outline" className="border-primary/50">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex gap-2 border-t bg-muted/30">
                      {project.githubUrl && (
                        <Button variant="outline" className="flex-1" asChild>
                          <Link
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="gap-2"
                          >
                            <Github className="h-4 w-4" />
                            Code
                          </Link>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button className="flex-1" asChild>
                          <Link
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="gap-2"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Live
                          </Link>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-2xl font-bold">Other Projects</h2>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? 'default' : 'outline'}
                    onClick={() => setSelectedCategory(category.id)}
                    size="sm"
                  >
                    {category.label}
                  </Button>
                ))}
              </div>
            </div>

            <motion.div
              variants={containerVariants}
              initial="initial"
              animate="animate"
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="flex h-full flex-col shadow-lg">
                    <CardHeader>
                      <div className="mb-2 flex items-start justify-between">
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        {project.featured && (
                          <Badge className="ml-2" variant="secondary">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="mb-4 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex gap-2">
                      {project.githubUrl && (
                        <Button variant="outline" className="flex-1" asChild>
                          <Link
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="gap-2"
                          >
                            <Github className="h-4 w-4" />
                            Code
                          </Link>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button className="flex-1" asChild>
                          <Link
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="gap-2"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Live
                          </Link>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-12 text-center text-muted-foreground"
              >
                No projects found in this category.
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
