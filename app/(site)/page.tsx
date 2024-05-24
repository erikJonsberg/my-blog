import Projects from '../components/projects/projects';
import Hero from '../components/layout/hero';
import { PROJECTS_QUERY } from '../../sanity/lib/queries';
import { loadQuery } from '../../sanity/lib/store';
import { SanityDocument } from 'next-sanity';

export default async function Home() {
	const projects = await loadQuery<SanityDocument[]>(PROJECTS_QUERY);
	return (
		<main className='min-h-screen container mx-auto'>
			<Hero />
			<div className='relative mb-16'>
				<div
					className='absolute inset-0 flex items-center'
					aria-hidden='true'
				></div>
			</div>

			<h2 className='text-3xl text-center font-extrabold text-gray-900 dark:text-gray-50 sm:text-4xl'>
				My Projects
			</h2>
			<div className='mt-5'>
				<Projects projects={projects.data} />
			</div>
		</main>
	);
}
