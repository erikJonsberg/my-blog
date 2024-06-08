'use client';

import { CAT_QUERY } from '@/sanity/lib/queries';
import { QueryResponseInitial, useQuery } from '@sanity/react-loader';
import { QueryParams, SanityDocument } from 'next-sanity';

import Category from './category';

export default function CatPreview({
	initial,
	params,
}: {
	initial: QueryResponseInitial<SanityDocument>;
	params: QueryParams;
}) {
	const { data } = useQuery<SanityDocument | null>(CAT_QUERY, params, {
		initial,
	});

	return data ? (
		<Category category={data} />
	) : (
		<div className='bg-red-100'>Post not found</div>
	);
}
