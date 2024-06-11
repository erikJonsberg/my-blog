import Link from 'next/link';
import Image from 'next/image';
import type { SanityDocument } from '@sanity/client';
import { FaGithub } from 'react-icons/fa6';

export default async function Projects({
	projects,
}: {
	projects: SanityDocument[];
}) {
	return (
		<div className='mx-auto max-w-7xl px-6 lg:px-8 lg:pb-20 pb-16'>
			<div className='mx-auto max-w-2xl text-center lg:pt-10 pb-2'>
				<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-50'>
					My Projects
				</h2>
			</div>
			<div className='mx-auto pt-4 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
				{projects?.length > 0 ? (
					projects.map(async (project) => (
						<article
							key={project._id}
							className='flex flex-col items-start justify-between'
						>
							<div className='relative w-full rounded-xl bg-white shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:bg-zinc-900 dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] dark:before:pointer-events-none dark:before:absolute dark:before:-inset-px dark:before:rounded-xl dark:before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset]'>
								<Image
									src={project.screenshot.url}
									className='aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]'
									width={1024}
									height={768}
									priority
									alt={project.title}
									placeholder='blur'
									blurDataURL={project.screenshot.metadata.lqip}
								/>
								<div className='absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10' />
							</div>
							<div className='max-w-xl'>
								<div className='mt-8 flex items-center gap-x-4 text-xs'>
									<time
										dateTime={project.publishedAt}
										className='text-gray-500'
									>
										{project.publishedAt}
									</time>
								</div>
								<div className='group relative'>
									<h3 className='mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-gray-50'>
										{project.title}
									</h3>
									<p className='mt-2 text-sm leading-6 text-gray-800 dark:text-gray-50'>
										{project.description}
									</p>
								</div>
								<div className='relative mt-2 flex justify-start items-center gap-4'>
									<FaGithub className='size-6' />
									<div className='flex-shrink'>
										<p className='mb-0 text-sm leading-6 font-semibold text-gray-900 dark:text-gray-50'>
											<Link
												className='underline hover:no-underline'
												href={project.link}
											>
												{' '}
												View on Github
											</Link>
										</p>
									</div>
								</div>
							</div>
						</article>
					))
				) : (
					<p>No projects found</p>
				)}
			</div>
		</div>
	);
}
