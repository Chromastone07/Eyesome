import { Slide } from '@/lib/quickread-types'

const day03: Slide[] = [
  {
    type: 'title',
    series: '30 Days of System Design',
    day: 3,
    heading: 'Load\nBalancers',
    hook: 'One server crashes. Why does your app stay up? Meet the traffic director.',
  },
  {
    type: 'cards',
    eyebrow: 'Why it matters · 1/2',
    heading: 'One server is a single point of failure',
    cards: [
      {
        icon: 'Zap',
        title: 'It crashes, you\'re done',
        body: 'If every request goes to one machine, that machine dying takes your whole app down with it.',
        accent: 'red',
      },
      {
        icon: 'AlertCircle',
        title: 'It chokes under load',
        body: 'One server can only handle so many requests per second before response times blow up.',
        accent: 'yellow',
      },
    ],
  },
  {
    type: 'cards',
    eyebrow: 'Why it matters · 2/2',
    heading: 'More servers create a new problem',
    cards: [
      {
        icon: 'HelpCircle',
        title: 'Which server gets the request?',
        body: 'Once you have multiple servers, something has to decide where each incoming request goes.',
        accent: 'blue',
      },
      {
        icon: 'Scale',
        title: 'Spread the work evenly',
        body: 'Without a director, one server can get slammed while others sit idle   that\'s wasted capacity.',
        accent: 'green',
      },
    ],
  },
  {
    type: 'diagram',
    eyebrow: 'The Setup',
    heading: 'Traffic, directed',
    rows: [
      {
        nodes: [
          { label: 'Users', accent: 'blue' },
        ],
      },
      {
        nodes: [
          { label: 'Load Balancer', accent: 'yellow' },
        ],
      },
      {
        nodes: [
          { label: 'Server A', accent: 'green' },
          { label: 'Server B', accent: 'green' },
          { label: 'Server C', accent: 'green' },
        ],
      },
    ],
    rowConnector: 'down',
  },
  {
    type: 'concepts',
    eyebrow: 'Core concepts · 1/2',
    heading: 'How it decides',
    items: [
      {
        number: 1,
        title: 'Layer 4 (Transport)',
        body: 'Routes based on IP and port only   fast, doesn\'t look at the actual request content.',
      },
      {
        number: 2,
        title: 'Layer 7 (Application)',
        body: 'Reads the HTTP request   can route by URL path, headers, or cookies. Smarter, slightly slower.',
      },
    ],
  },
  {
    type: 'concepts',
    eyebrow: 'Core concepts · 2/2',
    heading: 'Routing algorithms',
    items: [
      {
        number: 3,
        title: 'Round Robin',
        body: 'Requests go to servers in order, one after another, looping back to the start.',
      },
      {
        number: 4,
        title: 'Health Checks',
        body: 'The balancer pings each server regularly   unhealthy ones get removed from rotation automatically.',
      },
    ],
  },
  {
    type: 'compare',
    eyebrow: 'Trade-offs · 1/2',
    heading: 'Round Robin vs Least Connections',
    pairs: [
      {
        left: { label: 'Round Robin', desc: 'Simple, predictable. Cycles through servers evenly   but ignores how busy each one actually is.' },
        right: { label: 'Least Connections', desc: 'Sends traffic to whichever server has the fewest active connections   smarter under uneven load.' },
      },
    ],
  },
  {
    type: 'compare',
    eyebrow: 'Trade-offs · 2/2',
    heading: 'The load balancer itself can fail',
    pairs: [
      {
        left: { label: 'One LB', desc: 'Solved the server problem   but now the load balancer is the single point of failure.' },
        right: { label: 'Two+ LBs', desc: 'Run a backup load balancer with failover   this is exactly how Netflix and AWS do it at scale.' },
      },
    ],
    quote: '"The fix for a single point of failure is never zero points   it\'s **more points**."',
  },
  {
    type: 'recap',
    heading: 'What you learned',
    items: [
      'One server = single point of failure',
      'Load balancers distribute traffic across servers',
      'Layer 4 routes by IP/port, Layer 7 reads the request',
      'Round Robin and Least Connections are common algorithms',
      'Health checks remove dead servers automatically',
      'Run two+ load balancers   never just one',
    ],
    nextDay: { day: 4, title: 'Caching: Making Things Feel Instant' },
  },
]

export default day03
