/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors: {
      "light-red": "rgb(255, 208, 208)",
      "dark-red": "rgb(231, 4, 4)",
      "light-green": "rgb(208, 255, 208)",
      "dark-green": "rgb(4, 231, 4)",
      "light-blue": "rgb(208, 208, 255)",
      "dark-blue": "rgb(4, 4, 231)",
      "light-yellow": "rgb(255, 255, 208)",
      "dark-yellow": "rgb(231, 231, 4)",
      "light-purple": "rgb(255, 208, 255)",
      "dark-purple": "rgb(231, 4, 231)",
      "light-orange": "rgb(255, 208, 208)",
      "dark-orange": "rgb(231, 4, 4)",
      "light-cyan": "rgb(208, 255, 255)",
      "dark-cyan": "rgb(4, 231, 231)",
    },
    extend: {
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
