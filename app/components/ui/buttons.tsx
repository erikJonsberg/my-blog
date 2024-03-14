import { motion } from "framer-motion";

export function AIButton(): JSX.Element {
	return (
		<button className='text-white font-medium px-3 py-2 rounded-md overflow-hidden relative transition-transform hover:scale-105 active:scale-95'>
			<span className='relative z-20'>Contact me</span>
			<motion.div
				initial={{ left: 0 }}
				animate={{ left: "-300%" }}
				transition={{
					repeat: Infinity,
					repeatType: "mirror",
					duration: 4,
					ease: "linear",
				}}
				className='bg-[linear-gradient(to_right,#e61453,#e68414,#8f14e6,#e614dc)] absolute z-0 inset-0 w-[400%]'
			></motion.div>
		</button>
	);
}
