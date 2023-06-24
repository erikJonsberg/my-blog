import { Inter, Lora } from "next/font/google";
import Header from "./header";

export const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--inter-font",
});

export const lora = Lora({
	subsets: ["latin"],
	display: "swap",
	variable: "--lora-font",
});

export default function Layout(props) {
	return (
		<>
			<main
				className={`${inter.variable} ${lora.variable} font-body flex-col mx-auto max-w-full min-h-screen`}
			>
				<Header />
				{props.children}
			</main>
		</>
	);
}
