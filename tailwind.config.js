/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        header: {
          dark: "#32332c",
          light: "#ffffff",
        },
        "theme-color": {
          dark: "#ff4b50",
          light: "#ff4b50",
          DEFAULT: "#ff4b50",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
}
