"use client"

import { useProgress } from '@/hooks/useProgress'

export default function MarkCompleteButton({
  challengeSlug,
  daySlug,
}: {
  challengeSlug: string
  daySlug: string
}) {
  const { isCompleted, toggleDay, mounted } = useProgress(challengeSlug)

  if (!mounted) {
    return <div className="h-12 w-full rounded-lg bg-border/20 animate-pulse mt-12" />
  }

  const completed = isCompleted(daySlug)

  return (
    <button
      onClick={() => toggleDay(daySlug)}
      className={`mt-12 flex w-full items-center justify-center gap-2 rounded-lg border-2 py-3 font-heading text-lg font-bold transition-all ${
        completed
          ? 'border-accent-green bg-accent-green/10 text-accent-green hover:bg-accent-green/20'
          : 'border-border bg-surface text-ink hover:border-ink/50'
      }`}
    >
      {completed ? (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          Day Completed
        </>
      ) : (
        'Mark Day as Complete'
      )}
    </button>
  )
}
