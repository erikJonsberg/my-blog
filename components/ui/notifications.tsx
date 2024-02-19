"use client";

import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export const SuccessNotification = () => {
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(false);
		}, 3000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					initial={{ scale: 0, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					exit={{ scale: 0, opacity: 0 }}
					transition={{ type: "spring" }}
					className='p-3 w-full flex items-center rounded-lg gap-2 font-bold shadow-lg text-white bg-green-600 z-50'
				>
					<CheckCircleIcon className='w-8 h-8' />
					Form sent successfully!
					<button
						onClick={() => setIsVisible(false)}
						className='w-6 h-6 ml-auto focus:outline-none text-white'
					>
						<XMarkIcon />
					</button>
				</motion.div>
			)}
		</AnimatePresence>
	);
};
