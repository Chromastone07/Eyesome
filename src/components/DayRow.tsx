import Link from 'next/link'
import { DayMeta } from '@/lib/content'

export default function DayRow({
  challengeSlug,
  day,
}: {
  challengeSlug: string
  day: DayMeta
}) {
  const content = (
    <div
      className={`flex items-center gap-3 rounded-lg border border-border bg-surface p-3 transition-colors sm:gap-4 sm:p-4 ${
        day.available ? 'hover:border-accent-yellow/50' : 'opacity-50'
      }`}
    >
      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-bg font-heading text-base font-bold text-accent-yellow sm:h-10 sm:w-10 sm:text-lg">
        {String(day.day).padStart(2, '0')}
      </span>
      <div className="min-w-0 flex-1">
        <div className="font-heading text-base font-bold text-ink sm:text-lg">
          {day.title}
        </div>
        {day.topic && (
          <div className="truncate font-body text-xs text-muted-light">
            {day.topic}
          </div>
        )}
      </div>
      {day.available ? (
        <span className="flex-shrink-0 font-body text-sm text-muted-light transition-transform group-hover:translate-x-1">
          →
        </span>
      ) : (
        <span className="flex-shrink-0 whitespace-nowrap font-body text-[10px] uppercase tracking-wider text-muted-light sm:text-xs">
          Coming soon
        </span>
      )}
    </div>
  )

  if (!day.available) return <div className="group">{content}</div>

  return (
    <Link href={`/${challengeSlug}/${day.slug}`} className="group block">
      {content}
    </Link>
  )
}
