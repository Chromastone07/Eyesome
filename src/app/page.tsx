import { getAllChallenges } from '@/lib/content'
import ChallengeCard from '@/components/ChallengeCard'

export default function HomePage() {
  const challenges = getAllChallenges()

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <section className="mb-12 max-w-2xl sm:mb-16">
        <span className="font-heading text-sm uppercase tracking-[0.2em] text-accent-yellow">
          Structured learning, daily
        </span>
        <h1 className="mt-3 font-heading text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
          Learn anything in{' '}
          <span className="text-accent-yellow">30 days</span>
        </h1>
        <p className="mt-4 font-body text-base leading-relaxed text-muted-light sm:text-lg">
          One concept a day. Real diagrams, real trade-offs, no fluff.
          Pick a challenge below and start with Day 1.
        </p>
      </section>

      <section>
        <h2 className="mb-6 font-heading text-2xl font-bold text-white">
          All Challenges
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {challenges.map((challenge) => (
            <ChallengeCard key={challenge.slug} challenge={challenge} />
          ))}
        </div>
      </section>
    </div>
  )
}
