import { Slide } from '@/lib/quickread-types'

const dsaDay07: Slide[] = [
  {
    type: 'title',
    series: '30 Days of DSA Patterns',
    day: 7,
    heading: 'Weekly\nCheckpoint',
    highlight: 'Checkpoint',
    hook: 'You have learned 6 powerful patterns. Now it is time to test your ability to recognize them in the wild.',
  },
  {
    type: 'cards',
    eyebrow: 'Active Recall',
    heading: 'Test yourself',
    cards: [
      {
        icon: 'BrainCircuit',
        title: 'Pattern Recognition',
        body: 'In an interview, writing the code is the easy part. The hard part is reading the prompt and instantly knowing which pattern to apply.',
        accent: 'blue',
      },
    ],
  },
  {
    type: 'recap',
    heading: 'Take the Quiz',
    items: [
      'Scroll down and take the interactive quiz.',
      'Test your knowledge on Arrays and Linked List patterns.',
      'Pass to unlock week 2 (Tree Patterns)!',
    ],
    nextDay: { day: 8, title: 'Breadth First Search (BFS)' },
  },
]

export default dsaDay07
