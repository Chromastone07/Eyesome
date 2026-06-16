import { Slide } from '@/lib/quickread-types'

const day01: Slide[] = [
  {
    type: 'title',
    series: '30 Days of System Design',
    day: 1,
    heading: 'Understand\nthe Big\nPicture',
    highlight: 'Big\nPicture',
    hook: 'Before drawing diagrams, understand why system design exists — and why every engineer needs it.',
  },
  {
    type: 'cards',
    eyebrow: 'Why it matters — 1/2',
    heading: 'Why does System Design exist?',
    highlight: 'System Design',
    cards: [
      {
        icon: 'TrendingUp',
        title: 'Apps scale up',
        body: 'Fine for 100 users, collapses at 1 million without deliberate design. Traffic spikes are unpredictable.',
        accent: 'yellow',
      },
      {
        icon: 'Zap',
        title: 'Failures always happen',
        body: 'Servers crash. Networks drop. Good design expects failure and survives it gracefully.',
        accent: 'blue',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Why it matters — 2/2',
    heading: 'Why does System Design exist?',
    highlight: 'System Design',
    cards: [
      {
        icon: 'Zap',
        title: 'Speed is UX',
        body: 'Every 100ms of latency costs real users. Where data lives decides how fast your app feels.',
        accent: 'green',
      },
      {
        icon: 'Coins',
        title: 'Cost is real',
        body: 'Bad architecture wastes money at scale. Good design keeps the cloud bill sane.',
        accent: 'red',
      },
    ],
  },
  {
    type: 'diagram',
    eyebrow: 'The anatomy',
    heading: 'Every system, simplified',
    rows: [
      {
        nodes: [
          { label: 'User', sublabel: 'sends request', accent: 'yellow' },
          { label: 'Load Balancer', sublabel: 'distributes', accent: 'blue' },
        ],
      },
      {
        nodes: [
          { label: 'Server', accent: 'green' },
          { label: 'Server', accent: 'green' },
          { label: 'Server', accent: 'green' },
        ],
      },
      {
        nodes: [
          { label: 'Cache', sublabel: 'fast reads', accent: 'purple' },
          { label: 'Database', sublabel: 'stores data', accent: 'red' },
        ],
      },
    ],
    rowConnector: 'down',
    note: '✏ This skeleton lives inside every app you use',
  },
  {
    type: 'concepts',
    eyebrow: '4 core ideas — 1/2',
    heading: 'What you learn to think about',
    items: [
      {
        number: 1,
        title: 'Scalability',
        body: 'Can it handle 10× the load? Vertical vs horizontal scaling.',
      },
      {
        number: 2,
        title: 'Reliability',
        body: 'Does it survive one part failing? Redundancy and replication.',
      },
    ],
  },
  {
    type: 'concepts',
    eyebrow: '4 core ideas — 2/2',
    heading: 'What you learn to think about',
    items: [
      {
        number: 3,
        title: 'Latency',
        body: 'How fast does it respond? Caching, CDNs, and data locality.',
      },
      {
        number: 4,
        title: 'Trade-offs',
        body: 'Every design choice gives something and costs something.',
      },
    ],
  },
  {
    type: 'compare',
    eyebrow: 'The trade-off mindset — 1/2',
    heading: 'Every choice is a trade-off',
    highlight: 'trade-off',
    pairs: [
      {
        left: { label: 'Consistency', desc: 'Every read returns the latest data. Slower.' },
        right: { label: 'Availability', desc: 'Always responds. May return slightly stale data.' },
      },
      {
        left: { label: 'SQL', desc: 'Strong structure, harder to scale out.' },
        right: { label: 'NoSQL', desc: 'Flexible, scales easily, weaker guarantees.' },
      },
    ],
  },
  {
    type: 'compare',
    eyebrow: 'The trade-off mindset — 2/2',
    heading: 'Every choice is a trade-off',
    highlight: 'trade-off',
    pairs: [
      {
        left: { label: 'Monolith', desc: 'Simple to build, hard to scale one piece.' },
        right: { label: 'Microservices', desc: 'Scale independently, complex to operate.' },
      },
    ],
    quote: 'Not about **right answers** — about making **justified trade-offs**.',
  },
  {
    type: 'recap',
    heading: 'Day 1 done.\nYou see the big picture.',
    items: [
      'Why system design exists',
      'Anatomy of every system',
      '4 core properties to design for',
      'The trade-off mindset',
    ],
    nextDay: { day: 2, title: 'Horizontal vs Vertical Scaling' },
  },
]

export default day01
