/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#08328E',
          600: '#072a7a',
          700: '#052266',
          800: '#041a52',
          900: '#03123e',
        },
        primary: {
          DEFAULT: '#08328E',
          light: '#093799',
          dark: '#052266',
        },
        background: '#ffffff',
        surface: '#f8fafc',
        neutral: {
          DEFAULT: '#64748b',
          light: '#e2e8f0',
          dark: '#334155',
        },
        accent: {
          DEFAULT: '#08328E',
          light: '#093799',
          dark: '#052266',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}