// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}", // 필요한 경우 추가
    "./public/**/*.{js,ts,jsx,tsx}", // 필요한 경우 추가
  ],
  darkMode: false,
  theme: {
    extend: {},
  },
  plugins: [],
};
