import Image from "next/image";

export default function FeaturedImage(props) {
	const { imageUrl, imageAlt } = props;

	return (
		<div className='flex flex-col justify-center items-start pt-4'>
			<Image
				src={imageUrl}
				alt={imageAlt}
				width={1200}
				height={630}
				className='mb-8 w-full rounded-2xl shadow-md'
				placeholder='blur'
				blurDataURL={"/images/blur.webp"}
				priority={true}
			/>
		</div>
	);
}
