import Posts from '@/app/components/posts/all-posts';
import Categories from '@/app/components/posts/categories';
import { POSTS_QUERY, CATS_QUERY } from '@/sanity/lib/queries';
import { loadQuery } from '@/sanity/lib/store';
import { SanityDocument } from 'next-sanity';

export default async function Page() {
	const posts = await loadQuery<SanityDocument[]>(POSTS_QUERY);
	const categories = await loadQuery<SanityDocument[]>(CATS_QUERY);
	return (
		<div className='py-24 sm:py-32'>
			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				<div className='mx-auto max-w-2xl text-center'>
					<h2 className='text-3xl font-bold tracking-tight dark:text-gray-50 text-gray-900 sm:text-4xl'>
						Everything
					</h2>
					<p className='mt-2 text-lg leading-8 dark:text-gray-200 text-gray-600'>
						Tips and tricks for building your next project and then some
					</p>
				</div>
				<Categories categories={categories.data} />
				<Posts posts={posts.data} />
			</div>
		</div>
	);
}
