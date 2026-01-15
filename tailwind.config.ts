import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#5B21B6',
          logo: {
            primary: '#352658',
            secondary: '#451a55',
          }
        },
        primary: {
          purple: '#6D28D9',
          slate: '#0F172A',
        },
        neutral: {
          900: '#1E293B',
          800: '#334155',
          500: '#64748B',
          100: '#F1F5F9',
        },
        accent: {
          cyan: '#06B6D4',
          green: '#10B981',
        },
        white: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
