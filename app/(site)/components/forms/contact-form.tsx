"use client";

import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { contactSchema, Contact } from "../../lib/zod-schema";
import { SuccessNotification, ErrorNotification } from "../ui/notifications";
import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";
import postToSanity from "./post-to-sanity";

import {
	BuildingOffice2Icon,
	EnvelopeIcon,
	PhoneIcon,
} from "@heroicons/react/24/outline";

export default function ContactForm() {
	const {
		register,
		handleSubmit,
		reset,
		formState,
		formState: { errors, isSubmitting, isSubmitSuccessful },
	} = useForm<Contact>({
		resolver: zodResolver(contactSchema),
	});

	const onSubmit = (data: any) => postToSanity(data);

	useEffect(() => {
		if (formState.isSubmitSuccessful) {
			reset();
		}
	}, [formState, isSubmitSuccessful, reset]);

	return (
		<div className='relative isolate -mt-[111.33px]'>
			<div className='relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48'>
				<div className='mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 mt-[111.33px]'>
					<div className='mx-auto max-w-xl lg:mx-0 lg:max-w-lg'>
						<h2 className='text-3xl font-bold tracking-tight text-black dark:text-white'>
							Get in touch
						</h2>
						<p className='mt-6 text-lg leading-8 text-gray-900 dark:text-gray-300'>
							Proin volutpat consequat porttitor cras nullam gravida at. Orci
							molestie a eu arcu. Sed ut tincidunt integer elementum id sem.
							Arcu sed malesuada et magna.
						</p>
						<dl className='mt-10 space-y-4 text-base leading-7 text-gray-900 dark:text-gray-300'>
							<div className='flex gap-x-4'>
								<dt className='flex-none'>
									<span className='sr-only'>Address</span>
									<BuildingOffice2Icon
										className='h-7 w-6 text-gray-800 dark:text-gray-400'
										aria-hidden='true'
									/>
								</dt>
								<dd>
									15 Lincoln Street
									<br />
									Greenfield, MA 01301
								</dd>
							</div>
							<div className='flex gap-x-4'>
								<dt className='flex-none'>
									<span className='sr-only'>Telephone</span>
									<PhoneIcon
										className='h-7 w-6 text-gray-800 dark:text-gray-400'
										aria-hidden='true'
									/>
								</dt>
								<dd>
									<a className='hover:text-white' href='tel:+1 (555) 234-5678'>
										+1 (413) 522-3431
									</a>
								</dd>
							</div>
							<div className='flex gap-x-4'>
								<dt className='flex-none'>
									<span className='sr-only'>Email</span>
									<EnvelopeIcon
										className='h-7 w-6 dark:text-gray-400'
										aria-hidden='true'
									/>
								</dt>
								<dd>
									<a
										className='hover:text-white'
										href='mailto:hello@example.com'
									>
										ebjonsberg@gmail.com
									</a>
								</dd>
							</div>
						</dl>
					</div>

					<form onSubmit={handleSubmit(onSubmit)} noValidate>
						<div className='mx-auto max-w-xl lg:mr-0 lg:max-w-lg'>
							<div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
								<div className='sm:col-span-2'>
									<div className='mt-2.5 relative'>
										<label
											className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
											htmlFor='name'
										>
											Name
										</label>
										<input
											type='text'
											required
											placeholder='Your name'
											{...register("name", { required: true })}
											id='name'
											autoComplete='name'
											className='text-gray-900 dark:text-gray-300 focus:ring-indigo-500 w-full rounded-md border-0 dark:bg-white/5 bg-black/5 px-3.5 py-2 shadow-sm ring-1 ring-inset dark:ring-white/10 ring-black/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6'
										/>
										{errors.name && (
											<span className='text-red-800 block mt-2'>
												{errors.name?.message}
											</span>
										)}
									</div>
								</div>

								<div className='sm:col-span-2'>
									<label
										className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
										htmlFor='email'
									>
										Email
									</label>
									<input
										type='email'
										id='email'
										placeholder='name@example.com'
										{...register("email", { required: true })}
										autoComplete='email'
										className='text-gray-900 dark:text-gray-300 focus:ring-indigo-500 w-full rounded-md border-0 dark:bg-white/5 bg-black/5 px-3.5 py-2 shadow-sm ring-1 ring-inset dark:ring-white/10 ring-black/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6'
									/>
									{errors.email && (
										<span className='text-red-800 block mt-2'>
											{errors.email?.message}
										</span>
									)}
								</div>

								<div className='sm:col-span-2'>
									<label
										className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
										htmlFor='message'
									>
										Message
									</label>
									<textarea
										id='message'
										rows={5}
										autoComplete='message'
										{...register("message", { required: true })}
										className='text-gray-900 dark:text-gray-300 focus:ring-indigo-500 w-full rounded-md border-0 dark:bg-white/5 bg-black/5 px-3.5 py-2 shadow-sm ring-1 ring-inset dark:ring-white/10 ring-black/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6'
									/>
									{errors.message && (
										<span className='text-red-800 block mt-2'>
											{errors.message?.message}
										</span>
									)}
								</div>
							</div>
							<div className='mt-8 flex justify-end'>
								<button
									type='submit'
									disabled={isSubmitting}
									className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-700 duration-300 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
								>
									Send message
								</button>
								{/* {isSubmitSuccessful && <p>{SuccessNotification()}</p>}
								{errors?.root?.server && <p>{ErrorNotification()}</p>} */}
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
