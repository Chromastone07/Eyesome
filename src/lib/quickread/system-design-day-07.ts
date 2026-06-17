import { Slide } from '@/lib/quickread-types'

const systemDesignDay07: Slide[] = [
  {
    type: 'title',
    series: '30 Days of System Design',
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
      'Test your knowledge on Scaling, Load Balancers, and Caching.',
      'Pass to unlock week 2!',
    ],
    nextDay: { day: 8, title: 'Database Sharding' },
  },
]

export default systemDesignDay07
