import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { compileMDX } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import {
  getAllChallenges,
  getChallenge,
  getChallengeDays,
  getDayContent,
  getDayNeighbors,
  getQuickRead,
} from '@/lib/content'
import QuickRead from '@/components/QuickRead'
import ComingSoon from '@/components/ComingSoon'
import Analogy from '@/components/Analogy'
import Mistake from '@/components/Mistake'
import Trivia from '@/components/Trivia'
import Recap from '@/components/Recap'
import VSCard from '@/components/VSCard'
import CodeBlock from '@/components/CodeBlock'
import MarkCompleteButton from '@/components/MarkCompleteButton'
import FocusToggle from '@/components/FocusToggle'
import BookmarkButton from '@/components/BookmarkButton'
import Quiz from '@/components/Quiz'

export function generateStaticParams() {
  const params: { challenge: string; day: string }[] = []
  for (const challenge of getAllChallenges()) {
    for (const day of getChallengeDays(challenge.slug)) {
      if (day.available) {
        params.push({ challenge: challenge.slug, day: day.slug })
      }
    }
  }
  return params
}

export function generateMetadata({
  params,
}: {
  params: { challenge: string; day: string }
}): Metadata {
  const challenge = getChallenge(params.challenge)
  if (!challenge) return { title: 'Eyesome Tech' }

  const dayMatch = params.day.match(/^day-(\d{2})$/)
  if (!dayMatch) return { title: 'Eyesome Tech' }

  const dayNumber = parseInt(dayMatch[1], 10)
  const dayData = getDayContent(params.challenge, params.day)

  if (!dayData) {
    return {
      title: `Day ${dayNumber}: Coming Soon — ${challenge.title}`,
      description: `This lesson hasn't been published yet. Check back soon!`,
    }
  }

  const title = `Day ${dayNumber}: ${dayData.meta.title} — ${challenge.title}`

  return {
    title,
    description: dayData.meta.topic || challenge.description,
  }
}


export default async function DayPage({
  params,
}: {
  params: { challenge: string; day: string }
}) {
  const challenge = getChallenge(params.challenge)
  if (!challenge) notFound()

  // Validate the day slug format (must be "day-NN") and range
  const dayMatch = params.day.match(/^day-(\d{2})$/)
  if (!dayMatch) notFound()

  const dayNumber = parseInt(dayMatch[1], 10)
  if (dayNumber < 1 || dayNumber > challenge.totalDays) notFound()

  const dayData = getDayContent(params.challenge, params.day)

  if (!dayData) {
    return (
      <ComingSoon
        challenge={challenge}
        challengeSlug={params.challenge}
        dayNumber={dayNumber}
      />
    )
  }

  const { prev, next } = getDayNeighbors(params.challenge, dayNumber)
  const quickReadSlides = getQuickRead(params.challenge, params.day)

  const { content } = await compileMDX({
    source: dayData.content,
    components: {
      Analogy,
      Mistake,
      Trivia,
      Recap,
      VSCard,
      pre: CodeBlock,
      Quiz,
    },
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
      // next-mdx-remote v6 blocks {} JS expressions in MDX by default.
      // Our content is fully trusted (authored by us), and components like
      // <Recap items={[...]} /> rely on JSX expression props, so we opt back in.
      // blockDangerousJS stays at its default (true) for extra protection.
      blockJS: false,
    },
  })

  return (
    <div className="paper-bg flex-1">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="flex items-center justify-between">
          <Link
            href={`/${params.challenge}`}
            className="font-body text-sm text-ink/60 hover:text-ink"
          >
            ← Back to {challenge.title}
          </Link>
          <div className="flex items-center gap-2">
            <BookmarkButton
              bookmark={{
                id: `${params.challenge}-${params.day}`,
                challengeSlug: params.challenge,
                daySlug: params.day,
                title: dayData.meta.title,
                topic: dayData.meta.topic || challenge.title,
              }}
            />
            <FocusToggle />
          </div>
        </div>

        <div className="mt-6">
          <span className="font-heading text-sm uppercase tracking-[0.2em] text-accent-blue">
            Day {String(dayNumber).padStart(2, '0')}
            {dayData.meta.topic ? ` · ${dayData.meta.topic}` : ''}
          </span>
          <h1 className="mt-2 font-heading text-4xl font-bold leading-tight text-ink sm:text-5xl">
            {dayData.meta.title}
          </h1>
        </div>

        {quickReadSlides && (
          <div className="mt-8">
            <div className="mb-3 flex items-center gap-2">
              <span className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-ink/40">
                Quick Read
              </span>
              <span className="h-px flex-1 bg-ink/10" />
            </div>
            <QuickRead slides={quickReadSlides} />
            <p className="mt-3 text-center font-body text-xs text-ink/40">
              60-second swipe-through · full article below
            </p>
          </div>
        )}

        <article className="prose mt-8 max-w-none sm:prose-lg">
          {content}
        </article>

        <MarkCompleteButton challengeSlug={params.challenge} daySlug={params.day} />

        <div className="mt-16 flex flex-col items-stretch gap-3 border-t border-ink/10 pt-8 sm:flex-row sm:justify-between sm:gap-4">
          {prev ? (
            <Link
              href={`/${params.challenge}/${prev.slug}`}
              className="flex-1 rounded-lg border border-ink/10 bg-white/50 p-4 transition-colors hover:border-accent-blue/40"
            >
              <div className="font-body text-xs uppercase tracking-wider text-ink/50">
                ← Day {prev.day}
              </div>
              <div className="mt-1 font-heading text-lg font-bold text-ink">
                {prev.title}
              </div>
            </Link>
          ) : (
            <div className="hidden flex-1 sm:block" />
          )}

          {next ? (
            <Link
              href={`/${params.challenge}/${next.slug}`}
              className="flex-1 rounded-lg border border-ink/10 bg-white/50 p-4 transition-colors hover:border-accent-blue/40 sm:text-right"
            >
              <div className="font-body text-xs uppercase tracking-wider text-ink/50">
                Day {next.day} →
              </div>
              <div className="mt-1 font-heading text-lg font-bold text-ink">
                {next.title}
              </div>
            </Link>
          ) : (
            <div className="hidden flex-1 sm:block" />
          )}
        </div>
      </div>
    </div>
  )
}