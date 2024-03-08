/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	mode: "jit",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						p: {
							code: {
								backgroundColor: "#f3f4f6",
								padding: "2px",
								borderRadius: "0.25rem",
							},
						},
					},
				},
				dark: {
					css: {
						p: {
							code: {
								backgroundColor: "#4b5563",
								padding: "2px",
								borderRadius: "0.25rem",
							},
						},
					},
				},
			},
			fontFamily: {
				body: "var(--inter-font)",
				heading: "var(--montserrat-font)",
				code: "var(--fira-code-font)",
			},
		},
	},
	variants: {
		extend: { typography: ["dark"] },
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms"),
		require("@headlessui/tailwindcss"),
	],
};
