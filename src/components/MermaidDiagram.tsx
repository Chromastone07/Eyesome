'use client'

import { useEffect, useRef, useState } from 'react'

interface Props {
  chart: string
}

export default function MermaidDiagram({ chart }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [error, setError] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let cancelled = false

    async function render() {
      try {
        const mermaid = (await import('mermaid')).default

        mermaid.initialize({
          startOnLoad: false,
          theme: 'base',
          themeVariables: {
            // Match our navy/accent color palette
            primaryColor: '#1a1f3a',
            primaryTextColor: '#f0f0f0',
            primaryBorderColor: '#3aaee0',
            lineColor: '#3aaee0',
            secondaryColor: '#0f1117',
            tertiaryColor: '#1a1f3a',
            background: '#0f1117',
            mainBkg: '#1a1f3a',
            nodeBorder: '#3aaee0',
            clusterBkg: '#1a1f2e',
            titleColor: '#fde968',
            edgeLabelBackground: '#1a1f2e',
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
          },
          flowchart: {
            curve: 'basis',
            padding: 20,
          },
        })

        const id = `mermaid-${Math.random().toString(36).slice(2)}`
        const { svg } = await mermaid.render(id, chart.trim())

        if (!cancelled && ref.current) {
          ref.current.innerHTML = svg
          setReady(true)
        }
      } catch (e) {
        if (!cancelled) {
          console.error('Mermaid render error:', e)
          setError(true)
        }
      }
    }

    render()
    return () => { cancelled = true }
  }, [chart])

  if (error) {
    // Fallback: render raw diagram text cleanly
    return (
      <div className="not-prose my-6 rounded-lg border border-white/10 bg-ink p-5">
        <div className="mb-2 font-heading text-xs uppercase tracking-[0.2em] text-accent-yellow">
          Diagram
        </div>
        <pre className="overflow-x-auto font-mono text-[13px] leading-relaxed text-white/70">
          {chart.trim()}
        </pre>
      </div>
    )
  }

  return (
    <div className="not-prose my-6 overflow-hidden rounded-lg bg-ink p-4">
      {!ready && (
        <div className="flex items-center justify-center py-8">
          <div className="font-heading text-sm text-white/30">
            Loading diagram...
          </div>
        </div>
      )}
      <div
        ref={ref}
        className={`flex items-center justify-center transition-opacity duration-300 ${
          ready ? 'opacity-100' : 'opacity-0 h-0'
        }`}
      />
    </div>
  )
}
