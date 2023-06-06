/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			typography: (theme) => ({}),
			fontFamily: {
				body: "var(--inter-font)",
				heading: "var(--lora-font)",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
