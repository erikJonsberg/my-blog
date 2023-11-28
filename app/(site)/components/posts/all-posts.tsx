//import { getPosts } from "@/src/sanity/utils/sanity-utils";
import Link from "next/link";
import Image from "next/image";
import type { SanityDocument } from "@sanity/client";

export default async function Posts({
	posts = [],
}: {
	posts: SanityDocument[];
}) {
	const title = posts.length === 1 ? `1 Post` : `${posts.length} Posts`;

	return (
		<section className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-24'>
			<h1 className='text-2xl text-center p-4 font-bold'>{title}</h1>
			<div className='mx-auto grid max-w-2xl grid-rows-1 grid-cols-1 gap-8 mt-10 lg:max-w-none lg:grid-cols-3'>
				{posts.map((post) => (
					<div key={post._id}>
						<div className='relative h-full isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80'>
							<Image
								src={post.mainImage}
								className='absolute inset-0 -z-10 h-full w-full object-cover backdrop-blur-md'
								width={768}
								height={1024}
								alt={post.title}
							/>
							<div className='absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40' />
							<div className='absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10' />
							<div className='flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300'>
								<time dateTime={post.publishedAt} className='mr-8'>
									{post.publishedAt}
								</time>
								<div className='-ml-4 flex items-center gap-x-4'>
									<svg
										viewBox='0 0 2 2'
										className='-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50'
									>
										<circle cx={1} cy={1} r={1} />
									</svg>
									<div className='flex gap-x-2.5'>
										<Image
											src='/profile.jpg'
											alt='Erik Jonsberg'
											width={24}
											height={24}
											className='h-6 w-6 flex-none rounded-full bg-white/10'
										/>
										Erik Jonsberg
									</div>
								</div>
							</div>
							<h3 className='mt-3 text-lg font-semibold leading-6 text-white'>
								<Link href={`/posts/${post.slug}`}>
									<span className='absolute inset-0' />
									{post.title}
								</Link>
							</h3>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
