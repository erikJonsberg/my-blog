import Link from 'next/link';
import Image from 'next/image';
import type { SanityDocument } from '@sanity/client';

export default async function Projects({
	projects,
}: {
	projects: SanityDocument[];
}) {
	return (
		<div className='mx-auto max-w-7xl px-6 lg:px-8'>
			<div className='mx-auto max-w-2xl text-center'>
				<h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-50'>
					My Projects
				</h2>
			</div>
			<div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
				{projects?.length > 0 ? (
					projects.map(async (project) => (
						<article
							key={project._id}
							className='flex flex-col items-start justify-between'
						>
							<div className='relative w-full'>
								<Image
									src={project.screenshot.url}
									className='aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]'
									width={1024}
									height={768}
									priority
									alt={project.screenshot.alt}
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
									<h3 className='mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600'>
										<span className='absolute inset-0' />
										{project.title}
									</h3>
									<p className='mt-5 line-clamp-3 text-sm leading-6 text-gray-600'>
										{project.description}
									</p>
								</div>
								<div className='relative mt-8 flex items-center gap-x-4'>
									<div className='text-sm leading-6'>
										<p className='font-semibold text-gray-900'>
											<Link href={project.link}>
												<span className='absolute inset-0' />
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
