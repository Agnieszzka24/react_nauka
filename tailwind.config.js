/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      screens: {
        'slap': '1280px',
      },
      colors: {
        neutral: {
          900: '#101828',
          800: '#1D2939',
          700: '#344054',
          400: '#98A2B3',
          200: '#EAECF0',
        },
        'brand-shades': {
          400: '#8244FF'
        },
        'alert-info': {
          500: '#F04438'
        },
        back: {
          100: '#F2F4F7'
        },
        primary: {
          900: '#6315FF'
        },
        szary: {
          900: '#667085'
        },
      },
      fontFamily: {
        'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
        'inter': ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
