"use client";

import { Reveal } from "../animation/reveal";
import { DotGrid } from "../animation/dot-grid";
import Link from "next/link";

export default function Hero() {
	return (
		<section className='text-gray-900 dark:text-gray-50 overflow-hidden px-8 py-24 md:px-12 md:py-32'>
			<div className='relative mx-auto max-w-5xl'>
				<div className='pointer-events-none relative z-10'>
					<Reveal>
						<h1 className='pointer-events-auto text-6xl font-black text-gray-950 dark:text-gray-50 md:text-8xl'>
							Hi, I&apos;m{" "}
							<span className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>
								Erik
							</span>
							<span className='text-purple-600'>.</span>
						</h1>
					</Reveal>
					<Reveal>
						<h2 className='pointer-events-auto my-2 text-2xl text-gray-950 dark:text-gray-50 md:my-4 md:text-4xl'>
							I&apos;m a{" "}
							<span className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent font-semibold'>
								Jamstack Developer
							</span>
						</h2>
					</Reveal>

					<Reveal>
						<p className='pointer-events-auto max-w-xl text-sm text-gray-950 dark:text-gray-100 md:text-base'>
							I&apos;ve spent the last 5 years building and scaling software for
							some pretty cool companies. I also teach people to paint online
							(incase you&apos;ve got an empty canvas layin&apos; around 🎨).
							Let&apos;s connect!
						</p>
					</Reveal>
					<Reveal>
						<Link href='/contact'>
							<button className='pointer-events-auto mt-4 rounded bg-indigo-600 px-4 py-2 font-medium text-slate-100 transition-all hover:bg-indigo-700 active:scale-95 md:mt-6'>
								Contact me
							</button>
						</Link>
					</Reveal>
				</div>
				<div className='hidden lg:block'>
					<DotGrid />
				</div>
			</div>
		</section>
	);
}
