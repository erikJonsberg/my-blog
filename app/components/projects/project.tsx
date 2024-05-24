import Image from 'next/image';
import { SanityDocument } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa6';

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
	return builder.image(source);
}

export default async function Project({
	project,
}: {
	project: SanityDocument;
}) {
	const { title, image, description, link, publishedAt } = project;
	return (
		<article className='min-h-screen mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mb-20'>
			<div className='flex items-center justify-center p-6'>
				{title ? (
					<h1 className='font-extrabold text-6xl bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-pretty'>
						{title}
					</h1>
				) : null}
			</div>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				<div className='mx-auto max-w-3xl'>
					{image ? (
						<Image
							src={urlFor(image.asset.url).url()}
							className='rounded-lg drop-shadow-md mb-6 z-0'
							width={1024}
							height={768}
							priority
							alt={image.alt || ''}
							placeholder='blur'
							blurDataURL={image.asset.metadata.lqip}
						/>
					) : null}
					<div className='max-w-5xl mt-8'>
						{description && { description }}
						<div className='max-w-5xl mt-4 flex justify-between'>
							<div className='text-lg font-bold'>
								{publishedAt && { publishedAt }}
							</div>
							<div className='text-lg font-bold'>
								<Link href={link}>
									<FaGithub className='mr-2' />
									View on Github
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
}
