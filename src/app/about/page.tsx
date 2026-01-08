'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Mail, MapPin, Calendar } from 'lucide-react'

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

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'HTML/CSS'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL'] },
  { category: 'Tools & Others', items: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma', 'Jest'] },
]

const experience = [
  {
    id: 1,
    title: 'Full Stack Developer',
    company: 'Tech Company',
    location: 'Remote',
    period: '2023 - Present',
    description: [
      'Developed and maintained web applications using Next.js and React',
      'Implemented RESTful APIs and integrated with third-party services',
      'Optimized application performance and improved page load times',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'PostgreSQL', 'AWS'],
  },
  {
    id: 2,
    title: 'Frontend Developer',
    company: 'Digital Agency',
    location: 'New York',
    period: '2021 - 2023',
    description: [
      'Built responsive and accessible user interfaces',
      'Collaborated with designers to implement pixel-perfect designs',
      'Created reusable component libraries',
    ],
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Framer Motion'],
  },
]

const education = [
  {
    id: 1,
    degree: 'Bachelor of Science in Computer Science',
    school: 'University',
    period: '2017 - 2021',
    description: 'Focus on software engineering, algorithms, and web development',
  },
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            About Me
          </h1>
          <p className="text-lg text-muted-foreground">
            Passionate Full Stack Developer creating modern web experiences
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12 rounded-lg border border-border bg-card p-6 text-card-foreground shadow-sm"
        >
          <p className="mb-4 text-lg leading-relaxed">
            I&apos;m a Full Stack Developer with a passion for building modern, scalable web
            applications. With expertise in both frontend and backend technologies, I create
            seamless user experiences and robust solutions.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            I love solving complex problems and turning ideas into reality. When I&apos;m not
            coding, you can find me exploring new technologies, contributing to open-source
            projects, or sharing knowledge with the developer community.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="mb-12 grid gap-6"
        >
          <motion.h2 variants={fadeInUp} className="text-2xl font-bold">
            Skills & Expertise
          </motion.h2>
          <div className="grid gap-6 md:grid-cols-3">
            {skills.map((skillGroup) => (
              <motion.div
                key={skillGroup.category}
                variants={fadeInUp}
                className="rounded-lg border border-border bg-card p-6 text-card-foreground shadow-sm"
              >
                <h3 className="mb-4 font-semibold">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="mb-12"
        >
          <motion.h2 variants={fadeInUp} className="mb-6 text-2xl font-bold">
            Experience
          </motion.h2>
          <div className="space-y-6">
            {experience.map((exp) => (
              <motion.div
                key={exp.id}
                variants={fadeInUp}
                className="rounded-lg border border-border bg-card p-6 text-card-foreground shadow-sm"
              >
                <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </span>
                  </div>
                </div>
                <ul className="mb-4 list-inside list-disc space-y-2 text-muted-foreground">
                  {exp.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="mb-12"
        >
          <motion.h2 variants={fadeInUp} className="mb-6 text-2xl font-bold">
            Education
          </motion.h2>
          <div className="rounded-lg border border-border bg-card p-6 text-card-foreground shadow-sm">
            {education.map((edu) => (
              <div key={edu.id}>
                <h3 className="mb-1 text-xl font-semibold">{edu.degree}</h3>
                <p className="mb-2 text-muted-foreground">{edu.school}</p>
                <p className="text-sm text-muted-foreground">{edu.period}</p>
                <p className="mt-2 text-muted-foreground">{edu.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="rounded-lg border border-border bg-primary/10 p-8 text-center"
        >
          <h2 className="mb-4 text-2xl font-bold">Let&apos;s Work Together</h2>
          <p className="mb-6 text-muted-foreground">
            Interested in collaborating on a project or have a question?
          </p>
          <a
            href="mailto:itstarun1994@gmail.com"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Mail className="h-4 w-4" />
            Get In Touch
          </a>
        </motion.div>
      </motion.div>
    </div>
  )
}
