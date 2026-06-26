import { Slide } from '@/lib/quickread-types'

const systemDesignDay09: Slide[] = [
  {
    type: 'title',
    series: '30 Days of System Design',
    day: 9,
    heading: 'REST vs\nGraphQL',
    highlight: 'GraphQL',
    hook: 'How should your frontend talk to your backend? Let\'s compare the two most dominant API paradigms in modern engineering.',
  },
  {
    type: 'cards',
    eyebrow: 'The Standard',
    heading: 'REST APIs',
    cards: [
      {
        icon: 'Link',
        title: 'Resource Based',
        body: 'REST uses URLs to represent resources (`/users/123`) and HTTP verbs (GET, POST, DELETE) to interact with them.',
        accent: 'blue',
      },
    ],
  },
  {
    type: 'concepts',
    eyebrow: 'The Problem with REST',
    heading: 'Inefficiency',
    items: [
      {
        number: 1,
        title: 'Over-fetching',
        body: 'You just wanted the user\'s name, but `GET /users/123` returns their email, address, phone number, and 50 other fields, wasting bandwidth.',
      },
      {
        number: 2,
        title: 'Under-fetching',
        body: 'To load a profile page, you have to make 3 separate HTTP requests to `/users`, `/posts`, and `/friends`. This is slow on mobile networks.',
      },
    ],
  },
  {
    type: 'diagram',
    eyebrow: 'The Solution',
    heading: 'GraphQL',
    rows: [
      {
        nodes: [
          { label: 'Client', sublabel: 'Sends Query', accent: 'purple' },
          { label: '/graphql', sublabel: 'One Endpoint', accent: 'yellow' },
          { label: 'Database', accent: 'green' },
        ],
        arrow: 'right',
      },
    ],
    note: 'In GraphQL, there is only one URL. The client sends a specific query asking for exactly what it wants, and the server returns exactly that. No more, no less.',
  },
  {
    type: 'recap',
    heading: 'What you learned',
    items: [
      'REST is standard, easy to cache, but suffers from over-fetching.',
      'GraphQL solves over-fetching by letting the client specify the exact data shape.',
      'GraphQL is harder to cache and requires complex backend resolvers.',
    ],
    nextDay: { day: 10, title: 'Database Replication' },
  },
]

export default systemDesignDay09
