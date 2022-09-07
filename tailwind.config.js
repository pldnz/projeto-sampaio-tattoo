/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./style/*.css", "index.html"],
    theme: {
        extend: {
            fontFamily: {
                times: ['"Times New Roman"', "Times", "serif"],
                montserrat: ["Montserrat", "sans-serif"],
            },
        },
    },
    plugins: [],
};
