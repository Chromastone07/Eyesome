// Slide type definitions for the QuickRead carousel.
// Each day's content is just an array of these objects —
// the QuickRead component renders them automatically.

export type Accent = 'yellow' | 'blue' | 'green' | 'red' | 'purple'

export interface TitleSlide {
  type: 'title'
  series: string // e.g. "30 Days of System Design"
  day: number
  heading: string // can include \n for line breaks
  highlight?: string // word/phrase shown in accent yellow
  hook: string
}

export interface CardsSlide {
  type: 'cards'
  eyebrow: string // e.g. "Why it matters — 1/2"
  heading: string
  highlight?: string // word in heading to highlight
  cards: {
    icon?: string
    title: string
    body: string
    accent?: Accent
  }[]
}

export interface DiagramNode {
  label: string
  sublabel?: string
  accent: Accent
}

export interface DiagramRow {
  nodes: DiagramNode[]
  // arrows between nodes in this row: 'right' | 'none'
  arrow?: 'right'
}

export interface DiagramSlide {
  type: 'diagram'
  eyebrow: string
  heading: string
  rows: DiagramRow[]
  // 'down' arrow shown between rows (except none after last)
  rowConnector?: 'down' | 'none'
  note?: string
}

export interface ConceptsSlide {
  type: 'concepts'
  eyebrow: string
  heading: string
  items: {
    number: number
    title: string
    body: string
  }[]
}

export interface CompareSlide {
  type: 'compare'
  eyebrow: string
  heading: string
  highlight?: string
  pairs: {
    left: { label: string; desc: string }
    right: { label: string; desc: string }
  }[]
  quote?: string // can include **bold** for accent yellow text
}

export interface RecapSlide {
  type: 'recap'
  heading: string
  items: string[]
  nextDay: { day: number; title: string }
}

export type Slide =
  | TitleSlide
  | CardsSlide
  | DiagramSlide
  | ConceptsSlide
  | CompareSlide
  | RecapSlide
