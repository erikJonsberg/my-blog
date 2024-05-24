'use client';

import { PROJECTS_QUERY } from '@/sanity/lib/queries';
import { QueryResponseInitial, useQuery } from '@sanity/react-loader';
import { SanityDocument } from 'next-sanity';

import Projects from './projects';

export default function ProjectsPreview({
	initial,
}: {
	initial: QueryResponseInitial<SanityDocument[]>;
}) {
	const { data } = useQuery<SanityDocument[] | null>(
		PROJECTS_QUERY,
		{},
		{ initial }
	);

	return data ? (
		<Projects projects={data} />
	) : (
		<div className='bg-red-100'>No posts found</div>
	);
}
