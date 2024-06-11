import { QueryParams, SanityDocument } from 'next-sanity';
import { loadQuery } from '@/sanity/lib/store';
import { POSTS_QUERY, POST_QUERY } from '@/sanity/lib/queries';
import Post from '@/app/components/posts/single-post';
import { client } from '@/sanity/lib/client';

export const dynamic = 'force-static';

export async function generateStaticParams() {
	const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY);

	return posts.map((post) => ({
		slug: post.slug.current,
	}));
}

export default async function Page({ params }: { params: QueryParams }) {
	const { slug } = params;

	const post = await loadQuery<SanityDocument>(POST_QUERY, { slug });

	return <Post post={post.data} />;
}
