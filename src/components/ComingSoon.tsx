import Link from 'next/link'
import { ChallengeMeta } from '@/lib/content'

export default function ComingSoon({
  challenge,
  challengeSlug,
  dayNumber,
}: {
  challenge: ChallengeMeta
  challengeSlug: string
  dayNumber: number
}) {
  return (
    <div className="paper-bg flex-1">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-16 text-center sm:px-6 sm:py-24">
        <Link
          href={`/${challengeSlug}`}
          className="self-start font-body text-sm text-ink/60 hover:text-ink"
        >
          ← Back to {challenge.title}
        </Link>

        <div className="mt-12 flex h-16 w-16 items-center justify-center rounded-full bg-ink text-2xl">
          🚧
        </div>

        <span className="mt-6 font-heading text-sm uppercase tracking-[0.2em] text-accent-blue">
          Day {String(dayNumber).padStart(2, '0')}
        </span>

        <h1 className="mt-2 font-heading text-4xl font-bold leading-tight text-ink sm:text-5xl">
          Coming Soon
        </h1>

        <p className="mt-4 max-w-md font-body text-base leading-relaxed text-ink/60">
          This lesson hasn&apos;t been published yet. New days are added
          regularly  check back soon, or jump back into the challenge to
          continue from where you left off.
        </p>

        <Link
          href={`/${challengeSlug}`}
          className="mt-8 rounded-full bg-accent-yellow px-6 py-2.5 font-body text-sm font-semibold text-ink transition-opacity hover:opacity-90"
        >
          View {challenge.title}
        </Link>
      </div>
    </div>
  )
}
