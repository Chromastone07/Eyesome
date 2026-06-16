"use client"

import { useState, useEffect } from 'react'

export type Bookmark = {
  id: string
  challengeSlug: string
  daySlug: string
  title: string
  topic: string
}

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([])
  const [mounted, setMounted] = useState(false)

  const key = `eyesome-bookmarks`

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem(key)
    if (stored) {
      try {
        setBookmarks(JSON.parse(stored))
      } catch (e) {
        setBookmarks([])
      }
    }
  }, [key])

  const toggleBookmark = (bookmark: Bookmark) => {
    setBookmarks((prev) => {
      const isBookmarked = prev.some((b) => b.id === bookmark.id)
      const next = isBookmarked
        ? prev.filter((b) => b.id !== bookmark.id)
        : [...prev, bookmark]
      localStorage.setItem(key, JSON.stringify(next))
      return next
    })
  }

  const isBookmarked = (id: string) => bookmarks.some((b) => b.id === id)

  return {
    bookmarks,
    toggleBookmark,
    isBookmarked,
    mounted,
  }
}
