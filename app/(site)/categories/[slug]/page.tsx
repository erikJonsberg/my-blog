import { QueryParams, SanityDocument } from 'next-sanity';
import { loadQuery } from '@/sanity/lib/store';
import { CAT_QUERY, CATS_QUERY } from '@/sanity/lib/queries';
import Category from '@/app/components/posts/category';
import { client } from '@/sanity/lib/client';

export async function generateStaticParams() {
	const categories = await client.fetch<SanityDocument>(CATS_QUERY);

	return categories.map((category: any) => ({
		slug: category.slug,
	}));
}

export default async function Page({ params }: { params: QueryParams }) {
	const { slug } = params;

	const category = await loadQuery<SanityDocument>(CAT_QUERY, { slug });
	return <Category category={category.data} />;
}
