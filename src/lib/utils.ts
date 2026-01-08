import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  })
}

export function calculateDuration(startDate: string, endDate?: string): string {
  const start = new Date(startDate)
  const end = endDate ? new Date(endDate) : new Date()
  
  const years = end.getFullYear() - start.getFullYear()
  const months = end.getMonth() - start.getMonth()
  
  const totalMonths = years * 12 + months
  
  if (totalMonths === 1) return '1 month'
  if (totalMonths < 12) return `${totalMonths} months`
  return `${years}+ years`
}

export function getSkillLevelPercentage(level: string): number {
  const levels = {
    beginner: 25,
    intermediate: 50,
    advanced: 75,
    expert: 100,
  }
  return levels[level as keyof typeof levels] || 0
}
