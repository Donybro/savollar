const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'menu': ['Raleway','sans-serif'],
      },
      colors:{
        primary:'#257DFF'
      }
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    require('tailwind-scrollbar')
  ],
}
