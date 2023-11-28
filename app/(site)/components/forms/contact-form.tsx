"use client";

import { useState } from "react";
import { contactSchema } from "../../lib/yup-schema";
import { useFormik } from "formik";
import { SuccessNotification, ErrorNotification } from "../ui/notifications";
import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";

import {
	BuildingOffice2Icon,
	EnvelopeIcon,
	PhoneIcon,
} from "@heroicons/react/24/outline";

export default function ContactForm() {
	const [submitted, setSubmitted] = useState(false);

	const formik = useFormik({
		validationSchema: contactSchema,
		initialValues: {
			email: "",
			name: "",
			subject: "",
			message: "",
		},
		onSubmit: async (
			values,
			{ resetForm, setSubmitting, setFieldError, setStatus }
		) => {
			try {
				await fetch("/api/sendgrid", {
					method: "POST",
					body: JSON.stringify(values),
					headers: {
						"Content-Type": "application/json",
					},
				});

				const response = await fetch("/api/mongoDb", {
					method: "POST",
					body: JSON.stringify(values),
					headers: {
						"Content-Type": "application/json",
					},
				});

				if (response.ok) {
					setStatus({ success: true });
					setSubmitted(true);
					resetForm();
				} else {
					const data = await response.json();

					if (data.errors) {
						for (let field in data.errors) {
							setFieldError(field, data.errors[field]);
						}
					}

					// If a general error, set it
					if (data.message) {
						setStatus({ success: false, message: data.message });
					}
				}
			} catch (error) {
				// If error, stop submitting and set general error status
				setSubmitting(false);
				setStatus({ success: false, message: "Submission error" });
			}
		},
	});

	return (
		<div className='relative isolate -mt-[111.33px]'>
			<div className='mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 mt-[111.33px]'>
				<div className='relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48'>
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
				</div>
				<form
					noValidate
					method='POST'
					className='px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48'
					onSubmit={formik.handleSubmit}
				>
					<div className='mx-auto max-w-xl lg:mr-0 lg:max-w-lg'>
						<div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
							<div className='sm:col-span-2'>
								<label
									htmlFor='name'
									className='block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300'
								>
									Name
								</label>
								<div className='mt-2.5 relative'>
									<input
										type='text'
										name='name'
										id='name'
										autoComplete='name'
										required
										value={formik.values.name}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										className='text-gray-900 dark:text-gray-300 focus:ring-indigo-500 w-full rounded-md border-0 dark:bg-white/5 bg-black/5 px-3.5 py-2 shadow-sm ring-1 ring-inset dark:ring-white/10 ring-black/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6'
									/>

									{formik.errors.name && formik.touched.name && (
										<div className='mt-2 absolute left-[30%]'>
											<span className='bg-rose-500 relative shadow-md text-gray-900 border-rose-500 rounded-sm top-2 px-4 py-2 left-0 before:triangle before:absolute before:bottom-[2.25rem] before:left-2'>
												<ExclamationTriangleIcon className='w-8 inline align-middle pr-2 text-amber-400' />
												{formik.errors.name}
											</span>
										</div>
									)}
								</div>
							</div>

							<div className='sm:col-span-2'>
								<label
									htmlFor='email'
									className='block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300'
								>
									Email
								</label>
								<div className='mt-2.5 relative'>
									<input
										type='email'
										name='email'
										id='email'
										autoComplete='email'
										required
										value={formik.values.email}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										className='block w-full rounded-md border-0 dark:bg-white/5 bg-black/5 px-3.5 py-2 text-gray-900 dark:text-gray-300 shadow-sm ring-1 ring-inset dark:ring-white/10 ring-black/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
									/>
									{formik.errors.email && formik.touched.email && (
										<div className='mt-2 absolute left-[30%]'>
											<span className='bg-rose-500 relative shadow-md text-gray-900 border-rose-500 rounded-sm top-2 px-4 py-2 left-0 before:triangle before:absolute before:bottom-[2.25rem] before:left-2'>
												<ExclamationTriangleIcon className='w-8 inline align-middle pr-2 text-amber-400' />
												{formik.errors.email}
											</span>
										</div>
									)}
								</div>
							</div>
							<div className='sm:col-span-2'>
								<label
									htmlFor='subject'
									className='block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300'
								>
									Subject
								</label>
								<div className='mt-2.5 relative'>
									<input
										type='text'
										name='subject'
										id='subject'
										autoComplete='subject'
										required
										value={formik.values.subject}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										className='text-gray-900 dark:text-gray-300 focus:ring-indigo-500 w-full rounded-md border-0 dark:bg-white/5 bg-black/5 px-3.5 py-2 shadow-sm ring-1 ring-inset dark:ring-white/10 ring-black/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6'
									/>
									{formik.errors.subject && formik.touched.subject && (
										<div className='mt-2 absolute left-[30%]'>
											<span className='bg-rose-500 shadow-md relative text-gray-900 border-rose-500 rounded-sm top-2 px-4 py-2 left-0 before:triangle before:absolute before:bottom-[2.25rem] before:left-2'>
												<ExclamationTriangleIcon className='w-8 inline align-middle pr-2 text-amber-400' />
												{formik.errors.subject}
											</span>
										</div>
									)}
								</div>
							</div>

							<div className='sm:col-span-2'>
								<label
									htmlFor='message'
									className='block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300'
								>
									Message
								</label>
								<div className='mt-2.5 relative'>
									<textarea
										name='message'
										id='message'
										rows={4}
										required
										value={formik.values.message}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										className='block w-full rounded-md border-0 dark:bg-white/5 bg-black/5 px-3.5 py-2 text-gray-900 dark:text-gray-300 shadow-sm ring-1 ring-inset dark:ring-white/10 ring-black/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
									/>
									{formik.errors.message && formik.touched.message && (
										<div className='mt-2 absolute left-[30%]'>
											<span className='bg-rose-500 relative shadow-md text-gray-900 border-rose-500 rounded-sm top-2 px-4 py-2 left-0 before:triangle before:absolute before:bottom-[2.25rem] before:left-2'>
												<ExclamationTriangleIcon className='w-8 inline align-middle pr-2 text-amber-400' />
												{formik.errors.message}
											</span>
										</div>
									)}
								</div>
							</div>
						</div>
						<div className='mt-8 flex justify-end'>
							<button
								type='submit'
								className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-700 duration-300 rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
							>
								Send message
							</button>
						</div>
						{formik.status && formik.status.message && <ErrorNotification />}
						{submitted && <SuccessNotification />}
					</div>
				</form>
			</div>
		</div>
	);
}
