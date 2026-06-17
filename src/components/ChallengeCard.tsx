import Link from 'next/link'
import { ChallengeMeta, getChallengeDays } from '@/lib/content'
import ChallengeProgress from './ChallengeProgress'
import { Puzzle, Palette, Layers, Folder } from 'lucide-react'

const iconMap: Record<string, React.ReactNode> = {
  Puzzle: <Puzzle className="h-8 w-8" />,
  Palette: <Palette className="h-8 w-8" />,
  Layers: <Layers className="h-8 w-8" />,
}

const accentMap = {
  yellow: {
    border: 'border-accent-yellow/30 hover:border-accent-yellow',
    text: 'text-accent-yellow',
    bar: 'bg-accent-yellow',
  },
  blue: {
    border: 'border-accent-blue/30 hover:border-accent-blue',
    text: 'text-accent-blue',
    bar: 'bg-accent-blue',
  },
  green: {
    border: 'border-accent-green/30 hover:border-accent-green',
    text: 'text-accent-green',
    bar: 'bg-accent-green',
  },
  red: {
    border: 'border-accent-red/30 hover:border-accent-red',
    text: 'text-accent-red',
    bar: 'bg-accent-red',
  },
  purple: {
    border: 'border-accent-purple/30 hover:border-accent-purple',
    text: 'text-accent-purple',
    bar: 'bg-accent-purple',
  },
}

export default function ChallengeCard({ challenge }: { challenge: ChallengeMeta }) {
  const accent = accentMap[challenge.accent] ?? accentMap.yellow
  const days = getChallengeDays(challenge.slug)
  const availableDays = days.filter((d) => d.available).length

  return (
    <Link
      href={`/${challenge.slug}`}
      className={`group block rounded-xl border bg-surface p-5 transition-colors sm:p-6 ${accent.border}`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className={`text-3xl ${accent.text}`}>{iconMap[challenge.icon] || <Folder className="h-8 w-8" />}</span>
        <span className="max-w-[40%] text-right font-body text-xs uppercase tracking-wider text-muted-light">
          {challenge.level}
        </span>
      </div>

      <h3 className="mt-4 font-heading text-2xl font-bold text-ink">
        {challenge.title}
      </h3>

      <p className="mt-2 font-body text-sm leading-relaxed text-muted-light">
        {challenge.description}
      </p>

      <ChallengeProgress
        challengeSlug={challenge.slug}
        totalDays={challenge.totalDays}
        availableDays={availableDays}
        accentBarClass={accent.bar}
      />

      <div
        className={`mt-5 inline-flex items-center gap-1 font-body text-sm font-semibold ${accent.text}`}
      >
        View Challenge
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </div>
    </Link>
  )
}
