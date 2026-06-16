import { Slide } from '@/lib/quickread-types'

const reactUiDay02: Slide[] = [
  {
    type: 'title',
    series: '30 Days of React UI Mastery',
    day: 2,
    heading: 'Layouts with\nTailwind',
    highlight: 'Layouts',
    hook: 'How do you position elements so they look flawless on both an iPhone and a 4K monitor? Flex and Grid.',
  },
  {
    type: 'compare',
    eyebrow: 'The Layout Engines',
    heading: 'Flex vs Grid',
    highlight: 'vs',
    pairs: [
      {
        left: { label: 'Flexbox', desc: '1-Dimensional. Perfect for single rows or single columns (like a Navbar).' },
        right: { label: 'CSS Grid', desc: '2-Dimensional. Perfect for rigid rows AND columns (like a Dashboard).' },
      },
    ],
  },
  {
    type: 'diagram',
    eyebrow: 'Responsive Design',
    heading: 'Mobile First',
    rows: [
      {
        nodes: [
          { label: 'grid-cols-1', sublabel: 'Mobile (Default)', accent: 'purple' },
        ],
        arrow: 'right',
      },
      {
        nodes: [
          { label: 'md:grid-cols-2', sublabel: 'Tablet & up', accent: 'blue' },
        ],
        arrow: 'right',
      },
      {
        nodes: [
          { label: 'lg:grid-cols-3', sublabel: 'Desktop & up', accent: 'yellow' },
        ],
      },
    ],
    note: 'In Tailwind, base classes apply to mobile. Prefixes like md: apply to that size and everything larger.',
  },
  {
    type: 'recap',
    heading: 'Layout Rules',
    items: [
      'Use flex for alignments and spacing in one direction.',
      'Use grid for rigid gallery or page-level structures.',
      'Always design for mobile first, then scale up using breakpoints.',
    ],
    nextDay: { day: 3, title: 'State & Interactivity' },
  },
]

export default reactUiDay02
