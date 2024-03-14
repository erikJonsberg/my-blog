import { draftMode } from "next/headers";
import "../globals.css";
import type { Metadata } from "next";
import { Inter, Montserrat, Fira_Code } from "next/font/google";
import Header from "@/app/components/layout/header";
import Providers from "@/app/components/providers/providers";
import { Suspense } from "react";
import Footer from "@/app/components/layout/footer";
import LiveVisualEditing from "@/sanity/components/visual-editing";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--inter-font",
});

const montserrat = Montserrat({
	subsets: ["latin"],
	display: "swap",
	variable: "--montserrat-font",
});

const firaCode = Fira_Code({
	subsets: ["latin"],
	display: "swap",
	variable: "--fira-code-font",
});

export const viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 1,
};

export const metadata: Metadata = {
	title: "Erik Jonsberg's Blog",
	description: "A blog about web development, design, and other cool stuff.",
};

const style: React.CSSProperties = {
	colorScheme: "dark",
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className='dark' style={style} suppressHydrationWarning>
			<body
				className={`${inter.variable} ${montserrat.variable} ${firaCode.variable} font-body flex-col mx-auto max-w-full min-h-screen`}
			>
				<Providers>
					<Header />
					<Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
					{draftMode().isEnabled && <LiveVisualEditing />}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
