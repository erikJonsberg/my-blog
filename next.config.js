/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			"lh3.googleusercontent.com",
			"s.gravatar.com",
			"images.unsplash.com",
		],
	},
};

module.exports = nextConfig;
