/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      dropShadow: {
        glow: [
          "0 0px 20px rgba(73, 207, 240, 0.8)",
          "0 0px 65px rgba(73, 207, 240, 0.8)"
        ]
      },
      fontFamily: {
        orbitron: ['"Orbitron"', ...defaultTheme.fontFamily.sans],
        saira: ['"Saira Semi Condensed"', ...defaultTheme.fontFamily.sans],
        questrial: ['"Questrial"', ...defaultTheme.fontFamily.sans],
        russo: ['"Russo One"', ...defaultTheme.fontFamily.sans],
        pacifico: ['"Pacifico"', ...defaultTheme.fontFamily.sans],
        kanit: ['"Kanit"', ...defaultTheme.fontFamily.sans],
        anta: ['"Anta"', ...defaultTheme.fontFamily.sans],
        protest: ['"Protest Riot"', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}