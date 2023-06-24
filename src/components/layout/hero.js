import Image from "next/image";

export default function Hero() {
	return (
		<section className='max-w-screen-md flex items-center flex-col mx-auto px-4'>
			<div className='flex items-center justify-center p-6'>
				<Image
					src='/images/hero.jpg'
					priority
					alt='Erik Jonsberg'
					width={250}
					height={250}
					className='rounded-full drop-shadow-md'
				/>
			</div>
			<h1 className='text-center'>Hi, I&apos;m Erik</h1>
			<p>
				Civil ashamed nothing wanted enabled danger favour water prudent winding
				written projection most. Preference property help indulged over
				moonlight delicate northward sweetness merely replied pronounce. Become
				coming stanhill resolved drawings wish provided answer result out.
				Piqued addition raillery thrown possible read raising dull wrote pursuit
				felicity curiosity elderly face returned see. Declared but impossible no
				household visitor fruit parties end through power out burst offended
				among.
			</p>
			<p>
				Now blushes after enough added given extremely securing are continual
				existence fond strictly turned evening looking determine. Unwilling
				cordially ecstatic. Dissimilar venture design parlors journey points
				garrets pasture overcame. Result except journey other thoroughly
				excellence missed aware. Breeding length deficient easily things settled
				sometimes sister enquire delighted beauty next pianoforte conduct.
			</p>
			<p>
				Forty remain round performed bore except sufficient winter. Books wholly
				contained suffering resolution conveying remember followed green. It
				frankness books even summer them manner given. Returned quit evening
				uncommonly depend why warmly raptures principles. Wisdom laughter unable
				fact so taken unpleasing that held hardly.
			</p>
		</section>
	);
}
