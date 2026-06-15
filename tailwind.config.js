/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark / navigation pages
        bg: '#0f1117',
        surface: '#1a1f2e',
        border: '#2a3050',
        // Article / paper pages
        paper: '#fafbfd',
        ink: '#1a1f3a',
        // Accents (match slide deck palette)
        accent: {
          yellow: '#fde968',
          blue: '#3aaee0',
          green: '#3aae6a',
          red: '#e04468',
          purple: '#b06ae8',
        },
        muted: {
          light: '#8892b0',
          dark: '#9a8f7a',
        },
      },
      fontFamily: {
        heading: ['Caveat', 'cursive'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.ink'),
            '--tw-prose-headings': theme('colors.ink'),
            '--tw-prose-links': theme('colors.accent.blue'),
            '--tw-prose-bold': theme('colors.ink'),
            '--tw-prose-bullets': theme('colors.accent.blue'),
            '--tw-prose-quotes': theme('colors.ink'),
            '--tw-prose-quote-borders': theme('colors.accent.yellow'),
            '--tw-prose-code': theme('colors.ink'),
            '--tw-prose-pre-bg': theme('colors.ink'),
            '--tw-prose-pre-code': '#f0f0f0',
            fontFamily: theme('fontFamily.body').join(', '),
            fontSize: '17px',
            lineHeight: '1.75',
            h1: {
              fontFamily: theme('fontFamily.heading').join(', '),
              fontWeight: '700',
              fontSize: '2.75rem',
              lineHeight: '1.1',
            },
            h2: {
              fontFamily: theme('fontFamily.heading').join(', '),
              fontWeight: '700',
              fontSize: '2rem',
              marginTop: '2em',
            },
            h3: {
              fontFamily: theme('fontFamily.heading').join(', '),
              fontWeight: '700',
              fontSize: '1.5rem',
            },
            code: {
              fontFamily: theme('fontFamily.mono').join(', '),
              fontWeight: '500',
              borderRadius: '4px',
              padding: '0.2em 0.4em',
              backgroundColor: 'rgba(253, 233, 104, 0.25)',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            blockquote: {
              fontFamily: theme('fontFamily.heading').join(', '),
              fontStyle: 'normal',
              fontSize: '1.25rem',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
