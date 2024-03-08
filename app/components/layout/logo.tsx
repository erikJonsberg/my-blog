import Image from "next/image";

export default function Logo() {
	return (
		<div className='flex items-center justify-center p-4'>
			<Image
				src={"/images/black-logo.svg"}
				alt='Erik Jonsberg logo'
				width={80}
				height={66}
				priority
				style={{ width: 80, height: "auto" }}
			/>
		</div>
	);
}
