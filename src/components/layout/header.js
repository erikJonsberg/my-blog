import Navigation from "./navigation";
import Head from "next/head";

export default function Header() {
	return (
		<>
			<Head>
				<title>Erik Jonsberg&apos;s Blog</title>
				<meta name='description' content="Erik Jonsberg's Blog" />
			</Head>
			<header className='bg-gray-50/30 dark:bg-gray-900/30 sticky backdrop-blur-md top-0 z-10'>
				<Navigation />
			</header>
		</>
	);
}
