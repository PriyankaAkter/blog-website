/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#232536',
        secondary: '#FECF50',
        'theme-purple': '#592EA9',
        'theme-white': '#F4F4F4',
        'theme-white-light': '#F4F0F8',
        'theme-yellow-light': '#FBF6EA',
        'theme-dark': '#4C4C4C',
        'theme-medium-gray': '#6D6E76',
      },
      fontFamily: {
        sens:["var(--sens)"],
        inter: ["var(--inter)"]
      }
    },
  },
  plugins: [],
}
