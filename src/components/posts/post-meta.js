import Image from "next/image";

export default function PostMeta(props) {
	const { title, date, authorName, authorAvatar } = props;

	return (
		<div className='flex flex-col justify-center items-start pt-32 -mt-[104.55px]'>
			<hr className='h-px my-8 bg-gray-400/60 border-0 dark:bg-gray-600 w-full' />
			<h1 className='mt-0'>{title}</h1>
			<div className='flex flex-row gap-4 pb-2'>
				<Image
					src={authorAvatar}
					alt={authorName}
					className='h-16 w-16 flex-none rounded-full bg-white/10'
					width={60}
					height={60}
				/>
				<div className='flex flex-col items-start justify-center'>
					<h5 className='font-body mb-2 mt-0'>{date}</h5>
					<h5 className='font-body m-0'>{authorName}</h5>
				</div>
			</div>
			<hr className='h-px my-8 bg-gray-400/60 border-0 dark:bg-gray-600 w-full' />
		</div>
	);
}
