/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      screens:{
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px'
      },
      extend: {
        colors:{
          themeBlue: 'rgb(3,0,46)',
          themeCream: 'rgb(240,240,240)',
          themeLightBlue: 'rgb(17,69,155)',
        },
        fontFamily: {
          Graphik: ['Graphik', 'sans-serif']
        }
      },
    },
    plugins: [],
  }