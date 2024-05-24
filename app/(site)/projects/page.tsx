import { SanityDocument } from 'next-sanity';
import { draftMode } from 'next/headers';
import { loadQuery } from '@/sanity/lib/store';
import { PROJECTS_QUERY } from '@/sanity/lib/queries';
import Projects from '@/app/components/projects/projects';

export default async function Page() {
	const projects = await loadQuery<SanityDocument[]>(PROJECTS_QUERY);
	return <Projects projects={projects.data} />;
}
