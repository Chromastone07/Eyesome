import { Slide } from '@/lib/quickread-types'

const reactUiDay01: Slide[] = [
  {
    type: 'title',
    series: '30 Days of React UI Mastery',
    day: 1,
    heading: 'Thinking in\nComponents',
    highlight: 'Thinking in',
    hook: 'When beginners look at a site, they see a page. When experts look at it, they see a tree of reusable pieces.',
  },
  {
    type: 'cards',
    eyebrow: 'The Concept',
    heading: 'Build with Lego blocks',
    cards: [
      {
        icon: 'BrickWall',
        title: 'Don\'t build monoliths',
        body: 'You don\'t mold a whole spaceship from one piece of plastic. You build smaller pieces a wing, an engine and snap them together.',
        accent: 'purple',
      },
    ],
  },
  {
    type: 'concepts',
    eyebrow: 'Why it matters',
    heading: 'Component-Driven Design',
    items: [
      {
        number: 1,
        title: 'Reusability',
        body: 'Build a polished Button once, and use it across 50 different pages.',
      },
      {
        number: 2,
        title: 'Maintainability',
        body: 'If the designer changes a color, you only update it in one file, not 50.',
      },
      {
        number: 3,
        title: 'Separation of Concerns',
        body: 'Your complex dashboard is just simple pieces (header, sidebar, chart) working independently.',
      },
    ],
  },
  {
    type: 'diagram',
    eyebrow: 'Visualised',
    heading: 'Breaking down a UI',
    rows: [
      {
        nodes: [
          { label: 'Page', accent: 'purple' },
        ],
      },
      {
        nodes: [
          { label: 'Sidebar', accent: 'blue' },
          { label: 'Main Content', accent: 'blue' },
        ],
      },
      {
        nodes: [
          { label: 'Header', accent: 'green' },
          { label: 'Stats Grid', accent: 'yellow' },
        ],
      },
    ],
    rowConnector: 'down',
    note: 'Every piece is isolated and easily reusable.',
  },
  {
    type: 'compare',
    eyebrow: 'The Goal',
    heading: 'What makes a UI premium?',
    pairs: [
      {
        left: { label: 'Functional UI', desc: 'Buttons click, forms submit. It works, but it feels rigid, generic, and unpolished.' },
        right: { label: 'Premium UI', desc: 'Smooth transitions, harmonious colors, responsive layouts, and the app feels \'alive\'.' },
      },
    ],
  },
  {
    type: 'recap',
    heading: 'What you learned',
    items: [
      'Stop seeing pages; start seeing trees of reusable components.',
      'Components provide reusability and maintainability.',
      'Break down complex UIs into small pieces before coding.',
      'Premium UIs rely on styling, micro-interactions, and animation.',
    ],
    nextDay: { day: 2, title: 'Building Your First Premium Component' },
  },
]

export default reactUiDay01
