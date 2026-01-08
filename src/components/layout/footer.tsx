import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

const socialLinks = [
  { href: 'https://github.com/itsTarun', icon: Github, label: 'GitHub' },
  {
    href: 'https://www.linkedin.com/in/iamtarun/',
    icon: Linkedin,
    label: 'LinkedIn',
  },
  { href: 'https://x.com/itstarun1381995', icon: Twitter, label: 'Twitter/X' },
  { href: 'mailto:itstarun1994@gmail.com', icon: Mail, label: 'Email' },
]

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="mb-4 text-xl font-bold text-primary">itstarun</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Building modern web experiences with cutting-edge technologies.
              Passionate about creating seamless user interfaces and scalable
              applications.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>itstarun1994@gmail.com</li>
              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-primary"
                >
                  Send a message
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Tarun. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
