/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'mprimary':'#222e3c',
        'custom-blue':'#6366F1',
        'custom-gray':'#6c757d',
        'custom-light':'rgb(245,247,251)',
        'custom-green':'rgb(28,187,140)',
      },
      boxShadow:{
        'bottomBorder':'0 0 0 0.2rem rgba(59,125,221,.25)',
      },
      animation: {
        fade: 'fade-in 1s ease-in forwards, fade-out 4s 1s ease-out forwards',
      },
      keyframes: theme => ({
        fadeIn: {
          // '0%': { backgroundColor: theme('colors.red.300') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
      }),
    },
  },
  
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

