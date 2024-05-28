/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
          400: '#98A2B3'
        },
        'brand-shades': {
          400: '#8244FF'
        }

      },
      fontFamily: {
        'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
        'inter': ['"Inter"', 'sens-serif'],

      },
    },
  },
  plugins: [],
}

