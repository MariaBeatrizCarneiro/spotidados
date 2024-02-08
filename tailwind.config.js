/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
    colors: {
      'lightgrey': '#ECE7E7',
      'greybar': '#D9D9D9',
      'blue': '#0009E2',
      'lighterblue': '#6277E4',
      'green': '#6BCB4A',
      'black': '#000000'
    },
    fontFamily: {
      "PressStart2p": ["'Press Start 2P'", "sans-serif"],
      "JetbrainsMono": ["JetBrains Mono", "sans-serif"]
    },
      fontSize: {
        sm: '0.875rem',
        base: '1rem',
        xl: '1.25rem',
        'xxs': '0.65rem',
        'xs': '0.75rem',
        'lg': '1.125rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
  },
  plugins: [],
}

