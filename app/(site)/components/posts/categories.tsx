import Link from "next/link";
import type { SanityDocument } from "@sanity/client";

export default async function PostsCategories({
	categories = [],
}: {
	categories: SanityDocument[];
}) {
	return (
		<div className='mt-8 max-w-7xl px-4 sm:px-6 lg:px-8'>
			<div className='flex items-center justify-center gap-4'>
				{categories.map((category) => (
					<div key={category._id}>
						<Link
							href={`/categories/${category.slug}`}
							className='hover:no-underline text-sm font-bold text-white p-2 bg-indigo-600 rounded-md'
						>
							{category.title}
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}
