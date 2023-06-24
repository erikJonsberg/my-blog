import Link from "next/link";
import Image from "next/image";

export default function PostItem(props) {
	const {
		title,
		authorName,
		image,
		authorAvatar,
		date,
		imageAlt,
		excerpt,
		slug,
	} = props.post;

	const formattedDate = new Date(date).toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric",
	});

	const imageUrl = `/images/posts/${slug}/${image}`;
	const avatar = `/images/authors/${authorAvatar}`;
	const postUrl = `/posts/${slug}`;

	return (
		<article
			key={slug}
			className='shadow-md relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80'
		>
			<Image
				src={imageUrl}
				alt={imageAlt}
				className='absolute inset-0 -z-10 h-full w-full object-cover'
				width={768}
				height={1024}
			/>
			<div className='absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40' />
			<div className='absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10' />

			<div className='flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300 '>
				<time dateTime={date} className='mr-8'>
					{formattedDate}
				</time>
				<div className='-ml-4 flex items-center gap-x-4'>
					<svg
						viewBox='0 0 2 2'
						className='-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50'
					>
						<circle cx={1} cy={1} r={1} />
					</svg>
					<div className='flex gap-x-2.5'>
						<Image
							src={avatar}
							alt={authorName}
							className='h-6 w-6 flex-none rounded-full bg-white/10'
							width={24}
							height={24}
						/>
						{authorName}
					</div>
				</div>
			</div>
			<div className='text-sm lg:text-lg font-semibold leading-6 text-white'>
				<Link className='mx-4 absolute inset-0' href={postUrl}>
					<h3 className='text-shadow'>{title}</h3>
					<p className='text-shadow truncate'>{excerpt}</p>
				</Link>
			</div>
		</article>
	);
}
