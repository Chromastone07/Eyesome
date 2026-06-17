import type { Metadata } from 'next'
import { Award } from 'lucide-react'
import CertificatesList from '@/components/CertificatesList'
import { getAllChallenges } from '@/lib/content'

export const metadata: Metadata = {
  title: 'My Certificates   Eyesome Tech',
  description: 'View and download your official completion certificates.',
}

export default function CertificatesPage() {
  const challenges = getAllChallenges()

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="mb-10 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent-yellow/10">
          <Award className="h-8 w-8 text-accent-yellow" />
        </div>
        <h1 className="mt-4 font-heading text-4xl font-bold text-ink sm:text-5xl">
          My Certificates
        </h1>
        <p className="mx-auto mt-4 max-w-lg font-body text-base text-muted-light">
          Complete a 30-Day Technical Challenge to unlock your official verified certificate.
        </p>
      </div>

      <CertificatesList challenges={challenges} />
    </div>
  )
}
