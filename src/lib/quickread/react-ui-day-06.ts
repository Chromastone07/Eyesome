import { Slide } from '@/lib/quickread-types'

const reactUiDay06: Slide[] = [
  {
    type: 'title',
    series: '30 Days of React UI Mastery',
    day: 6,
    heading: 'The Context\nAPI',
    highlight: 'Context',
    hook: 'How do you tell a deeply nested Footer component that the user just toggled Dark Mode in the Navbar?',
  },
  {
    type: 'cards',
    eyebrow: 'The Problem',
    heading: 'Prop Drilling Global State',
    cards: [
      {
        icon: 'AlertCircle',
        title: 'Passing through the middle',
        body: 'Passing an `isDarkMode` prop down through 15 layers of components that don\'t even care about it just to reach the Footer is terrible architecture.',
        accent: 'red',
      },
    ],
  },
  {
    type: 'diagram',
    eyebrow: 'The Solution',
    heading: 'The Radio Tower',
    rows: [
      {
        nodes: [
          { label: '<ThemeProvider>', sublabel: 'Broadcasts data', accent: 'purple' },
        ],
        arrow: 'down',
      },
      {
        nodes: [
          { label: '<DeepComponent>', sublabel: 'useContext() to listen', accent: 'blue' },
        ],
      },
    ],
    note: 'Context acts like an invisible portal. The Provider throws data in at the top, and any component can reach in and grab it from the bottom.',
  },
  {
    type: 'concepts',
    eyebrow: 'Implementation',
    heading: 'Two Steps',
    items: [
      {
        number: 1,
        title: 'Create and Provide',
        body: 'Use `createContext()` to make the portal, and wrap your app in `<ThemeContext.Provider value={data}>`.',
      },
      {
        number: 2,
        title: 'Consume',
        body: 'Deep in your app, use `const data = useContext(ThemeContext)` to instantly access the data without props.',
      },
    ],
  },
  {
    type: 'recap',
    heading: 'What you learned',
    items: [
      'Context API solves Prop Drilling for global state.',
      'It is perfect for low-frequency changes like Theming, Localization, and User Auth.',
      'Do not use it for fast-changing data (like typing), as it triggers wide re-renders.',
    ],
    nextDay: { day: 7, title: 'Weekly Checkpoint' },
  },
]

export default reactUiDay06
