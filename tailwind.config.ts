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
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      spacing: {
        '18': '4.5rem',    // 72px
        '88': '22rem',     // 352px
        '100': '25rem',    // 400px
        '120': '30rem',    // 480px
      },
      maxWidth: {
        'container': '1200px',
      },
      lineHeight: {
        'relaxed': '1.75',
        'loose': '2',
      },
      boxShadow: {
        'purple-sm': '0 2px 8px rgba(91, 33, 182, 0.15)',
        'purple-md': '0 4px 16px rgba(91, 33, 182, 0.2)',
        'purple-lg': '0 8px 24px rgba(91, 33, 182, 0.3)',
      },
      animation: {
        'in': 'fadeIn 0.2s ease-in',
        'fade-in': 'fadeIn 0.2s ease-in',
        'slide-in-from-top': 'slideInFromTop 0.2s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInFromTop: {
          '0%': { transform: 'translateY(-8px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
