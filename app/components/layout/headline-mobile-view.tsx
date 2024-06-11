import Link from 'next/link';

export default function HeadlineMobileView() {
	return (
		<div className='pointer-events-none relative z-10'>
			<h1 className='pointer-events-auto leading-[1.2] text-6xl font-black text-gray-950 dark:text-gray-50 md:text-8xl'>
				Hi, I&apos;m{' '}
				<span className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>
					Erik
				</span>
				<span className='text-purple-600'>.</span>
			</h1>
			<h2 className='pointer-events-auto my-2 text-2xl text-gray-950 dark:text-gray-50 md:my-4 md:text-4xl'>
				I&apos;m a{' '}
				<span className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent font-semibold'>
					Jamstack Developer
				</span>
			</h2>
			<p className='pointer-events-auto max-w-xl leading-relaxed text-gray-950 dark:text-gray-100 md:text-base'>
				With 15 years under my belt in the web development industry, I've
				journeyed from the bloated ecosystem of WordPress, sculpting bespoke
				websites, to now embracing the cutting-edge trio of Next.js, Tailwind
				CSS, and Sanity headless CMS. My evolution in the field is not just
				about changing tools but about adapting and thriving amidst the digital
				renaissance. Let&apos;s connect! 👏{' '}
			</p>
			<Link href='/contact'>
				<button className='bg-[linear-gradient(to_right,#e61453,#e68414,#8f14e6,#e614dc)] relative pointer-events-auto mt-4 rounded-md px-6 py-3 font-medium text-gray-100 md:mt-6 overflow-hidden'>
					<span className='relative z-20'>Contact me</span>
				</button>
			</Link>
		</div>
	);
}
