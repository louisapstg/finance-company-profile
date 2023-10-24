/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
      "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
   ],
   theme: {
      extend: {},
      screens: {
         ss: "480px",
         sm: "620px",
         md: "768px", //tablets
         lg: "1060px", //desktops
         xl: "1200px", // xl desktops
      }
   },
   plugins: [
      require('flowbite/plugin')
   ],
};
