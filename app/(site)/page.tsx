import Posts from "../components/posts/all-posts";
import Hero from "../components/layout/hero";
import { POSTS_QUERY } from "../../sanity/lib/queries";
import { loadQuery } from "../../sanity/lib/store";
import { SanityDocument } from "next-sanity";
import { draftMode } from "next/headers";
import PreviewPosts from "../components/posts/preview-posts";

export default async function Home() {
	const initial = await loadQuery<SanityDocument[]>(
		POSTS_QUERY,
		{},
		{
			perspective: draftMode().isEnabled ? "previewDrafts" : "published",
		}
	);
	return draftMode().isEnabled ? (
		<PreviewPosts initial={initial} />
	) : (
		<main className='min-h-screen container mx-auto'>
			<Hero />
			<div className='relative mb-16'>
				<div
					className='absolute inset-0 flex items-center'
					aria-hidden='true'
				></div>
			</div>

			<h2 className='text-3xl text-center font-extrabold text-gray-900 dark:text-gray-50 sm:text-4xl'>
				Featured Posts
			</h2>
			<div className='mt-5'>
				<Posts posts={initial.data} />
			</div>
		</main>
	);
}
