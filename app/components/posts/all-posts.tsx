import Link from 'next/link';
import Image from 'next/image';
import type { SanityDocument } from '@sanity/client';

export default async function Posts({ posts }: { posts: SanityDocument[] }) {
	return (
		<section className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-24'>
			<div className='mx-auto grid max-w-2xl grid-rows-1 grid-cols-1 gap-8 mt-10 lg:max-w-none lg:grid-cols-2'>
				{posts?.length > 0 ? (
					posts.map(async (post) => (
						<div key={post._id}>
							<div className='relative h-96 isolate flex flex-col justify-between overflow-hidden rounded-xl w-full bg-white shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:bg-zinc-900 dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] dark:before:pointer-events-none dark:before:absolute dark:before:-inset-px dark:before:rounded-xl dark:before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset]'>
								<div className='mt-2 lg:mt-0 text-gray-50 px-6 py-4 flex items-center justify-end'>
									{post.categories.map(async (category: any) => (
										<div
											key={category._id}
											className='first:mb-2 lg:first:mb-0'
										>
											<Link href={`/categories/${category.slug}`}>
												<button className='py-2 px-3 bg-purple-600 text-gray-50 rounded-full text-xs font-bold mr-4 gap-2'>
													{category.title}
												</button>
											</Link>
										</div>
									))}
								</div>
								<Image
									src={post.mainImage.url}
									className='absolute inset-0 -z-10 h-full w-full object-cover'
									width={1024}
									height={768}
									priority
									alt={post.alt}
									placeholder='blur'
									blurDataURL={post.mainImage.metadata.lqip}
								/>
								<div className='w-full px-6 py-4 backdrop-blur-xl bg-gray-600/20 flex items-start flex-col'>
									<h3 className='text-base lg:text-lg font-bold text-white m-0'>
										<Link href={`/posts/${post.slug}`}>{post.title}</Link>
									</h3>
									<time
										dateTime={post.publishedAt}
										className='text-gray-50 text-sm lg:text-base'
									>
										{new Date(post.publishedAt).toLocaleDateString('en-US', {
											month: 'long',
											day: 'numeric',
											year: 'numeric',
										})}
									</time>
								</div>
							</div>
						</div>
					))
				) : (
					<div className='p-4 text-red-500'>No posts found</div>
				)}
			</div>
		</section>
	);
}
