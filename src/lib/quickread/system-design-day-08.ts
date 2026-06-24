import { Slide } from '@/lib/quickread-types'

const systemDesignDay08: Slide[] = [
  {
    type: 'title',
    series: '30 Days of System Design',
    day: 8,
    heading: 'System\nComponents',
    highlight: 'Components',
    hook: 'You cannot just draw a box labeled "Server" in an interview. You need to know what specifically lives inside the architecture.',
  },
  {
    type: 'cards',
    eyebrow: 'The Frontline',
    heading: 'Reverse Proxies',
    cards: [
      {
        icon: 'Shield',
        title: 'Nginx / HAProxy',
        body: 'Sits at the very front of the network. It terminates SSL encryption, serves static files instantly, and routes API requests to the right internal servers.',
        accent: 'blue',
      },
    ],
  },
  {
    type: 'diagram',
    eyebrow: 'The Data Layer',
    heading: 'Right Tool for the Job',
    rows: [
      {
        nodes: [
          { label: 'Postgres', sublabel: 'Relational', accent: 'purple' },
          { label: 'Redis', sublabel: 'Cache', accent: 'yellow' },
        ],
      },
      {
        nodes: [
          { label: 'Elasticsearch', sublabel: 'Search', accent: 'blue' },
          { label: 'MongoDB', sublabel: 'NoSQL', accent: 'green' },
        ],
      },
    ],
    note: 'Mature systems use all of these. Postgres for core transactions, Redis for speed, Elasticsearch for fuzzy searching, and MongoDB for unstructured profiles.',
  },
  {
    type: 'concepts',
    eyebrow: 'Application Tier',
    heading: 'Stateless Servers',
    items: [
      {
        number: 1,
        title: 'Business Logic',
        body: 'This is where your Node.js, Python, or Go code actually runs.',
      },
      {
        number: 2,
        title: 'Statelessness',
        body: 'They do not store anything locally. This allows you to safely destroy them and spin up new ones behind a load balancer on demand.',
      },
    ],
  },
  {
    type: 'recap',
    heading: 'What you learned',
    items: [
      'Reverse proxies handle SSL and routing before hitting your code.',
      'Application servers must be stateless to scale horizontally.',
      'A true architecture uses specific databases (SQL, NoSQL, Cache, Search) for specific use cases.',
    ],
    nextDay: { day: 9, title: 'API Design (REST vs GraphQL)' },
  },
]

export default systemDesignDay08

