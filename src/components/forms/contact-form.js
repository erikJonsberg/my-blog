import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

import {
	BuildingOffice2Icon,
	EnvelopeIcon,
	PhoneIcon,
} from "@heroicons/react/24/outline";

export default function ContactForm() {
	const [submitted, setSubmitted] = useState(false);
	const [message, setMessage] = useState("");

	const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

	const formik = useFormik({
		initialValues: {
			email: "",
			name: "",
			message: "",
		},
		onSubmit: async (values) => {
			try {
				const response = await fetch("/api/contact", {
					method: "POST",
					body: JSON.stringify(values),
					headers: {
						"Content-Type": "application/json",
					},
				});
				if (response.ok) {
					const formData = await response.json();
					console.log(formData);
					setMessage("Form submitted");
					setSubmitted(true);
				} else {
					console.log(response.status);
				}
			} catch (error) {
				console.log(error);
			}
		},
		validationSchema: Yup.object().shape({
			name: Yup.string().required("Name is required"),
			email: Yup.string()
				.email("Email is invalid")
				.required("Email is required"),
			message: Yup.string().required("Message is required"),
		}),
	});

	return (
		<div className='relative isolate -mt-[111.33px]'>
			<div className='mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 mt-[111.33px]'>
				<div className='relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48'>
					<div className='mx-auto max-w-xl lg:mx-0 lg:max-w-lg'>
						<h2 className='text-3xl font-bold tracking-tight text-white'>
							Get in touch
						</h2>
						<p className='mt-6 text-lg leading-8 text-gray-300'>
							Proin volutpat consequat porttitor cras nullam gravida at. Orci
							molestie a eu arcu. Sed ut tincidunt integer elementum id sem.
							Arcu sed malesuada et magna.
						</p>
						<dl className='mt-10 space-y-4 text-base leading-7 text-gray-300'>
							<div className='flex gap-x-4'>
								<dt className='flex-none'>
									<span className='sr-only'>Address</span>
									<BuildingOffice2Icon
										className='h-7 w-6 text-gray-400'
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
										className='h-7 w-6 text-gray-400'
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
										className='h-7 w-6 text-gray-400'
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
					action='#'
					method='POST'
					className='px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48'
					onSubmit={formik.handleSubmit}
				>
					<div className='mx-auto max-w-xl lg:mr-0 lg:max-w-lg'>
						<div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
							<div className='sm:col-span-2'>
								<label
									htmlFor='name'
									className='block text-sm font-semibold leading-6 text-white'
								>
									Name
								</label>
								<div className='mt-2.5'>
									<input
										type='text'
										name='name'
										id='name'
										autoComplete='name'
										required
										value={formik.values.name}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										className='text-white focus:ring-indigo-500 w-full rounded-md border-0 bg-white/5 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6'
									/>
									{formik.errors.name && (
										<div className='text-rose-500 mt-2'>
											{formik.errors.name}
										</div>
									)}
								</div>
							</div>
							<div className='sm:col-span-2'>
								<label
									htmlFor='email'
									className='block text-sm font-semibold leading-6 text-white'
								>
									Email
								</label>
								<div className='mt-2.5'>
									<input
										type='email'
										name='email'
										id='email'
										autoComplete='email'
										required
										value={formik.values.email}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										className='block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
									/>
									{formik.errors.email && (
										<div className='text-rose-500 mt-2'>
											{formik.errors.email}
										</div>
									)}
								</div>
							</div>
							<div className='sm:col-span-2'>
								<label
									htmlFor='message'
									className='block text-sm font-semibold leading-6 text-white'
								>
									Message
								</label>
								<div className='mt-2.5'>
									<textarea
										name='message'
										id='message'
										rows={4}
										required
										value={formik.values.message}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										className='block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
									/>
									{formik.errors.message && (
										<div className='text-rose-500 mt-2'>
											{formik.errors.message}
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
						<div hidden={!submitted} className='flex justify-end'>
							{message}
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
