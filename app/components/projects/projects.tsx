import Link from 'next/link';
import Image from 'next/image';
import type { SanityDocument } from '@sanity/client';
import { FaGithub } from 'react-icons/fa6';
import { urlForImage } from '@/sanity/lib/image';

export default async function Projects({
	projects,
}: {
	projects: SanityDocument[];
}) {
	return (
		<section className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-24'>
			<div className='mx-auto grid max-w-2xl grid-rows-1 grid-cols-1 gap-8 mt-10 lg:max-w-none lg:grid-cols-2'>
				{projects?.length > 0 ? (
					projects.map(async (project) => (
						<div key={project._id}>
							<Image
								src={urlForImage(project.screenshot.url)}
								className='absolute inset-0 -z-10 h-full w-full object-cover'
								width={1024}
								height={768}
								priority
								alt={project.title}
								placeholder='blur'
								blurDataURL={project.screenshot.metadata.lqip}
							/>
							<div className='w-full px-6 py-4 backdrop-blur-xl bg-gray-600/20 flex items-start flex-col'>
								<h2 className='text-base lg:text-lg font-bold text-white m-0'>
									{project.title}
								</h2>
								<p>{project.description}</p>
								<div className='flex justify-between gap-2'>
									<div className='flex items-center'>
										<time
											dateTime={project.publishedAt}
											className='text-gray-50 text-sm lg:text-base'
										>
											{new Date(project.publishedAt).toLocaleDateString(
												'en-US',
												{
													month: 'long',
													day: 'numeric',
													year: 'numeric',
												}
											)}
										</time>
									</div>
									<div className='flex items-center'>
										<Link href={project.link}>
											<FaGithub className='mr-4' />
											View project on Github
										</Link>
									</div>
								</div>
							</div>
						</div>
					))
				) : (
					<div className='p-4 text-red-500'>No projects found</div>
				)}
			</div>
		</section>
	);
}
