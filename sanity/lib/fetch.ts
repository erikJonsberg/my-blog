import 'server-only';

import { draftMode } from 'next/headers';
import type { QueryOptions, QueryParams } from 'next-sanity';

import { client } from './client';

export const token = process.env.SANITY_API_READ_TOKEN;

export async function sanityFetch<QueryResponse>({
	query,
	params = {},
	tags,
}: {
	query: string;
	params?: QueryParams;
	tags?: string[];
}) {
	const isDraftMode = draftMode().isEnabled;
	if (isDraftMode && !token) {
		throw new Error(
			'The `SANITY_API_READ_TOKEN` environment variable is required.'
		);
	}

	return client.fetch<QueryResponse>(query, params, {
		...(isDraftMode &&
			({
				token: token,
				perspective: 'previewDrafts',
			} satisfies QueryOptions)),
		next: {
			revalidate: isDraftMode ? 0 : false,
			tags,
		},
	});
}
