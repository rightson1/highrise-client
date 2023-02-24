/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.jsx", "./components/*.jsx"],
  theme: {
    extend: {
      colors: {
        blue: "rgba(29 161 242)",
      },
      screens: {
        phone: { min: "100px", max: "400px" },
      },
      boxShadow: {
        "3xl": "10px 0px 60px -10px rgba(0, 0, 0, 0.3)",
        "4xl": "10px 0px 10px 0px rgba(0, 0, 0, .5)",
        "5xl": "8px -5px 4px 0px rgba(0, 0, 0, .3)",
        x: "8px -5px 4px 0px rgba(0, 0, 0, .3)",
        x1: "-5px 5px 4px 0px rgba(0, 0, 0, .3)",
      },
      backgroundImage: {
        rice: "url('/rice.png')",
      },
      colors: {
        headingColor: "#2e2e2e",
        rightson: "rgba(0,0,0,0.9)",
        textColor: "#515151",
        cartNumBg: "#e80013",
        // cartNumBg: "#FF6929",
        primary: "#f5f3f3",
        cardOverlay: "rgba(256,256,256,0.4)",
        lighttextGray: "#9ca0ab",
        card: "rgba(256,256,256,0.8)",
        cartBg: "#282a2c",
        cartItem: "#2e3033",
        cartTotal: "#343739",
        rowBg: "rgba(255,131,0,0.06)",

        tertiary: "#E84727",
        error: "#E63329",
        black75: "#261F22",
        Black: "#261F22",
        black50: "#261F22",
        orange: " hsl(26, 100%, 55%)",
        bgEn: "hsl(223, 64%, 98%)",
        "pale-orange": " hsl(25, 100%, 94%)",
        "very-dark-blue": "hsl(220, 13%, 13%)",
        "Grayish-blue": "hsl(220, 14%, 75%)",
        "light-grayish-blue": "hsl(223, 64%, 98%)",
        gas: "#5D5DFF",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
