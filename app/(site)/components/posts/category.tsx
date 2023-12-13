import { SanityDocument } from "@sanity/client";
import Link from "next/link";
import Image from "next/image";

export default function Category({ category }: { category: SanityDocument }) {
	return (
		<section className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-24'>
			<h1 className='text-center p-6 font-extrabold text-7xl bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>
				Category: {category.title}
			</h1>
			<div className='mx-auto grid max-w-2xl grid-rows-1 grid-cols-1 gap-8 mt-10 lg:max-w-none lg:grid-cols-2'>
				{category.post.map((post: any) => (
					<div key={post?._id}>
						<div className='relative h-96 isolate flex flex-col justify-end overflow-hidden rounded-md bg-gray-900'>
							<Image
								src={post?.mainImage.url}
								className='absolute inset-0 -z-10 h-full w-full object-cover'
								width={768}
								height={1024}
								priority
								placeholder='blur'
								blurDataURL={post?.mainImage.metadata.lqip}
								alt={post?.title}
							/>
							<div className='absolute bottom-0 w-full pb-2 lg:p-0 backdrop-blur-xl bg-gray-600/20 h-24 flex justify-between items-center'>
								<div className='px-4 flex flex-col'>
									<h3 className='text-base lg:text-lg font-bold text-white m-0'>
										<Link href={`/posts/${post?.slug}`}>
											<span className='absolute inset-0' />
											{post?.title}
										</Link>
									</h3>
									<div className='flex items-center'>
										<time
											dateTime={post?.publishedAt}
											className='text-gray-50 text-sm lg:text-base'
										>
											{new Date(post?.publishedAt).toLocaleDateString("en-US", {
												month: "long",
												day: "numeric",
												year: "numeric",
											})}
										</time>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
