'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Github, ExternalLink, Filter } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with payment integration and inventory management',
    longDescription: 'A comprehensive e-commerce platform featuring product listings, shopping cart, checkout process, and order management. Built with modern technologies for optimal performance.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    category: 'web',
    featured: true,
    githubUrl: 'https://github.com/itsTarun/ecommerce',
    liveUrl: 'https://ecommerce-demo.vercel.app',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates',
    longDescription: 'A modern task management tool enabling teams to collaborate effectively with features like task assignment, progress tracking, and real-time notifications.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    category: 'web',
    featured: true,
    githubUrl: 'https://github.com/itsTarun/task-manager',
    liveUrl: 'https://task-manager.vercel.app',
  },
  {
    id: 3,
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
    id: 4,
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
    id: 5,
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
  const [showFeatured, setShowFeatured] = useState(false)

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === 'all') return true
    return project.category === selectedCategory
  })

  const displayProjects = showFeatured 
    ? filteredProjects.filter(p => p.featured)
    : filteredProjects

  return (
    <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-6xl"
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
            A showcase of my work and side projects
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.label}
              </Button>
            ))}
          </div>
          <Button
            variant={showFeatured ? 'default' : 'outline'}
            onClick={() => setShowFeatured(!showFeatured)}
            className="gap-2"
          >
            <Filter className="h-4 w-4" />
            {showFeatured ? 'Show All' : 'Featured Only'}
          </Button>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {displayProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="flex h-full flex-col">
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

        {displayProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-12 text-center text-muted-foreground"
          >
            No projects found in this category.
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
