import Image from "next/image";

export default function Logo() {
	return (
		<div className='flex items-center justify-center'>
			<Image
				src={"/images/logo.svg"}
				alt='Erik Jonsberg logo'
				width={0}
				height={0}
				className='rounded-full w-14 h-auto'
			/>
		</div>
	);
}
