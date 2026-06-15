import Link from 'next/link'
import { ChallengeMeta, getChallengeDays } from '@/lib/content'

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
  const progress = Math.max(
    4,
    Math.round((availableDays / challenge.totalDays) * 100)
  )

  return (
    <Link
      href={`/${challenge.slug}`}
      className={`group block rounded-xl border bg-surface p-5 transition-colors sm:p-6 ${accent.border}`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="text-3xl">{challenge.icon}</span>
        <span className="max-w-[40%] text-right font-body text-xs uppercase tracking-wider text-muted-light">
          {challenge.level}
        </span>
      </div>

      <h3 className="mt-4 font-heading text-2xl font-bold text-white">
        {challenge.title}
      </h3>

      <p className="mt-2 font-body text-sm leading-relaxed text-muted-light">
        {challenge.description}
      </p>

      <div className="mt-5">
        <div className="mb-1 flex justify-between font-body text-xs text-muted-light">
          <span>
            {availableDays}/{challenge.totalDays} days available
          </span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-bg">
          <div
            className={`h-full rounded-full ${accent.bar}`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div
        className={`mt-5 inline-flex items-center gap-1 font-body text-sm font-semibold ${accent.text}`}
      >
        View Challenge
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </div>
    </Link>
  )
}
