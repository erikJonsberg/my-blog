import { QueryParams, SanityDocument } from 'next-sanity';
import { draftMode } from 'next/headers';
import { loadQuery } from '@/sanity/lib/store';
import { PROJECT_QUERY, PROJECTS_QUERY } from '@/sanity/lib/queries';
import PostPreview from '@/app/components/posts/preview-post';
import { client } from '@/sanity/lib/client';
import Projects from '@/app/components/projects/projects';

export async function generateStaticParams() {
	const projects = await client.fetch<SanityDocument[]>(PROJECTS_QUERY);

	return projects.map((project) => ({
		slug: project.slug.current,
	}));
}

export default async function Page({ params }: { params: QueryParams }) {
	const initial = await loadQuery<SanityDocument>(PROJECT_QUERY, params, {
		// Because of Next.js, RSC and Dynamic Routes this currently
		// cannot be set on the loadQuery function at the "top level"
		perspective: draftMode().isEnabled ? 'previewDrafts' : 'published',
	});

	return draftMode().isEnabled ? (
		<PostPreview
			initial={initial}
			params={params}
		/>
	) : (
		<Projects project={initial.data} />
	);
}
