/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      colors: {
        compass: '#32475c',
        orientals: '#0050cf',
        chili: '#ff4d49',
      },
    },
  },
  plugins: [],
}

