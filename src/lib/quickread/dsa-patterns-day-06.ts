import { Slide } from '@/lib/quickread-types'

const dsaDay06: Slide[] = [
  {
    type: 'title',
    series: '30 Days of DSA Patterns',
    day: 6,
    heading: 'In-place\nReversal',
    highlight: 'Reversal',
    hook: 'Reversing a Linked List is the most famous interview question of all time. How do you do it without using any extra memory?',
  },
  {
    type: 'cards',
    eyebrow: 'The Concept',
    heading: 'Pointer Manipulation',
    cards: [
      {
        icon: 'Repeat',
        title: 'Flip the Arrows',
        body: 'Instead of creating a new list, we iterate through the existing list and manually turn every single `next` pointer around to point backwards.',
        accent: 'blue',
      },
    ],
  },
  {
    type: 'diagram',
    eyebrow: 'The Danger',
    heading: 'Losing the List',
    rows: [
      {
        nodes: [
          { label: 'Current', accent: 'purple' },
          { label: 'Next', accent: 'yellow' },
        ],
        arrow: 'right',
      },
    ],
    note: 'If you point Current backwards BEFORE you save Next in a temporary variable, the rest of the list floats away into garbage collection!',
  },
  {
    type: 'concepts',
    eyebrow: 'The Algorithm',
    heading: 'The Three Pointers',
    items: [
      {
        number: 1,
        title: 'prev = null',
        body: 'Keeps track of the node behind us. The first node will eventually point backwards to null.',
      },
      {
        number: 2,
        title: 'current = head',
        body: 'The node we are currently operating on.',
      },
      {
        number: 3,
        title: 'nextTemp = current.next',
        body: 'A temporary lifeboat. Save the rest of the list here before you break the link and reverse the current pointer.',
      },
    ],
  },
  {
    type: 'recap',
    heading: 'What you learned',
    items: [
      'In-place reversal uses O(1) memory by rewiring existing nodes.',
      'Always save current.next before changing current.next.',
      'When the loop ends, current is null and prev is the new head.',
    ],
    nextDay: { day: 7, title: 'Weekly Checkpoint' },
  },
]

export default dsaDay06
