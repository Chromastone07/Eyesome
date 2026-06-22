import { Slide } from '@/lib/quickread-types'

const systemDesignDay06: Slide[] = [
  {
    type: 'title',
    series: '30 Days of System Design',
    day: 6,
    heading: 'The CAP\nTheorem',
    highlight: 'CAP',
    hook: 'You cannot build a perfect distributed system. Physics prevents it. You must choose two out of three guarantees.',
  },
  {
    type: 'cards',
    eyebrow: 'The Three Pillars',
    heading: 'C, A, and P',
    cards: [
      {
        icon: 'Lock',
        title: 'Consistency (C)',
        body: 'Every read receives the most recent write. All nodes in the system show the exact same data at the same time.',
        accent: 'blue',
      },
      {
        icon: 'Activity',
        title: 'Availability (A)',
        body: 'Every request receives a response. The system stays online and never throws an error, even if nodes crash.',
        accent: 'green',
      },
      {
        icon: 'Network',
        title: 'Partition Tolerance (P)',
        body: 'The system continues to operate despite network failures or dropped messages between nodes.',
        accent: 'purple',
      },
    ],
  },
  {
    type: 'diagram',
    eyebrow: 'The Harsh Reality',
    heading: 'Pick Two',
    rows: [
      {
        nodes: [
          { label: 'Consistency', accent: 'blue' },
          { label: 'OR', accent: 'yellow' },
          { label: 'Availability', accent: 'green' },
        ],
      },
    ],
    note: 'Because network partitions (P) are unavoidable in the real world, when a network fails, you MUST choose between C or A.',
  },
  {
    type: 'concepts',
    eyebrow: 'CP vs AP',
    heading: 'Making the choice',
    items: [
      {
        number: 1,
        title: 'CP Systems (Banks)',
        body: 'If the network breaks, the system throws an error. It refuses to serve stale data. Accuracy is the priority.',
      },
      {
        number: 2,
        title: 'AP Systems (Social Media)',
        body: 'If the network breaks, the system serves the old data it has. Being online is more important than being perfectly accurate.',
      },
    ],
  },
  {
    type: 'recap',
    heading: 'What you learned',
    items: [
      'CAP stands for Consistency, Availability, and Partition Tolerance.',
      'Distributed systems MUST be Partition Tolerant (P).',
      'During a failure, you must explicitly design your system to be CP or AP.',
    ],
    nextDay: { day: 7, title: 'Weekly Checkpoint' },
  },
]

export default systemDesignDay06

