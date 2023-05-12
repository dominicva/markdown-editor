/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'base-100': '#ffffff',
        'base-200': '#F5F5F5',
        'base-300': '#E4E4E4',
        'base-400': '#C1C4CB',
        'base-500': '#7C8187',
        'base-600': '#5A6069',
        'base-700': '#35393F',
        'base-800': '#2B2D31',
        'base-900': '#1D1F22',
        'base-1000': '#151619',
        primary: '#E46643',
        secondary: '#F39765',
      },
    },
  },
  plugins: [],
};
