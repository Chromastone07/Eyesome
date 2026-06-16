"use client"

import { useBookmarks, Bookmark } from '@/hooks/useBookmarks'

export default function BookmarkButton({ bookmark }: { bookmark: Bookmark }) {
  const { isBookmarked, toggleBookmark, mounted } = useBookmarks()

  if (!mounted) {
    return <div className="h-8 w-8 rounded-full bg-border/20 animate-pulse" />
  }

  const saved = isBookmarked(bookmark.id)

  return (
    <button
      onClick={() => toggleBookmark(bookmark)}
      aria-label="Toggle bookmark"
      className={`flex items-center justify-center rounded-full border px-3 py-1 font-body text-xs transition-all ${
        saved
          ? 'border-accent-yellow bg-accent-yellow/20 text-accent-yellow hover:bg-accent-yellow/30'
          : 'border-border bg-surface text-ink hover:bg-border/30'
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill={saved ? 'currentColor' : 'none'}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mr-1.5"
      >
        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
      </svg>
      {saved ? 'Saved' : 'Save'}
    </button>
  )
}
