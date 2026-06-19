import { Slide } from '@/lib/quickread-types'

const reactUiDay03: Slide[] = [
  {
    type: 'title',
    series: '30 Days of React UI Mastery',
    day: 3,
    heading: 'State &\nInteractivity',
    highlight: 'State',
    hook: 'HTML is static. Apps are alive. How do we make our interface remember things and react to the user?',
  },
  {
    type: 'cards',
    eyebrow: 'The Core Concept',
    heading: 'What is State?',
    cards: [
      {
        icon: 'Database',
        title: 'Memory for Components',
        body: 'State is simply data that changes over time. When it changes, React automatically updates the screen.',
        accent: 'blue',
      },
      {
        icon: 'MousePointerClick',
        title: 'Driven by Events',
        body: 'State usually changes because the user did something: clicked a button, typed in a field, or scrolled down.',
        accent: 'yellow',
      },
    ],
  },
  {
    type: 'concepts',
    eyebrow: 'The Rules',
    heading: 'Never Mutate State',
    items: [
      {
        number: 1,
        title: 'Read Only',
        body: 'Never do count = count + 1. React will not know the value changed, and the screen will not update.',
      },
      {
        number: 2,
        title: 'Use Setters',
        body: 'Always use the provided setter function (like setCount). This signals React to trigger a re-render.',
      },
    ],
  },
  {
    type: 'recap',
    heading: 'What you learned',
    items: [
      'useState lets components remember data between renders.',
      'Event handlers in React use camelCase (onClick, onChange).',
      'Always treat state arrays and objects as read-only. Create new copies instead.',
    ],
    nextDay: { day: 4, title: 'Framer Motion Basics' },
  },
]

export default reactUiDay03
