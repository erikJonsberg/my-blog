import Image from "next/image";

export default function StudioLogo(props: any) {
	const { renderDefault } = props;
	return (
		<div className='flex items-center space-x-1'>
			<Image
				alt='Erik Jonsberg logo'
				className='object-cover'
				height={41}
				width={50}
				priority
				src='/images/black-logo.svg'
			/>

			<>{renderDefault(props)}</>
		</div>
	);
}
