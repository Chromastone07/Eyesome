import { Slide } from '@/lib/quickread-types'

const dsaDay05: Slide[] = [
  {
    type: 'title',
    series: '30 Days of DSA Patterns',
    day: 5,
    heading: 'Cyclic\nSort',
    highlight: 'Cyclic',
    hook: 'How do you sort an array of numbers from 1 to N without using O(N log N) time? You put them in their assigned seats.',
  },
  {
    type: 'cards',
    eyebrow: 'The Concept',
    heading: 'Assigned Seating',
    cards: [
      {
        icon: 'Hash',
        title: 'Number = Index',
        body: 'If an array contains numbers from 1 to N, then the number 1 belongs at index 0. The number 2 belongs at index 1.',
        accent: 'blue',
      },
    ],
  },
  {
    type: 'diagram',
    eyebrow: 'The Algorithm',
    heading: 'Swap until perfect',
    rows: [
      {
        nodes: [
          { label: '3', accent: 'purple' },
          { label: '1', accent: 'yellow' },
          { label: '2', accent: 'blue' },
        ],
        arrow: 'right',
      },
      {
        nodes: [
          { label: '2', accent: 'blue' },
          { label: '1', accent: 'yellow' },
          { label: '3', accent: 'purple' },
        ],
      },
    ],
    note: 'Look at the first number. If it is not at its correct index, swap it to its correct index. Repeat until the first seat is correct, then move to the next seat.',
  },
  {
    type: 'concepts',
    eyebrow: 'How to Spot It',
    heading: 'The Magic Words',
    items: [
      {
        number: 1,
        title: 'The Range',
        body: 'The problem MUST explicitly state the array contains numbers in the range 1 to N, or 0 to N.',
      },
      {
        number: 2,
        title: 'Missing or Duplicates',
        body: 'You are asked to find the missing number, the duplicate number, or the smallest missing positive integer.',
      },
    ],
  },
  {
    type: 'recap',
    heading: 'What you learned',
    items: [
      'Cyclic Sort is an O(N) sorting algorithm for a specific range of numbers.',
      'It works by continuously swapping elements to their correct index.',
      'Because each swap places an element perfectly, the max swaps is N.',
    ],
    nextDay: { day: 6, title: 'In-place Reversal of a LinkedList' },
  },
]

export default dsaDay05
