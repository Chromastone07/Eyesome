import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Slide } from '@/lib/quickread-types'
import { quickReadRegistry } from '@/lib/quickread-registry'

const CONTENT_DIR = path.join(process.cwd(), 'content')

export interface ChallengeMeta {
  slug: string
  title: string
  description: string
  totalDays: number
  icon: string
  accent: 'yellow' | 'blue' | 'green' | 'red' | 'purple'
  level: string
}

export interface DayMeta {
  day: number
  title: string
  topic: string
  slug: string
  available: boolean
}

/**
 * Returns metadata for every challenge (reads each folder's index.json)
 */
export function getAllChallenges(): ChallengeMeta[] {
  if (!fs.existsSync(CONTENT_DIR)) return []

  const folders = fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => fs.statSync(path.join(CONTENT_DIR, f)).isDirectory())

  return folders.map((folder) => {
    const indexPath = path.join(CONTENT_DIR, folder, 'index.json')
    const raw = fs.readFileSync(indexPath, 'utf-8')
    const data = JSON.parse(raw)
    return { slug: folder, ...data } as ChallengeMeta
  })
}

/**
 * Returns metadata for a single challenge
 */
export function getChallenge(slug: string): ChallengeMeta | null {
  const indexPath = path.join(CONTENT_DIR, slug, 'index.json')
  if (!fs.existsSync(indexPath)) return null
  const raw = fs.readFileSync(indexPath, 'utf-8')
  const data = JSON.parse(raw)
  return { slug, ...data } as ChallengeMeta
}

/**
 * Returns a list of all day files (with frontmatter) for a challenge,
 * sorted by day number. Days that don't have a file yet are marked locked.
 */
export function getChallengeDays(slug: string): DayMeta[] {
  const challenge = getChallenge(slug)
  if (!challenge) return []

  const challengeDir = path.join(CONTENT_DIR, slug)
  const days: DayMeta[] = []

  for (let i = 1; i <= challenge.totalDays; i++) {
    const dayNum = String(i).padStart(2, '0')
    const filePath = path.join(challengeDir, `day-${dayNum}.mdx`)

    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, 'utf-8')
      const { data } = matter(raw)
      days.push({
        day: i,
        title: data.title || `Day ${i}`,
        topic: data.topic || '',
        slug: `day-${dayNum}`,
        available: true,
      })
    } else {
      days.push({
        day: i,
        title: `Day ${i}`,
        topic: 'Coming soon',
        slug: `day-${dayNum}`,
        available: false,
      })
    }
  }

  return days
}

/**
 * Returns the raw MDX content + frontmatter for a single day
 */
export function getDayContent(challengeSlug: string, daySlug: string) {
  const filePath = path.join(CONTENT_DIR, challengeSlug, `${daySlug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)

  return { meta: data, content }
}

/**
 * Returns the Quick Read slide data for a day, if registered.
 * See quickread-registry.ts — each day's slide data must be
 * registered there for static bundling to work correctly.
 */
export function getQuickRead(
  challengeSlug: string,
  daySlug: string
): Slide[] | null {
  const key = `${challengeSlug}/${daySlug}`
  return quickReadRegistry[key] ?? null
}
export function getDayNeighbors(
  challengeSlug: string,
  currentDay: number
): { prev: DayMeta | null; next: DayMeta | null } {
  const challenge = getChallenge(challengeSlug)
  if (!challenge) return { prev: null, next: null }

  const days = getChallengeDays(challengeSlug)

  const prev = currentDay > 1 ? days[currentDay - 2] ?? null : null
  const next = currentDay < challenge.totalDays ? days[currentDay] ?? null : null

  return { prev, next }
}
