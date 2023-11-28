import Image from "next/image";
import { PortableTextComponent } from "@/sanity/lib/portable-text-utils";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import { SanityDocument } from "@sanity/client";

const builder = imageUrlBuilder(client);

export default function Post({ post }: { post: SanityDocument }) {
	return (
		<article className='min-h-screen mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20 prose dark:prose-invert'>
			<div className='flex items-center justify-center p-6'>
				<h1 className='font-extrabold text-7xl bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>
					{post.title}
				</h1>
			</div>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				<div className='mx-auto max-w-3xl'>
					{post?.mainImage ? (
						<Image
							src={builder.image(post.mainImage).width(1024).height(768).url()}
							width={1024}
							height={768}
							alt={post.title}
							className='rounded-lg drop-shadow-md mb-6 z-0'
						/>
					) : null}

					{post?.body ? <PortableTextComponent value={post.body} /> : null}
				</div>
			</div>
		</article>
	);
}
