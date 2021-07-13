module.exports = {
  mode: 'jit',
  purge: ['./components/**/*.vue', './layouts/**/*.vue', './pages/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {},
  plugins: [require('@tailwindcss/typography')],
}
