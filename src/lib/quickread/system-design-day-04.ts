import { Slide } from '@/lib/quickread-types'

const systemDesignDay04: Slide[] = [
  {
    type: 'title',
    series: '30 Days of System Design',
    day: 4,
    heading: 'Caching\nStrategies',
    highlight: 'Caching',
    hook: 'Databases are slow. Reading from RAM is fast. If you want to scale to millions of users, you have to stop asking the database the same questions.',
  },
  {
    type: 'cards',
    eyebrow: 'The Bottleneck',
    heading: 'Disk vs Memory',
    cards: [
      {
        icon: 'Database',
        title: 'Databases write to disk',
        body: 'To ensure data survives a power outage, databases must write to a hard drive or SSD. This physical action takes milliseconds.',
        accent: 'blue',
      },
      {
        icon: 'Cpu',
        title: 'Caches live in RAM',
        body: 'Caching systems like Redis store data entirely in memory. Reading from RAM takes microseconds. It is 1000x faster.',
        accent: 'yellow',
      },
    ],
  },
  {
    type: 'diagram',
    eyebrow: 'The Flow',
    heading: 'Read-Through Cache',
    rows: [
      {
        nodes: [
          { label: 'Client', accent: 'blue' },
          { label: 'Server', accent: 'purple' },
        ],
        arrow: 'right',
      },
      {
        nodes: [
          { label: 'Cache (Redis)', accent: 'yellow' },
        ],
      },
      {
        nodes: [
          { label: 'Database', accent: 'blue' },
        ],
      },
    ],
    note: 'Server checks the Cache. If Miss, it checks the Database, saves the result to the Cache, and returns it.',
  },
  {
    type: 'concepts',
    eyebrow: 'Eviction',
    heading: 'When RAM is full',
    items: [
      {
        number: 1,
        title: 'LRU (Least Recently Used)',
        body: 'Throw away the data that nobody has looked at for the longest time. This is the industry standard.',
      },
      {
        number: 2,
        title: 'LFU (Least Frequently Used)',
        body: 'Throw away the data that gets requested the least amount of times overall.',
      },
      {
        number: 3,
        title: 'TTL (Time To Live)',
        body: 'Data is given an expiration date (e.g., 1 hour). After that, it automatically deletes itself.',
      },
    ],
  },
  {
    type: 'recap',
    heading: 'What you learned',
    items: [
      'Caching stores hot data in RAM for instant access.',
      'Always set a TTL so your cache does not run out of memory.',
      'LRU is the most common eviction policy for caches.',
    ],
    nextDay: { day: 5, title: 'Database Sharding' },
  },
]

export default systemDesignDay04
