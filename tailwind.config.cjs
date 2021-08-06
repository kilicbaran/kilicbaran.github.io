const defaultTheme = require("tailwindcss/defaultTheme");
const iOSHeight = require("@rvxlab/tailwind-plugin-ios-full-height");
const colors = require('tailwindcss/colors.js');

const config = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	darkMode: "media", // false or 'media' or 'class'
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
			colors: {
				blueGray: colors.blueGray,
				amber: colors.amber,
				lime: colors.lime,
				cyan: colors.cyan,
				rose: colors.rose,
				sky: colors.sky,
				/*blueGray: colors.blueGray,
				coolGray: colors.coolGray,
				gray: colors.gray,
				trueGray: colors.trueGray,
				warmGray: colors.warmGray,
				red: colors.red,
				orange: colors.orange,
				amber: colors.amber,
				lime: colors.lime,
				green: colors.green,
				emerald: colors.emerald,
				teal: colors.teal,
				cyan: colors.cyan,
				sky: colors.sky,
				blue: colors.blue,
				indigo: colors.indigo,
				violet: colors.violet,
				purple: colors.purple,
				fuchsia: colors.fuchsia,
				pink: colors.pink,
				rose: colors.rose,*/
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
	variants: {
		extend: {},
	},
	plugins: [iOSHeight],
};

module.exports = config;
