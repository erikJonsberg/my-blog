import "../globals.css";
import type { Metadata } from "next";

export const viewport = {
	width: "device-width",
	initialScale: 1,
};

export const metadata: Metadata = {
	title: "My Studio",
	description: "Sanity Studio for my blog",
	robots: "noindex",
	referrer: "no-referrer",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
