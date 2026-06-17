"use client"

import { useProgress } from '@/hooks/useProgress'

export default function ChallengeProgress({
  challengeSlug,
  totalDays,
  availableDays,
  accentBarClass,
}: {
  challengeSlug: string
  totalDays: number
  availableDays: number
  accentBarClass: string
}) {
  const { completedDays, mounted } = useProgress(challengeSlug)

  // Avoid hydration mismatch by showing a skeleton or 0 progress initially
  const progressCount = mounted ? completedDays.length : 0
  const progressPercent = Math.round((progressCount / totalDays) * 100)

  return (
    <div className="mt-5">
      <div className="mb-1 flex justify-between font-body text-xs text-muted-light">
        <span>
          {availableDays}/{totalDays} days available
        </span>
        <span className="font-semibold text-ink">
          {progressCount}/{totalDays} completed
        </span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-black/5 dark:bg-white/10">
        <div
          className={`h-full rounded-full transition-all duration-500 ease-out ${accentBarClass}`}
          style={{ width: `${Math.max(2, progressPercent)}%` }}
        />
      </div>
    </div>
  )
}
