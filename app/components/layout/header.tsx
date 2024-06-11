import Navigation from './navigation';

export default function Header() {
	return (
		<>
			<header className='bg-purple-200/20 dark:bg-gray-900/30 sticky backdrop-blur-md px-4 top-0 z-50 max-w-full border-b border-b-gray-600/25'>
				<Navigation />
			</header>
		</>
	);
}
