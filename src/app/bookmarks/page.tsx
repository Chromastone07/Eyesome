"use client"

import Link from 'next/link'
import { useBookmarks } from '@/hooks/useBookmarks'

export default function BookmarksPage() {
  const { bookmarks, mounted } = useBookmarks()

  if (!mounted) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="h-8 w-48 rounded bg-border/20 animate-pulse"></div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 w-full sm:px-6 sm:py-16">
      <div className="mb-10">
        <h1 className="mt-3 font-heading text-4xl font-bold text-ink sm:text-5xl">
          Your Bookmarks
        </h1>
        <p className="mt-3 max-w-xl font-body text-base leading-relaxed text-muted-light">
          Your saved articles and lessons, stored locally on this device.
        </p>
      </div>

      {bookmarks.length === 0 ? (
        <div className="rounded-xl border border-border bg-surface p-8 text-center text-muted-light">
          You haven&apos;t bookmarked anything yet! Click the &quot;Save&quot; button on any lesson to add it here.
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {bookmarks.map((bookmark) => (
            <Link
              key={bookmark.id}
              href={`/${bookmark.challengeSlug}/${bookmark.daySlug}`}
              className="group block rounded-lg border border-border bg-surface p-4 transition-colors hover:border-accent-yellow/50 sm:p-5"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-heading text-lg font-bold text-ink sm:text-xl">
                    {bookmark.title}
                  </div>
                  <div className="mt-1 font-body text-xs text-muted-light">
                    {bookmark.topic}
                  </div>
                </div>
                <span className="flex-shrink-0 font-body text-sm text-muted-light transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
