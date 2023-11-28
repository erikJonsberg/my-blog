import { buildLegacyTheme } from "sanity";

const props = {
	"--my-white": "#f9fafb",
	"--my-black": "#111827",
	"--my-purple": "#9333EA",
	"--my-blue": "#4F45E5",
	"--my-red": "#db4437",
	"--my-yellow": "#f4b400",
	"--my-green": "#0f9d58",
	"--my-orange": "#F9813E",
};

export const myTheme = buildLegacyTheme({
	/* Base theme colors */
	"--black": props["--my-black"],
	"--white": props["--my-white"],

	"--gray": "#e7e5e4",
	"--gray-base": "#a8a29e",

	"--component-bg": props["--my-black"],
	"--component-text-color": props["--my-white"],

	/* Brand */
	"--brand-primary": props["--my-yellow"],

	// Default button
	"--default-button-color": props["--my-white"],
	"--default-button-primary-color": props["--my-yellow"],
	"--default-button-success-color": props["--my-green"],
	"--default-button-warning-color": props["--my-yellow"],
	"--default-button-danger-color": props["--my-red"],

	/* State */
	"--state-info-color": props["--my-white"],
	"--state-success-color": props["--my-green"],
	"--state-warning-color": props["--my-yellow"],
	"--state-danger-color": props["--my-red"],

	/* Navbar */
	"--main-navigation-color": props["--my-black"],
	"--main-navigation-color--inverted": props["--my-white"],

	"--focus-color": props["--my-yellow"],
});
