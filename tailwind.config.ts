import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      width: {
        'calc-166p-1.3px': 'calc(166% + 1.3px)'
      },
      height: {
        '294px': '294px'
      },
      rotate: {
        'y-180': 'rotateY(180deg)'
      },
      lineHeight: {
        0: '0'
      },
      screens: {
        xs: '400px',
        xxs: '380px'
      }
    }
  },
  plugins: []
}

export default config
