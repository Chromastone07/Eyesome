"use client"

import { useState, useEffect } from 'react'

export function useProgress(challengeSlug: string) {
  const [completedDays, setCompletedDays] = useState<string[]>([])
  const [mounted, setMounted] = useState(false)

  const key = `eyesome-progress-${challengeSlug}`

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem(key)
    if (stored) {
      try {
        setCompletedDays(JSON.parse(stored))
      } catch (e) {
        setCompletedDays([])
      }
    }
  }, [key])

  const toggleDay = (daySlug: string) => {
    setCompletedDays((prev) => {
      const isCompleted = prev.includes(daySlug)
      const next = isCompleted
        ? prev.filter((d) => d !== daySlug)
        : [...prev, daySlug]
      localStorage.setItem(key, JSON.stringify(next))
      return next
    })
  }

  const isCompleted = (daySlug: string) => completedDays.includes(daySlug)

  return {
    completedDays,
    toggleDay,
    isCompleted,
    mounted,
  }
}
