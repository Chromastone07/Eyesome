import { ReactNode } from 'react'

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string
  updated: string
  children: ReactNode
}) {
  return (
    <div className="paper-bg flex-1">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="font-heading text-4xl font-bold text-ink sm:text-5xl">
          {title}
        </h1>
        <p className="mt-2 font-body text-sm text-ink/50">
          Last updated: {updated}
        </p>
        <div className="prose prose-lg mt-8 max-w-none">{children}</div>
      </div>
    </div>
  )
}
