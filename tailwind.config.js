/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center: true,
      padding:'16px',
    },
    extend: {
      colors:{
        unggu:'#7776d2FF',
        hitam:'#0f172a',
        abu:'#64748b'
      },
      screens:{
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

