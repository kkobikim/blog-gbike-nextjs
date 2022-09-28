const BLOG = require('./blog.config')
const fontFamilies = require('./lib/font')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js', './themes/**/*.js'],
  darkMode: BLOG.APPEARANCE === 'class' ? 'media' : 'class', // or 'media' or 'class'
  theme: {
    fontFamily: fontFamilies,
    extend: {
      colors: {
        day: {
          DEFAULT: BLOG.BACKGROUND_LIGHT || '#ffffff'
        },
        night: {
          DEFAULT: BLOG.BACKGROUND_DARK || '#ffffff'
        },
        hexo: {
          'background-gray': '#fffff',
          'black-gray': '#101414',
          'light-gray': '#e5e5e5'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
