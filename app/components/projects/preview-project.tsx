'use client';

import { PROJECT_QUERY } from '@/sanity/lib/queries';
import { QueryResponseInitial, useQuery } from '@sanity/react-loader';
import { QueryParams, SanityDocument } from 'next-sanity';

import Project from './project';

export default function ProjectPreview({
	initial,
	params,
}: {
	initial: QueryResponseInitial<SanityDocument>;
	params: QueryParams;
}) {
	const { data } = useQuery<SanityDocument | null>(PROJECT_QUERY, params, {
		initial,
	});

	return data ? (
		<Project project={data} />
	) : (
		<div className='bg-red-100'>Post not found</div>
	);
}
