/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '9/16': '9 / 16',
      },
      height: {
        '128': '40rem',
      },
      width: {
        '128': '26rem',
      },
      colors:{
        'pale':'#f6f5f4'
      },
      transitionProperty: {
        'height': 'height',
        'width': 'width',
        'spacing': 'margin, padding',
      }
    } 
  },
  plugins: [],
}