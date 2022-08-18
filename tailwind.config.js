/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
   // These paths are just examples, customize them to match your project structure
   purge: [
     './*.html',
     './*.{js,jsx,ts,tsx,vue}',
   ],
content: ['./*.html'],
  theme: {
    screens:{
        xsm:"480px",
        sm:"735px",
        md:"950px",
        lg:"976px",
        xl:"14440px"
            },   
        fontFamily: {
            'ShopifySans': ['ShopifySans Web Medium', 'sans-serif'],
            'font-sans':['ui-sans-serif', 'system-ui'] ,
            'font-monst':['Montserrat', 'sans-serif']
          },
    extend: {

        fontFamily: {
            'poppins': ['Poppins', 'sans-serif'] 
          },
          colors: {
            'regal-blue': '#243c5a',
            'm-seashell':'#fbf7ed',
            'sh-green':'#004c3f',
            'lt-green':'#008060',
            'm-honeydew':'rgb(243,252,244)',
            'dk-green':'rgb(0,46,37)',
          },

    },
  },
  plugins: [],
}
