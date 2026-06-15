import { Accent } from '@/lib/quickread-types'

export const accentColors: Record<
  Accent,
  { text: string; border: string; bg: string }
> = {
  yellow: { text: '#fde968', border: '#fde968', bg: 'rgba(253,233,104,0.1)' },
  blue: { text: '#3aaee0', border: '#3aaee0', bg: 'rgba(58,174,224,0.1)' },
  green: { text: '#3aae6a', border: '#3aae6a', bg: 'rgba(58,174,106,0.1)' },
  red: { text: '#e04468', border: '#e04468', bg: 'rgba(224,68,104,0.1)' },
  purple: { text: '#b06ae8', border: '#b06ae8', bg: 'rgba(176,106,232,0.1)' },
}

export const accentBorderClass: Record<Accent, string> = {
  yellow: 'border-accent-yellow',
  blue: 'border-accent-blue',
  green: 'border-accent-green',
  red: 'border-accent-red',
  purple: 'border-accent-purple',
}

export const accentTextClass: Record<Accent, string> = {
  yellow: 'text-accent-yellow',
  blue: 'text-accent-blue',
  green: 'text-accent-green',
  red: 'text-accent-red',
  purple: 'text-accent-purple',
}

/**
 * Renders text where **bold** segments are wrapped in a styled span,
 * and \n characters become line breaks.
 * Used for quote highlights in compare slides.
 */
export function renderHighlighted(text: string, className: string) {
  const lines = text.split('\n')
  return lines.map((line, lineIdx) => {
    const parts = line.split(/(\*\*[^*]+\*\*)/g)
    const rendered = parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <span key={i} className={className}>
            {part.slice(2, -2)}
          </span>
        )
      }
      return part
    })
    return (
      <span key={lineIdx}>
        {rendered}
        {lineIdx < lines.length - 1 && <br />}
      </span>
    )
  })
}

/**
 * Renders heading text with an optional highlighted word/phrase,
 * wrapped in a yellow highlight span. Supports \n for line breaks.
 */
export function renderHeading(
  heading: string,
  highlight: string | undefined,
  highlightClassName: string
) {
  const lines = heading.split('\n')
  return lines.map((line, i) => {
    if (highlight && line.includes(highlight)) {
      const idx = line.indexOf(highlight)
      const before = line.slice(0, idx)
      const after = line.slice(idx + highlight.length)
      return (
        <span key={i}>
          {before}
          <span className={highlightClassName}>{highlight}</span>
          {after}
          {i < lines.length - 1 && <br />}
        </span>
      )
    }
    return (
      <span key={i}>
        {line}
        {i < lines.length - 1 && <br />}
      </span>
    )
  })
}
