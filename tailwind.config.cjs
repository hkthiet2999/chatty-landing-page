/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'blue': '#4D7BF3',
        'light-blue': '#4D7BF333',
      },
      width: {
        '50': '50%',
      },
      height: {
        '30': '30%',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
