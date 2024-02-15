import Posts from "../components/posts/all-posts";
import Categories from "../components/posts/categories";
import { POSTS_QUERY, CATS_QUERY } from "@/sanity/lib/queries";
import { loadQuery } from "@/sanity/lib/store";
import { SanityDocument } from "next-sanity";
import { draftMode } from "next/headers";
import PreviewPosts from "../components/posts/preview-posts";

export default async function AllPosts() {
	const initial = await loadQuery<SanityDocument[]>(
		POSTS_QUERY,
		{},
		{
			perspective: draftMode().isEnabled ? "previewDrafts" : "published",
		}
	);
	const categories = await loadQuery<SanityDocument[]>(CATS_QUERY);
	return draftMode().isEnabled ? (
		<PreviewPosts initial={initial} />
	) : (
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
				<Posts posts={initial.data} />
			</div>
		</div>
	);
}
