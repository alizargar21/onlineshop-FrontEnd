/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx}"],
  theme: {
 
    fontFamily:{
      "Oswald" : ['Oswald' , "Arial"] ,
      "Ubuntu": ["Ubuntu"],
      "Roboto": ["Roboto"]
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      'xl': { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      'lg': { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      'md': { max: "767px" },
      // => @media (max-width: 767px) { ... }

      'sm': { max: "479px" }
      // => @media (max-width: 639px) { ... }
      
    },
    extend: {
        colors : {

      "primary" : {
        DEFAULT : "#1f2937",
        dark: "#d1d5db"
      },
      "containerBG": {
        DEFAULT : "#e5e7eb",
        dark : "#1f2937"
      },
      btnPrimary : "#be123c",
     

    },
    },
  },
  plugins: [],
};
