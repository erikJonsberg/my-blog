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

			<Projects projects={projects.data} />
		</main>
	);
}
