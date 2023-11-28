import FeaturedPosts from "./components/posts/featured-posts";
import Hero from "./components/layout/hero";
import { postsQuery } from "@/sanity/lib/queries";
import { sanityFetch, token } from "@/sanity/lib/fetch";
import { SanityDocument } from "next-sanity";
import { draftMode } from "next/headers";
import PreviewPosts from "./components/posts/preview-posts";
import PreviewProvider from "./components/providers/preview-provider";

export default async function Home() {
	const posts = await sanityFetch<SanityDocument[]>({ query: postsQuery });
	const isDraftMode = draftMode().isEnabled;
	if (isDraftMode && token) {
		return (
			<PreviewProvider token={token}>
				<PreviewPosts posts={posts} />
			</PreviewProvider>
		);
	}
	return (
		<main className='min-h-screen container mx-auto'>
			<Hero />
			<div className='relative mb-16'>
				<div
					className='absolute inset-0 flex items-center'
					aria-hidden='true'
				></div>
			</div>
			<h2 className='text-3xl text-center font-extrabold text-gray-900 dark:text-gray-50 sm:text-4xl'>
				My Projects
			</h2>
			<div className='mt-5'>
				<FeaturedPosts posts={posts} />
			</div>
		</main>
	);
}
