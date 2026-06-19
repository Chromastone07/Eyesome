import { Slide } from '@/lib/quickread-types'

const systemDesignDay05: Slide[] = [
  {
    type: 'title',
    series: '30 Days of System Design',
    day: 5,
    heading: 'Database\nSharding',
    highlight: 'Sharding',
    hook: 'What do you do when your database is literally too large to fit on a single physical hard drive? You shatter it.',
  },
  {
    type: 'cards',
    eyebrow: 'The Concept',
    heading: 'Horizontal Scaling for DBs',
    cards: [
      {
        icon: 'Database',
        title: 'Splitting the Data',
        body: 'Sharding breaks a massive database into smaller pieces (shards). Each shard is hosted on a completely separate server.',
        accent: 'blue',
      },
    ],
  },
  {
    type: 'diagram',
    eyebrow: 'Routing',
    heading: 'The Shard Key',
    rows: [
      {
        nodes: [
          { label: 'Shard A (A-H)', accent: 'purple' },
          { label: 'Shard B (I-P)', accent: 'blue' },
          { label: 'Shard C (Q-Z)', accent: 'yellow' },
        ],
      },
    ],
    note: 'The Shard Key determines which server holds the data. If the key is Last Name, "Smith" goes to Shard C.',
  },
  {
    type: 'concepts',
    eyebrow: 'The Downsides',
    heading: 'Why it is a last resort',
    items: [
      {
        number: 1,
        title: 'No Cross-Shard Joins',
        body: 'You cannot write a simple SQL JOIN if the two tables live on completely different physical machines.',
      },
      {
        number: 2,
        title: 'Hot Shards',
        body: 'If you shard by "Country", the US shard might crash from overload while the Iceland shard does nothing.',
      },
    ],
  },
  {
    type: 'recap',
    heading: 'What you learned',
    items: [
      'Sharding is horizontal scaling for databases.',
      'A Shard Key determines where data lives.',
      'Consistent Hashing prevents total data reshuffling when adding new servers.',
    ],
    nextDay: { day: 6, title: 'Message Queues' },
  },
]

export default systemDesignDay05
