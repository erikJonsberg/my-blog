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
			typography: (theme: any) => ({
				DEFAULT: {
					css: {
						"code::before": {
							content: "none",
						},
						"code::after": {
							content: "none",
						},
						code: {
							backgroundColor: "rgba(0, 0, 0, 0.1)",
							padding: "0.25rem",
							borderRadius: "0.25rem",
							color: "#a855f7",
							fontWeight: "400",
							fontFamily: "var(--space-font)",
						},
						pre: {
							backgroundColor: "black!important",
							"& code": {
								backgroundColor: "black!important",
								color: "white",
							},
						},
					},
				},
				dark: {
					css: {
						color: "white",
						h1: {
							color: "var(--foreground-rgb)",
						},
						h2: {
							color: "var(--foreground-rgb)",
						},
						h3: {
							color: "var(--foreground-rgb)",
						},
						h4: {
							color: "var(--foreground-rgb)",
						},
						h5: {
							color: "var(--foreground-rgb)",
						},
						h6: {
							color: "var(--foreground-rgb)",
						},
						strong: {
							color: "var(--foreground-rgb)",
						},
						a: {
							color: "#ffd600",
						},
						figcaption: {
							color: "var(--foreground-rgb)",
						},
						hr: {
							borderColor: "var(--foreground-rgb)",
						},
						ol: {
							li: {
								"&::marker": {
									color: "#9e9e9e",
								},
							},
						},
						ul: {
							li: {
								"&::marker": {
									color: "#9e9e9e",
								},
							},
						},
						blockquote: {
							borderLeftColor: "#9e9e9e",
							color: "var(--foreground-rgb)",
						},
						pre: {
							borderRadius: "1rem!important",
							color: "var(--foreground-rgb)",
							backgroundColor: "black",
							"& code": {
								backgroundColor: "black!important",
								color: "white",
							},
						},
						code: {
							backgroundColor: "rgba(255, 255, 255, 0.1)",
							padding: "0.25rem",
							borderRadius: "1rem!important",
							fontFamily: "var(--space-font)!important",
							fontWeight: "400",
							color: "#ffd600",
							"&::before": {
								content: "none",
							},
							"&::after": {
								content: "none",
							},
						},
					},
				},
			}),
			fontFamily: {
				body: "var(--inter-font)",
				heading: "var(--montserrat-font)",
				code: "var(--space-font)",
			},
		},
	},
	variants: {
		typography: ["dark"],
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms"),
		require("@headlessui/tailwindcss"),
	],
};
