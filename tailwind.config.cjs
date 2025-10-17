const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,svelte}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({ addUtilities, theme }) {
      const newUtilities = {
        '.translate-y-0': { transform: 'translateY(0)' },
        '.translate-y-4': { transform: `translateY(${theme('spacing.4')})` },
        '.translate-y-6': { transform: `translateY(${theme('spacing.6')})` }
      }
      addUtilities(newUtilities, { variants: ['responsive'] })
    })
  ],
}
