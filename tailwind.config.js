/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        black:'#222831',
        primary:'#5D50C6',
        grey:'#191825',
        secondary:'#F85E9F'
      },
      fontSize:{
        "sm": "0.875rem" ,
        'md':'2.75rem',
        'lg': "4.313rem",     }
    },
  },
  plugins: [],
}