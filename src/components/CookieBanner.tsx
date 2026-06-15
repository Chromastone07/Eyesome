'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('design30-cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem('design30-cookie-consent', 'accepted')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-surface px-4 py-3 sm:px-6 sm:py-4">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="font-body text-sm text-muted-light">
          🍪 We use cookies for basic analytics only. No personal data is sold,
          ever.{' '}
          <Link href="/cookies" className="underline hover:text-accent-yellow">
            Learn more
          </Link>
        </p>
        <button
          onClick={accept}
          className="flex-shrink-0 rounded-full bg-accent-yellow px-5 py-1.5 font-body text-sm font-semibold text-ink transition-opacity hover:opacity-90"
        >
          Accept
        </button>
      </div>
    </div>
  )
}
