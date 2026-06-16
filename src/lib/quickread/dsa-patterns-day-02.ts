import { Slide } from '@/lib/quickread-types'

const dsaDay02: Slide[] = [
  {
    type: 'title',
    series: '30 Days of DSA Patterns',
    day: 2,
    heading: 'The Two\nPointers',
    highlight: 'Two\nPointers',
    hook: 'How do you find a pair in an array without checking every single combination? You squeeze it from both sides.',
  },
  {
    type: 'cards',
    eyebrow: 'The Problem',
    heading: 'Pairs take too long',
    cards: [
      {
        icon: 'Search',
        title: 'O(N²) is too slow',
        body: 'If you want to find two numbers that sum to X, checking every possible pair with a nested loop will fail large test cases.',
        accent: 'red',
      },
    ],
  },
  {
    type: 'diagram',
    eyebrow: 'The Concept',
    heading: 'Squeeze the array',
    rows: [
      {
        nodes: [
          { label: 'Left (Small)', accent: 'blue' },
          { label: '...', accent: 'purple' },
          { label: 'Right (Large)', accent: 'yellow' },
        ],
      },
    ],
    note: 'If the sum is too big, move the Right pointer left. If too small, move the Left pointer right.',
  },
  {
    type: 'concepts',
    eyebrow: 'When to use it',
    heading: 'Spotting the pattern',
    items: [
      {
        number: 1,
        title: 'Sorted Arrays',
        body: 'The input array is already sorted. This is the biggest giveaway.',
      },
      {
        number: 2,
        title: 'Finding Pairs',
        body: 'You need to find a pair of elements, a triplet, or a specific sum.',
      },
      {
        number: 3,
        title: 'Palindromes',
        body: 'You need to check if a string reads the same forwards and backwards.',
      },
    ],
  },
  {
    type: 'recap',
    heading: 'What you learned',
    items: [
      'Two pointers reduce O(N²) pair searching to O(N).',
      'Move pointers based on a sorted condition.',
      'Use while (left < right) to avoid using the same element twice.',
    ],
    nextDay: { day: 3, title: 'Fast & Slow Pointers' },
  },
]

export default dsaDay02
