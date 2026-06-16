"use client"

import React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

export default function LiveCode({ code }: { code: string }) {
  return (
    <div className="not-prose my-6 overflow-hidden rounded-xl border border-border bg-surface shadow-sm">
      <LiveProvider code={code}>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full overflow-auto bg-[#1a1f3a] lg:w-1/2">
            <LiveEditor className="font-mono text-[13px] leading-relaxed text-white/90" />
          </div>
          <div className="w-full overflow-auto bg-white p-4 lg:w-1/2 lg:border-l lg:border-border">
            <LivePreview />
          </div>
        </div>
        <LiveError className="bg-red-500/10 p-4 font-mono text-xs text-red-500" />
      </LiveProvider>
    </div>
  )
}
