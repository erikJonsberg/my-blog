import Image from "next/image";
import { PortableTextComponent } from "@/sanity/lib/portable-text-utils";
import { SanityDocument } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
	return builder.image(source);
}

export default async function Post({ post }: { post: SanityDocument }) {
	const { title, mainImage, body } = post;
	return (
		<article className='min-h-screen mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mb-20'>
			<div className='flex items-center justify-center p-6'>
				{title ? (
					<h1 className='font-extrabold text-6xl bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-pretty'>
						{title}
					</h1>
				) : null}
			</div>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				<div className='mx-auto max-w-3xl'>
					{mainImage ? (
						<Image
							src={urlFor(mainImage.asset.url).url()}
							className='rounded-lg drop-shadow-md mb-6 z-0'
							width={1024}
							height={768}
							priority
							alt={mainImage.alt || ""}
							placeholder='blur'
							blurDataURL={mainImage.asset.metadata.lqip}
						/>
					) : null}
					<div className='prose dark:prose-invert dark:prose-dark prose-code:before:content-none prose-code:after:content-none prose-code:font-code prose-h2:text-3xl dark:prose-code:bg-black dark:prose-pre:!bg-black prose-pre:!rounded-lg prose-pre:!bg-gray-200 prose-h1:text-center max-w-5xl mt-8'>
						{body ? <PortableTextComponent value={body} /> : null}
					</div>
				</div>
			</div>
		</article>
	);
}
