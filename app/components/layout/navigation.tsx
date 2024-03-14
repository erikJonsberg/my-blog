"use client";

import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";
import Link from "next/link";
import Logo from "./logo";
import DarkModeSelect from "../ui/dark-mode-select";

const navigation = [
	{ name: "01. Home", href: "/" },
	{ name: "02. Posts", href: "/posts" },
	{ name: "03. Contact", href: "/contact" },
];

export default function Navigation() {
	let [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<>
			<nav
				className='mx-auto flex max-w-7xl items-center justify-between lg:px-8'
				aria-label='Global'
			>
				<div className='flex items-center justify-center gap-x-12'>
					<Link href='/' className='-m-1.5 p-1.5'>
						<Logo />
					</Link>
					<div className='hidden lg:flex lg:gap-x-12'>
						{navigation.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className='font-code uppercase font-semibold leading-6 dark:text-gray-50 text-gray-900'
							>
								{item.name}
							</Link>
						))}
					</div>
				</div>
				<div className='flex lg:hidden'>
					<button
						type='button'
						className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 dark:text-gray-200 text-gray-700'
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className='sr-only'>Open main menu</span>
						<Bars3Icon className='h-6 w-6' aria-hidden='true' />
					</button>
				</div>
				<div className='hidden lg:flex items-center gap-x-12'>
					<DarkModeSelect />
				</div>
			</nav>
			<Transition show={mobileMenuOpen} as={Fragment}>
				<Dialog onClose={() => setMobileMenuOpen(false)}>
					<div className='fixed inset-0 z-30' />
					<Transition.Child
						as={Fragment}
						enter='transition ease-in-out duration-300 transform'
						enterFrom='translate-x-full'
						enterTo='translate-x-0'
						leave='transition ease-in-out duration-300 transform'
						leaveFrom='translate-x-0'
						leaveTo='translate-x-full'
					>
						<Dialog.Panel className='fixed inset-y-0 right-0 z-30 w-full overflow-y-auto bg-gray-50 dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
							<div className='flex items-center justify-between'>
								<button
									type='button'
									className='-m-2.5 rounded-md p-2.5 dark:text-gray-200 text-gray-700'
									onClick={() => setMobileMenuOpen(false)}
								>
									<span className='sr-only'>Close menu</span>
									<XMarkIcon className='h-6 w-6' aria-hidden='true' />
								</button>
							</div>
							<div className='mt-6 flow-root'>
								<div className='-my-6 divide-y divide-gray-500/10'>
									<div className='space-y-2 py-6'>
										{navigation.map((item) => (
											<a
												key={item.name}
												href={item.href}
												className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 dark:text-gray-50 text-gray-900 dark:hover:bg-gray-900 hover:bg-gray-50'
											>
												{item.name}
											</a>
										))}
									</div>
									<div className='py-6 flex items-center justify-between w-32'>
										<DarkModeSelect />
									</div>
								</div>
							</div>
						</Dialog.Panel>
					</Transition.Child>
				</Dialog>
			</Transition>
		</>
	);
}
