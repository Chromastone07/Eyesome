import { Slide } from '@/lib/quickread-types'

const dsaDay04: Slide[] = [
  {
    type: 'title',
    series: '30 Days of DSA Patterns',
    day: 4,
    heading: 'Merge\nIntervals',
    highlight: 'Intervals',
    hook: 'How do you find overlapping meetings without checking every meeting against every other meeting?',
  },
  {
    type: 'cards',
    eyebrow: 'The Concept',
    heading: 'Defining an Overlap',
    cards: [
      {
        icon: 'Calendar',
        title: 'Meeting Times',
        body: 'An interval is just a start and end time [start, end]. They overlap if the start of the second meeting happens before the end of the first.',
        accent: 'blue',
      },
    ],
  },
  {
    type: 'diagram',
    eyebrow: 'The Secret',
    heading: 'Sort First',
    rows: [
      {
        nodes: [
          { label: '[1, 4]', accent: 'purple' },
          { label: '[2, 5]', accent: 'blue' },
          { label: '[7, 9]', accent: 'yellow' },
        ],
      },
    ],
    note: 'Always sort the array by the Start Time. Once sorted, overlapping intervals will always sit physically next to each other in the array.',
  },
  {
    type: 'concepts',
    eyebrow: 'The Algorithm',
    heading: 'Sweep the Array',
    items: [
      {
        number: 1,
        title: 'Sort',
        body: 'Sort the array by start time. This is O(N log N).',
      },
      {
        number: 2,
        title: 'Compare',
        body: 'Iterate through. If the current interval overlaps with the last one you saved, merge them by updating the end time.',
      },
    ],
  },
  {
    type: 'recap',
    heading: 'What you learned',
    items: [
      'The Merge Intervals pattern revolves around sorting by start time.',
      'Sorting reduces a chaotic O(N²) comparison into a simple O(N) sweep.',
      'The overall time complexity is O(N log N) because of the initial sort.',
    ],
    nextDay: { day: 5, title: 'Cyclic Sort' },
  },
]

export default dsaDay04

