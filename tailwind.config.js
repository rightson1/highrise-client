/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.jsx", "./components/*.jsx"],
    theme: {
        extend: {
            colors: {
                blue: "rgba(29 161 242)",
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
            },
        },
    },
    plugins: [require("tailwind-scrollbar")],
};