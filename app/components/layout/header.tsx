import Navigation from "./navigation";

export default function Header() {
	return (
		<>
			<header className='bg-gray-50/30 dark:bg-gray-900/30 sticky backdrop-blur-md top-0 z-50'>
				<Navigation />
			</header>
		</>
	);
}
