import { notFound } from 'next/navigation'
import { getAllChallenges, getChallenge, getChallengeDays } from '@/lib/content'
import type { Metadata } from 'next'
import DayRow from '@/components/DayRow'
import ChallengeCompletion from '@/components/ChallengeCompletion'
import { Puzzle, Palette, Layers, Folder } from 'lucide-react'

const iconMap: Record<string, React.ReactNode> = {
  Puzzle: <Puzzle className="h-10 w-10" />,
  Palette: <Palette className="h-10 w-10" />,
  Layers: <Layers className="h-10 w-10" />,
}

const textAccentMap: Record<string, string> = {
  yellow: 'text-accent-yellow',
  blue: 'text-accent-blue',
  green: 'text-accent-green',
  red: 'text-accent-red',
  purple: 'text-accent-purple',
}

export function generateStaticParams() {
  return getAllChallenges().map((c) => ({ challenge: c.slug }))
}

export function generateMetadata({
  params,
}: {
  params: { challenge: string }
}): Metadata {
  const challenge = getChallenge(params.challenge)
  if (!challenge) return { title: 'Eyesome Tech' }
  return {
    title: `${challenge.title}   Eyesome Tech`,
    description: challenge.description,
  }
}

export default function ChallengePage({
  params,
}: {
  params: { challenge: string }
}) {
  const challenge = getChallenge(params.challenge)
  if (!challenge) notFound()

  const days = getChallengeDays(params.challenge)

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mb-10">
        <div className={`mb-4 inline-flex ${textAccentMap[challenge.accent] || 'text-ink'}`}>
          {iconMap[challenge.icon] || <Folder className="h-10 w-10" />}
        </div>
        <h1 className="mt-3 font-heading text-4xl font-bold text-ink sm:text-5xl">
          {challenge.title}
        </h1>
        <p className="mt-3 max-w-xl font-body text-base leading-relaxed text-muted-light">
          {challenge.description}
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {days.map((day) => (
          <DayRow key={day.slug} challengeSlug={params.challenge} day={day} />
        ))}
      </div>

      <ChallengeCompletion 
        challengeSlug={params.challenge} 
        challengeTitle={challenge.title} 
        totalDays={challenge.totalDays} 
      />
    </div>
  )
}
