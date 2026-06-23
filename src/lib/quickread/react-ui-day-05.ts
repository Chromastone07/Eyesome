import { Slide } from '@/lib/quickread-types'

const reactUiDay05: Slide[] = [
  {
    type: 'title',
    series: '30 Days of React UI Mastery',
    day: 5,
    heading: 'Component\nComposition',
    highlight: 'Composition',
    hook: 'Is your Button component taking 15 different props? Stop. There is a better, more flexible way to build UIs.',
  },
  {
    type: 'cards',
    eyebrow: 'The Problem',
    heading: 'Prop Explosion',
    cards: [
      {
        icon: 'AlertCircle',
        title: 'Inflexible Monsters',
        body: 'When you try to handle every possible use case with props (showIcon, iconPosition, text, subtext), your component becomes a nightmare to maintain.',
        accent: 'red',
      },
    ],
  },
  {
    type: 'diagram',
    eyebrow: 'The Solution',
    heading: 'The Children Prop',
    rows: [
      {
        nodes: [
          { label: '<Card>', accent: 'blue' },
          { label: '<Heading />', sublabel: 'children', accent: 'purple' },
          { label: '</Card>', accent: 'blue' },
        ],
      },
    ],
    note: 'Instead of passing text as a string prop, pass React components as children. The developer gets total control over the layout inside the card.',
  },
  {
    type: 'concepts',
    eyebrow: 'The Benefits',
    heading: 'Why Compose?',
    items: [
      {
        number: 1,
        title: 'Flexibility',
        body: 'Want to make a piece of text bold? With children, you just add a <strong> tag. With props, you would have to rewrite the component.',
      },
      {
        number: 2,
        title: 'Cleaner Code',
        body: 'No more massively nested if/else statements checking which props were provided.',
      },
    ],
  },
  {
    type: 'recap',
    heading: 'What you learned',
    items: [
      'Stop passing massive amounts of data through props.',
      'Use the special {children} prop to render nested content.',
      'You can also pass React Elements as standard props for specific layout slots (like a Header or Footer).',
    ],
    nextDay: { day: 6, title: 'Context API for Theming' },
  },
]

export default reactUiDay05
