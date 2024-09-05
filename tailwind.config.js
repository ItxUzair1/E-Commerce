/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'sm': '480px',  // Default small screen
        'md': '900px',  // Default medium screen
        'lg': '1024px', // Default large screen
        'xl': '1280px', // Default extra large screen
        '2xl': '1536px', // Default 2x extra large screen
      },
    },
  },
  plugins: [],
}