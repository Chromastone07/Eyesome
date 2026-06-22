import { Slide } from '@/lib/quickread-types'

const reactUiDay04: Slide[] = [
  {
    type: 'title',
    series: '30 Days of React UI Mastery',
    day: 4,
    heading: 'Framer\nMotion',
    highlight: 'Motion',
    hook: 'CSS keyframes are tedious. Physics-based animation should be declarative and simple. Enter Framer Motion.',
  },
  {
    type: 'cards',
    eyebrow: 'The Core Concept',
    heading: 'The Motion Component',
    cards: [
      {
        icon: 'Layers',
        title: '<motion.div>',
        body: 'You replace standard HTML tags with motion tags. This unlocks powerful animation props like initial and animate.',
        accent: 'blue',
      },
    ],
  },
  {
    type: 'diagram',
    eyebrow: 'Physics',
    heading: 'Springs vs Tweens',
    rows: [
      {
        nodes: [
          { label: 'Tween', sublabel: 'Time-based (Robotic)', accent: 'red' },
        ],
      },
      {
        nodes: [
          { label: 'Spring', sublabel: 'Physics-based (Organic)', accent: 'green' },
        ],
      },
    ],
    note: 'Framer Motion uses Springs by default. They simulate mass and stiffness, making animations feel natural and fluid.',
  },
  {
    type: 'concepts',
    eyebrow: 'Key Props',
    heading: 'The Animation API',
    items: [
      {
        number: 1,
        title: 'initial & animate',
        body: 'initial defines where the element starts (e.g. opacity: 0). animate defines where it goes (e.g. opacity: 1).',
      },
      {
        number: 2,
        title: 'whileHover & whileTap',
        body: 'Declarative gesture animations. Easily make buttons grow on hover and shrink on click.',
      },
      {
        number: 3,
        title: 'layout',
        body: 'Adding the `layout` prop makes the element automatically animate to its new position if the CSS flex/grid layout changes.',
      },
    ],
  },
  {
    type: 'recap',
    heading: 'What you learned',
    items: [
      'Replace standard HTML tags with motion tags to unlock animations.',
      'Spring physics feel significantly more premium than linear time-based CSS tweens.',
      'Use whileHover and whileTap for instant, high-quality micro-interactions.',
    ],
    nextDay: { day: 5, title: 'Component Composition' },
  },
]

export default reactUiDay04
