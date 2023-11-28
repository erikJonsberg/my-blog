import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

const navStyle: React.CSSProperties = {
	padding: "2rem 1rem",
	color: "#F5BB27",
};

const btnStyle: React.CSSProperties = {
	padding: ".5rem 1rem",
	color: "#f9fafb",
	borderRadius: "0.375rem",
};

export default function StudioNavbar(props: any) {
	return (
		<div>
			<div className='flex items-center justify-between' style={navStyle}>
				<Link className='flex items-center text-yellow-400' href='/'>
					<ArrowUturnLeftIcon className='w-6 h-6 text-yellow-400 mr-2' />
					Back to website
				</Link>
				<button style={btnStyle} className='bg-indigo-600'>
					<Link href='/api/exit-preview'>Exit Preview Mode</Link>
				</button>
			</div>
			<>{props.renderDefault(props)}</>
		</div>
	);
}
