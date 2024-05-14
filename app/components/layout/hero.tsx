'use client';

import { Reveal } from '../animation/reveal';
import { DotGrid } from '../animation/dot-grid';
import Link from 'next/link';
import { CTAArrow } from '../animation/cta-arrow';
import { motion } from 'framer-motion';

export default function Hero() {
	return (
		<section className='text-gray-900 dark:text-gray-50 overflow-hidden px-8 py-24 md:px-12 md:py-32'>
			<div className='relative mx-auto max-w-5xl'>
				<div className='pointer-events-none relative z-10'>
					<Reveal>
						<h1 className='pointer-events-auto text-6xl font-black text-gray-950 dark:text-gray-50 md:text-8xl'>
							Hi, I&apos;m{' '}
							<span className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>
								Erik
							</span>
							<span className='text-purple-600'>.</span>
						</h1>
					</Reveal>
					<Reveal>
						<h2 className='pointer-events-auto my-2 text-2xl text-gray-950 dark:text-gray-50 md:my-4 md:text-4xl'>
							I&apos;m a{' '}
							<span className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent font-semibold'>
								Jamstack Developer
							</span>
						</h2>
					</Reveal>

					<Reveal>
						<p className='pointer-events-auto max-w-xl text-sm text-gray-950 dark:text-gray-100 md:text-base'>
							With 15 years under my belt in the web development industry, I've
							journeyed from the bloated ecosystem of WordPress, sculpting
							bespoke websites, to now embracing the cutting-edge trio of
							Next.js, Tailwind CSS, and Sanity headless CMS. My evolution in
							the field is not just about changing tools but about adapting and
							thriving amidst the digital renaissance. Let&apos;s connect! 👏{' '}
						</p>
					</Reveal>
					<Reveal>
						<Link href='/contact'>
							<button className='relative pointer-events-auto mt-4 rounded-md px-6 py-3 font-medium text-gray-100 md:mt-6 overflow-hidden'>
								<span className='relative z-20'>Contact me</span>
								<motion.div
									initial={{ left: 0 }}
									animate={{ left: '-300%' }}
									whileHover={{ scale: 1.05 }}
									transition={{
										repeat: Infinity,
										repeatType: 'mirror',
										duration: 4,
										ease: 'linear',
									}}
									className='bg-[linear-gradient(to_right,#e61453,#e68414,#8f14e6,#e614dc)] absolute z-0 inset-0 w-[400%]'
								></motion.div>
							</button>
						</Link>
					</Reveal>
				</div>
				<div className='hidden lg:block'>
					<DotGrid />
					<CTAArrow />
				</div>
			</div>
		</section>
	);
}
