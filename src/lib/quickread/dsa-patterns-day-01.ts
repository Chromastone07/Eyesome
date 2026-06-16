import { Slide } from '@/lib/quickread-types'

const dsaDay01: Slide[] = [
  {
    type: 'title',
    series: '30 Days of DSA Patterns',
    day: 1,
    heading: 'The Sliding\nWindow',
    highlight: 'Sliding\nWindow',
    hook: 'Stop memorizing 500 LeetCode solutions. Learn 15 underlying patterns instead. Today, we learn the most famous one.',
  },
  {
    type: 'cards',
    eyebrow: 'The Problem',
    heading: 'Nested loops are too slow',
    cards: [
      {
        icon: 'Turtle',
        title: 'O(N²) is a trap',
        body: 'Checking every single subarray combination with a nested loop works, but it will cause a Time Limit Exceeded error in interviews.',
        accent: 'red',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'The Solution',
    heading: 'Slide, don\'t recalculate',
    cards: [
      {
        icon: 'Train',
        title: 'Like a moving train',
        body: 'Instead of recalculating from scratch, slide the window forward: remove what left the window, add what entered. Boom. O(N) time.',
        accent: 'blue',
      },
    ],
  },
  {
    type: 'concepts',
    eyebrow: 'How to spot it',
    heading: 'Recognizing the pattern',
    items: [
      {
        number: 1,
        title: 'Contiguous elements',
        body: 'The problem asks about a contiguous subarray or a substring.',
      },
      {
        number: 2,
        title: 'Finding extremes',
        body: 'You need to find a maximum, minimum, longest, shortest, or specific sum.',
      },
      {
        number: 3,
        title: 'Linear data structures',
        body: 'The input is an Array, String, or Linked List.',
      },
    ],
  },
  {
    type: 'compare',
    eyebrow: 'Variations',
    heading: 'Fixed vs Dynamic',
    pairs: [
      {
        left: { label: 'Fixed Window', desc: 'The window size `k` stays exactly the same throughout the entire array (e.g., max sum of size 3).' },
        right: { label: 'Dynamic Window', desc: 'The window grows or shrinks based on a condition (e.g., smallest subarray with sum >= S).' },
      },
    ],
  },
  {
    type: 'recap',
    heading: 'What you learned',
    items: [
      'Sliding window turns O(N²) problems into O(N).',
      'Look for keywords: contiguous, subarray, substring.',
      'Windows can be fixed size or dynamic size.',
      'Keep track of boundaries using left and right pointers.',
    ],
    nextDay: { day: 2, title: 'Implementing the Window in Code' },
  },
]

export default dsaDay01
