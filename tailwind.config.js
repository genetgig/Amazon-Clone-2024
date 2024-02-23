/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      fontFamily: {
      titleFont: "Roboto",
      bodyFont:" Poppins",
  },
  colors:{
    amazone_blue: "#232f3e",
    amazone_light: "#232f3E",
    amazone_yellow: "#febd69",
    buttn_color: "#FFD978",
    button_shade: "#d49644",
    footer_bottom: "#131A22"
  },
  maxWidth:{
    container: "1440px",
  },
  screens:{
    xs: "320px",
    sm: "375px",
    sml: "500px",
    md: "667px",
    mdl: "748px",
    lg: "960px",
    lgl: "1024px",
    x1: "1280px",
  },
  boxShadow:{
    textShadow: "0px 0px 32px 1px rgba(199, 199, 199, 1)",
    amaonInput: "0 0 3px 2px rgb(228 121 17/50%)",
  }
},
  },
  plugins: [],
}