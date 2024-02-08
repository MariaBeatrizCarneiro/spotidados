/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
    colors: {
      'lightgrey': '#ECE7E7',
      'blue': '#3f3cbb',
      'lighterblue': '#6277E4',
      'green': '#6BCB4A',
      'black': '#000000'
    },
    fontFamily: {
      "PressStart2p": ["'Press Start 2P'", "sans-serif"],
      "JetbrainsMono": ["JetBrains Mono", "sans-serif"]
    }
  },
  plugins: [],
}

