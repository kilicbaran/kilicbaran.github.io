const defaultTheme = require("tailwindcss/defaultTheme");
const iOSHeight = require("@rvxlab/tailwind-plugin-ios-full-height");

module.exports = {
    content: [
        "./src/**/*.{html,js,svelte,ts}",
    ],
    theme: {
        extend: {
            fontFamily: {
                // Add a custom font for the home page
                sourceSerifPro: [
                    "Source\\ Serif\\ Pro",
                    ...defaultTheme.fontFamily.serif,
                ],
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
            height: {
                18: "4.5rem"
            },
            spacing: {
                28: "7rem",
            },
            letterSpacing: {
                tighter: "-.04em",
            },
            lineHeight: {
                tight: 1.2,
            },
            fontSize: {
                "5xl": "2.5rem",
                "6xl": "2.75rem",
                "7xl": "4.5rem",
                "8xl": "6.25rem",
            },
            boxShadow: {
                sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
                md: "0 8px 30px rgba(0, 0, 0, 0.12)",
            },
        },
    },
    plugins: [iOSHeight],
};
