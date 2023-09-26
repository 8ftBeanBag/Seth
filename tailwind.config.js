/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'blue-gradient': '#123456'
      },
      colors: {
        'fire-red': '#c81d25',
        'light-blue': '#bfd7ea',
        'teal': {
          900: "#03343A",
          800: '#066774',
          700: '#088a9b',
          600: '#0BBED5',
          500: '#0BBED5',
          400: '#0CCFE9',
          DEFAULT: '#087e8b'
        },
        'bitter': '#FF5A5F'
      },
      fontFamily: {
        mont: 'Montesserat'
      }
    },
  },
  plugins: [],
}
