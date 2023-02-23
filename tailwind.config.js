/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media',
  theme: {
    colors: {
      transparent: "transparent",
      cuurent: "currentColor",
    },
    extend: {},
  },
  plugins: [],
}
