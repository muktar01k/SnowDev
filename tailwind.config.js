/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'image': "url('/src/assets/wallpapper.png')"
     }
    },
    screens:{
      "sm":"414px"
    }
  },
  plugins: [],
}


