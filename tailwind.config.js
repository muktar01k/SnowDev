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
      "sm":{"min":"310px", "max":"500px"},
      "smx":"390px",
      "smxx":"360px",
      "md":{"min":"768px", "max":"1000px"},
      "mdx":{"min":"1001px","max":"1500px"}
    },
    // animation:{
    //   "bounce":bo
    // }
  },
  plugins: [],
}


