module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      's12m-blue': '#3c459a',
      's12m-red': '#c22f6c',
      's12m-gray': '#e1e8ee'
    }
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: ['corporate']
  }
}
