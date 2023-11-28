import { useState, Fragment } from "react";
import { Transition } from "@headlessui/react";
import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/20/solid";

export const SuccessNotification = () => {
	const [show, setShow] = useState(true);
	return (
		<Transition
			show={show}
			as={Fragment}
			enter='transform ease-out duration-300 transition'
			enterFrom='translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2'
			enterTo='translate-y-0 opacity-100 sm:translate-x-0'
			leave='transition ease-in duration-100'
			leaveFrom='opacity-100'
			leaveTo='opacity-0'
		>
			<div className='mt-4'>
				<div className='rounded-md bg-green-50 p-4 ring-1 ring-green-200'>
					<div className='flex items-center'>
						<div className='flex-shrink-0'>
							<CheckCircleIcon
								className='h-5 w-5 text-green-400'
								aria-hidden='true'
							/>
						</div>
						<div className='ml-3'>
							<span className='text-green-500 text-sm mt-2'>
								The form was submitted successfully!
							</span>
						</div>

						<div className='ml-auto pl-3'>
							<div className='-mx-1.5 -my-1.5'>
								<button
									type='button'
									onClick={() => setShow(false)}
									className='inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50'
								>
									<span className='sr-only'>Dismiss</span>
									<XMarkIcon className='h-5 w-5' aria-hidden='true' />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Transition>
	);
};

export const ErrorNotification = () => {
	const [show, setShow] = useState(true);
	return (
		<Transition
			show={show}
			as={Fragment}
			enter='transform ease-out duration-300 transition'
			enterFrom='translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2'
			enterTo='translate-y-0 opacity-100 sm:translate-x-0'
			leave='transition ease-in duration-100'
			leaveFrom='opacity-100'
			leaveTo='opacity-0'
		>
			<div className='mt-4'>
				<div className='rounded-md bg-rose-50 p-4 ring-1 ring-rose-200'>
					<div className='flex items-center'>
						<div className='flex-shrink-0'>
							<CheckCircleIcon
								className='h-5 w-5 text-rose-400'
								aria-hidden='true'
							/>
						</div>
						<div className='ml-3'>
							<span className='text-rose-500 text-sm mt-2'>
								{formik.status.message}
							</span>
						</div>

						<div className='ml-auto pl-3'>
							<div className='-mx-1.5 -my-1.5'>
								<button
									type='button'
									onClick={() => setShow(false)}
									className='inline-flex rounded-md bg-rose-50 p-1.5 text-rose-500 hover:bg-rose-100 focus:outline-none focus:ring-2 focus:ring-rose-600 focus:ring-offset-2 focus:ring-offset-rose-50'
								>
									<span className='sr-only'>Dismiss</span>
									<XMarkIcon className='h-5 w-5' aria-hidden='true' />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Transition>
	);
};
