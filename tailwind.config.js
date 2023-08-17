/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            sans: ["Roboto Slab", "ui-sans-serif", "system-ui"],
        },
    },
    plugins: [require("@tailwindcss/line-clamp")],
};
