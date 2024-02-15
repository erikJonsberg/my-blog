import Image from "next/image";
import { PortableTextComponent } from "@/sanity/lib/portable-text-utils";
import { SanityDocument } from "@sanity/client";

export default async function Post({ post }: { post: SanityDocument }) {
	const { title, mainImage, body } = post;
	return (
		<article className='min-h-screen mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20 prose dark:prose-invert'>
			<div className='flex items-center justify-center p-6'>
				{title ? (
					<h1 className='font-extrabold text-7xl bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'>
						{title}
					</h1>
				) : null}
			</div>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				<div className='mx-auto max-w-3xl'>
					{mainImage ? (
						<Image
							src={mainImage.url}
							className='rounded-lg drop-shadow-md mb-6 z-0'
							width={1024}
							height={768}
							priority
							alt={mainImage.alt || " "}
							placeholder='blur'
							blurDataURL={mainImage.metadata.lqip}
						/>
					) : null}

					{body ? <PortableTextComponent value={body} /> : null}
				</div>
			</div>
		</article>
	);
}
