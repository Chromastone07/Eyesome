import { Slide } from '@/lib/quickread-types'

const day02: Slide[] = [
  {
    type: 'title',
    series: '30 Days of System Design',
    day: 2,
    heading: 'Scaling:\nUp vs\nOut',
    highlight: 'Up vs\nOut',
    hook: 'Your app is growing. More users, more requests. How do you handle it? Two fundamental answers.',
  },
  {
    type: 'cards',
    eyebrow: 'Option 1',
    heading: 'Vertical Scaling — Scale Up',
    highlight: 'Scale Up',
    cards: [
      {
        icon: '🖥️',
        title: 'Make the machine bigger',
        body: 'Add more CPU, RAM, or storage to your existing server. One powerful machine handles everything.',
        accent: 'blue',
      },
      {
        icon: '✅',
        title: 'Simple, but has a ceiling',
        body: 'No code changes needed, no distributed complexity. But the biggest machine you can rent is still finite.',
        accent: 'blue',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Option 2',
    heading: 'Horizontal Scaling — Scale Out',
    highlight: 'Scale Out',
    cards: [
      {
        icon: '🖥️🖥️🖥️',
        title: 'Add more machines',
        body: 'Instead of one big server, run many smaller ones and distribute load with a load balancer.',
        accent: 'green',
      },
      {
        icon: '✅',
        title: 'Near-unlimited, but complex',
        body: 'Fault tolerant and scales endlessly — but requires stateless app design and adds complexity.',
        accent: 'green',
      },
    ],
  },
  {
    type: 'diagram',
    eyebrow: 'Visualised',
    heading: 'What they look like',
    rows: [
      {
        nodes: [
          { label: 'Small Server', accent: 'blue' },
          { label: 'Bigger Server', accent: 'blue' },
          { label: 'Huge Server', accent: 'blue' },
        ],
      },
      {
        nodes: [
          { label: 'Server 1', accent: 'green' },
          { label: 'Server 2', accent: 'green' },
        ],
      },
      {
        nodes: [
          { label: 'Server 3', accent: 'green' },
          { label: 'Server 4', accent: 'green' },
        ],
      },
    ],
    rowConnector: 'down',
    note: '⬆ Vertical: one machine grows  ·  ➡ Horizontal: many machines share load',
  },
  {
    type: 'concepts',
    eyebrow: 'When to use which',
    heading: 'Choosing the right approach',
    items: [
      {
        number: 1,
        title: 'Use Vertical when...',
        body: 'Stateful apps (databases), early-stage products, need a quick fix, want simplicity.',
      },
      {
        number: 2,
        title: 'Use Horizontal when...',
        body: 'Expect massive growth, need high availability, stateless apps, can manage complexity.',
      },
    ],
  },
  {
    type: 'compare',
    eyebrow: 'The limits',
    heading: 'Nothing scales forever',
    highlight: 'forever',
    pairs: [
      {
        left: { label: 'Vertical', desc: 'Hardware ceiling — there\'s a max machine size, and upgrades need downtime.' },
        right: { label: 'Horizontal', desc: 'Distributed tax — more machines means more coordination complexity.' },
      },
    ],
    quote: 'Vertical scaling buys you **time**.\nHorizontal scaling buys you **ceiling**.',
  },
  {
    type: 'cards',
    eyebrow: 'The golden rule',
    heading: 'How real systems do it',
    cards: [
      {
        icon: '⚖️',
        title: 'Most systems do both',
        body: 'Start vertical to keep things simple. Move horizontal as you grow. App servers scale out, primary databases often scale up first — then out via replicas.',
        accent: 'yellow',
      },
    ],
  },
  {
    type: 'recap',
    heading: 'Day 2 done.\nYou know how systems grow.',
    items: [
      'What vertical scaling means',
      'What horizontal scaling means',
      'When to use each approach',
      'How real systems combine both',
    ],
    nextDay: { day: 3, title: 'Load Balancers — The Traffic Director' },
  },
]

export default day02
