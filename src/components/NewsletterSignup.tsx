"use client"

import { useState } from 'react'
import { Mail, CheckCircle2, Loader2 } from 'lucide-react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus('loading')

    // Create form data for ConvertKit
    const formData = new FormData()
    formData.append('email_address', email)

    try {
      // Use no-cors to prevent CORS errors since we are submitting client-side
      await fetch('https://app.kit.com/forms/9573245/subscriptions', {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      })
    } catch (err) {
      console.error('Subscription error:', err)
    }
    
    setStatus('success')
    setEmail('')
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-accent-green/30 bg-accent-green/10 p-8 text-center sm:p-12">
        <CheckCircle2 className="mb-4 h-12 w-12 text-accent-green" />
        <h3 className="font-heading text-2xl font-bold text-ink">You&apos;re in!</h3>
        <p className="mt-2 font-body text-muted-light">
          Thanks for subscribing. Keep an eye on your inbox for the next challenge!
        </p>
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-8 sm:p-12">
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-yellow/10">
          <Mail className="h-6 w-6 text-accent-yellow" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-ink sm:text-3xl">
          Join the Newsletter
        </h3>
        <p className="mx-auto mt-3 max-w-lg font-body text-muted-light">
          Get exclusive system design interview tips, React UI templates, and DSA cheat sheets delivered straight to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 rounded-lg border border-border bg-bg px-4 py-3 font-body text-ink placeholder:text-muted focus:border-accent-yellow focus:outline-none focus:ring-1 focus:ring-accent-yellow"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="flex items-center justify-center rounded-lg bg-accent-yellow px-6 py-3 font-heading font-bold text-bg transition-opacity hover:opacity-90 disabled:opacity-70"
          >
            {status === 'loading' ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              'Subscribe'
            )}
          </button>
        </form>
      </div>

      {/* Decorative background blob */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent-yellow opacity-[0.03] blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent-blue opacity-[0.03] blur-3xl" />
    </div>
  )
}
