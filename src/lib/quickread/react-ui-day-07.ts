import { Slide } from '@/lib/quickread-types'

const reactUiDay07: Slide[] = [
  {
    type: 'title',
    series: '30 Days of React UI Mastery',
    day: 7,
    heading: 'Weekly\nCheckpoint',
    highlight: 'Checkpoint',
    hook: 'No reading today. It is time to test your retention with active recall.',
  },
  {
    type: 'cards',
    eyebrow: 'Active Recall',
    heading: 'Test yourself',
    cards: [
      {
        icon: 'BrainCircuit',
        title: 'Build Mental Models',
        body: 'Scrolling through text feels productive, but forcing your brain to retrieve the answer is what actually builds neural pathways.',
        accent: 'blue',
      },
    ],
  },
  {
    type: 'recap',
    heading: 'Take the Quiz',
    items: [
      'Scroll down and take the interactive quiz.',
      'Test your knowledge on Tailwind, Framer Motion, and Component Architecture.',
      'Pass to unlock week 2!',
    ],
    nextDay: { day: 8, title: 'Server Components vs Client Components' },
  },
]

export default reactUiDay07
