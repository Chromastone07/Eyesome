"use client"

import { useState, useEffect } from 'react'

export default function FocusToggle() {
  const [isFocus, setIsFocus] = useState(false)

  useEffect(() => {
    if (isFocus) {
      document.body.classList.add('focus-mode')
    } else {
      document.body.classList.remove('focus-mode')
    }
    return () => document.body.classList.remove('focus-mode')
  }, [isFocus])

  return (
    <button
      onClick={() => setIsFocus(!isFocus)}
      className="flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-body text-xs text-ink transition-colors hover:bg-border/30"
    >
      {isFocus ? (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path></svg>
          Exit Focus
        </>
      ) : (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path></svg>
          Focus Mode
        </>
      )}
    </button>
  )
}
