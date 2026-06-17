"use client"

import { useProgress } from '@/hooks/useProgress'
import CertificateGenerator from './CertificateGenerator'

interface ChallengeCompletionProps {
  challengeSlug: string
  challengeTitle: string
  totalDays: number
}

export default function ChallengeCompletion({
  challengeSlug,
  challengeTitle,
  totalDays,
}: ChallengeCompletionProps) {
  const { completedDays, mounted } = useProgress(challengeSlug)

  if (!mounted) return null

  // Check if they completed all days
  if (completedDays.length < totalDays) {
    return null
  }

  return (
    <div className="mt-12 animate-fade-in">
      <CertificateGenerator challengeTitle={challengeTitle} />
    </div>
  )
}
