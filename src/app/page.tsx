'use client'

import Link from 'next/link'
import { ArrowRight, Code2, Rocket, Sparkles, Zap, Globe, Database } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
        >
          <Sparkles className="h-4 w-4" />
          <span>Welcome to my portfolio</span>
        </motion.div>

        <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="block"
          >
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Tarun
            </span>
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="block"
          >
            Full Stack Developer
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8 text-lg text-muted-foreground sm:text-xl"
        >
          I build modern web and mobile applications with cutting-edge technologies.
          For the past 3-4 years, I've been working on{' '}
          <span className="font-semibold text-foreground">
            Chargespot
          </span>
          (EV charging platform),{' '}
          <span className="font-semibold text-foreground">
            OpenTribe
          </span>
          (Polkadot talent marketplace), and{' '}
          <span className="font-semibold text-foreground">
            Domain Collective
          </span>
          (unified domain management).
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="mb-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <motion.div variants={fadeInUp}>
            <Link href="/projects">
              <Button size="lg" className="gap-2">
                View My Work
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Get In Touch
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid gap-8 md:grid-cols-3"
        >
          <Link href="/projects">
            <div className="rounded-lg border border-border bg-card p-6 text-card-foreground shadow-sm transition-all hover:scale-105 hover:shadow-md cursor-pointer">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Chargespot</h3>
              <p className="text-sm text-muted-foreground">
                EV charging platform for India with real-time station discovery and AI-powered trip planning
              </p>
            </div>
          </Link>

          <Link href="/projects">
            <div className="rounded-lg border border-border bg-card p-6 text-card-foreground shadow-sm transition-all hover:scale-105 hover:shadow-md cursor-pointer">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">OpenTribe</h3>
              <p className="text-sm text-muted-foreground">
                Talent marketplace for the Polkadot ecosystem connecting organizations with contributors
              </p>
            </div>
          </Link>

          <Link href="/projects">
            <div className="rounded-lg border border-border bg-card p-6 text-card-foreground shadow-sm transition-all hover:scale-105 hover:shadow-md cursor-pointer">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Domain Collective</h3>
              <p className="text-sm text-muted-foreground">
                Unified domain management platform consolidating multiple registrars into one dashboard
              </p>
            </div>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
