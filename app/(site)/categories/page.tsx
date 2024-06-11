import { CATS_QUERY } from '@/sanity/lib/queries';
import { SanityDocument } from 'next-sanity';
import Categories from '@/app/components/posts/categories';
import { loadQuery } from '@/sanity/lib/store';

export default async function Page() {
	const categories = await loadQuery<SanityDocument[]>(CATS_QUERY);
	return (
		<div className='py-24 sm:py-32 min-h-screen'>
			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				<div className='mx-auto max-w-2xl text-center'>
					<h2 className='text-3xl font-bold tracking-tight dark:text-gray-50 text-gray-900 sm:text-4xl'>
						Categories
					</h2>
				</div>
				<Categories categories={categories.data} />
			</div>
		</div>
	);
}
