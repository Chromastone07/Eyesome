import { Slide } from '@/lib/quickread-types'

const dsaDay03: Slide[] = [
  {
    type: 'title',
    series: '30 Days of DSA Patterns',
    day: 3,
    heading: 'Fast & Slow\nPointers',
    highlight: 'Tortoise & Hare',
    hook: 'How do you know if a Linked List loops infinitely without running out of memory? Send in two runners.',
  },
  {
    type: 'cards',
    eyebrow: 'The Concept',
    heading: 'Different Speeds',
    cards: [
      {
        icon: 'TrendingUp',
        title: 'The Slow Pointer',
        body: 'Moves exactly one step at a time. Like a tortoise taking its time.',
        accent: 'blue',
      },
      {
        icon: 'Zap',
        title: 'The Fast Pointer',
        body: 'Moves exactly two steps at a time. Like a hare sprinting ahead.',
        accent: 'purple',
      },
    ],
  },
  {
    type: 'diagram',
    eyebrow: 'Cycle Detection',
    heading: 'The Meeting Point',
    rows: [
      {
        nodes: [
          { label: 'Slow', accent: 'blue' },
          { label: '...', accent: 'yellow' },
          { label: 'Fast', accent: 'purple' },
        ],
        arrow: 'right',
      },
    ],
    note: 'If there is a loop, the fast runner will eventually overlap the slow runner from behind. If they meet, a cycle exists!',
  },
  {
    type: 'concepts',
    eyebrow: 'Common Uses',
    heading: 'When to use it',
    items: [
      {
        number: 1,
        title: 'Detecting Cycles',
        body: 'Checking if a Linked List or Array loops back onto itself.',
      },
      {
        number: 2,
        title: 'Finding the Middle',
        body: 'When Fast reaches the end, Slow is exactly in the middle. Done in one pass!',
      },
    ],
  },
  {
    type: 'recap',
    heading: 'What you learned',
    items: [
      'Two pointers moving at different speeds can solve cyclic problems.',
      'It requires O(1) space, saving you from using a HashSet.',
      'Check if fast and fast.next exist before moving the fast pointer.',
    ],
    nextDay: { day: 4, title: 'Sliding Window Pattern' },
  },
]

export default dsaDay03
