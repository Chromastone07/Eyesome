"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ChallengeMeta } from '@/lib/content'
import CertificateGenerator from './CertificateGenerator'
import { Folder } from 'lucide-react'

// Helper component to check progress for a single challenge
function CertificateItem({ challenge }: { challenge: ChallengeMeta }) {
  const [isCompleted, setIsCompleted] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const key = `eyesome-progress-${challenge.slug}`
    const stored = localStorage.getItem(key)
    if (stored) {
      try {
        const completedDays = JSON.parse(stored) as string[]
        if (completedDays.length >= challenge.totalDays) {
          setIsCompleted(true)
        }
      } catch (e) {
        // ignore
      }
    }
  }, [challenge])

  if (!mounted) return null

  if (!isCompleted) return null

  return (
    <div className="mb-12 animate-fade-in">
      <CertificateGenerator challengeTitle={challenge.title} />
    </div>
  )
}

export default function CertificatesList({ challenges }: { challenges: ChallengeMeta[] }) {
  const [mounted, setMounted] = useState(false)
  const [hasAnyCompleted, setHasAnyCompleted] = useState(false)

  useEffect(() => {
    setMounted(true)
    let found = false
    challenges.forEach((challenge) => {
      const key = `eyesome-progress-${challenge.slug}`
      const stored = localStorage.getItem(key)
      if (stored) {
        try {
          const completedDays = JSON.parse(stored) as string[]
          if (completedDays.length >= challenge.totalDays) {
            found = true
          }
        } catch (e) {
          // ignore
        }
      }
    })
    setHasAnyCompleted(found)
  }, [challenges])

  if (!mounted) return <div className="min-h-[300px]" />

  if (!hasAnyCompleted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-surface p-12 text-center shadow-sm">
        <Folder className="h-12 w-12 text-muted" />
        <h3 className="mt-4 font-heading text-xl font-bold text-ink">
          No Certificates Yet
        </h3>
        <p className="mt-2 font-body text-sm text-muted-light">
          You haven&apos;t completed any 30-day challenges yet. Once you complete all days in a challenge, your official certificate will appear here.
        </p>
        <Link
          href="/"
          className="mt-6 rounded-full bg-ink px-6 py-2.5 font-heading text-sm font-bold text-bg transition-opacity hover:opacity-90"
        >
          Browse Challenges
        </Link>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-12">
      {challenges.map((challenge) => (
        <CertificateItem key={challenge.slug} challenge={challenge} />
      ))}
    </div>
  )
}
