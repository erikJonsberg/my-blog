//import { getPosts } from "@/src/sanity/utils/sanity-utils";
import Link from "next/link";
import Image from "next/image";
import type { SanityDocument } from "@sanity/client";

export default async function FeaturedPosts({
	posts,
}: {
	posts: SanityDocument[];
}) {
	return (
		<section className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-24'>
			<div className='mx-auto grid max-w-2xl grid-rows-1 grid-cols-1 gap-8 mt-10 lg:max-w-none lg:grid-cols-2'>
				{posts?.length > 0 ? (
					posts.map(async (post) => (
						<div key={post._id}>
							<div className='relative h-96 isolate flex flex-col justify-end overflow-hidden rounded-md bg-gray-900'>
								<Image
									src={post.mainImage.url}
									className='absolute inset-0 -z-10 h-full w-full object-cover'
									width={1024}
									height={768}
									priority
									alt={post.title}
									placeholder='blur'
									blurDataURL={post.mainImage.metadata.lqip}
								/>
								<div className='w-full pb-2 lg:p-0 backdrop-blur-xl bg-gray-600/20 h-24 flex justify-between items-center'>
									<div className='px-4 flex flex-col'>
										<h3 className='text-base lg:text-lg font-bold text-white m-0'>
											<Link href={`/posts/${post.slug}`}>{post.title}</Link>
										</h3>
										<div className='flex items-center'>
											<time
												dateTime={post.publishedAt}
												className='text-gray-50 text-sm lg:text-base'
											>
												{new Date(post.publishedAt).toLocaleDateString(
													"en-US",
													{
														month: "long",
														day: "numeric",
														year: "numeric",
													}
												)}
											</time>
										</div>
									</div>
									<div className='mt-2 lg:mt-0 text-gray-50 flex items-center first:mb-2 flex-row'>
										{post.categories.map((category: any) => (
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
