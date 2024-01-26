"use client";

import { useState } from "react"; 
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { contactSchema, Inputs } from "../../lib/validation-schema";
import { motion, AnimatePresence } from "framer-motion";
import {
	CheckCircleIcon,
	XMarkIcon,
	ExclamationCircleIcon,
} from "@heroicons/react/20/solid";
import { set } from "sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const auth = process.env.NEXT_PUBLIC_SANITY_API_WRITE_TOKEN;

export function ContactForm() {
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);
	 const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<Inputs>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: Inputs) => {
	const mutations = [{
				create: {
					_type: "contact",
					email: data.email,
					name: data.name,
					message: data.message,
				},
			}]
    fetch(`https://${projectId}.api.sanity.io/v2021-06-07/data/mutate/${dataset}`, {
      method: "POST",
      body: JSON.stringify({mutations}),
      headers: {
        "Content-Type": "application/json",
		Authorization: `Bearer ${auth}`,
      },
    })
  .then(response => response.json())
  .then(result => console.log(result))
  .catch(error => console.error(error))

   if (data) {
	  reset();
	  setSuccess(true);
	} else {
	  setError(true);
	}

  };

	return (
		<div className='mx-auto max-w-xl lg:mr-0 lg:max-w-lg flex flex-col justify-between h-full'>
			<form onSubmit={handleSubmit(onSubmit)} noValidate>
				<div className='relative h-[6.5rem]'>
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
					className={`form-input text-gray-900 dark:text-gray-300 focus:ring-purple-500 w-full rounded-md dark:bg-white/5 bg-black/5 px-3.5 py-2 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 dark:ring-white/10 ring-black/10 ${
						errors.name ? " border-red-500" : ""
					}`}
				/>
				<AnimatePresence>
					{errors.name && (
						<motion.span
							key='name'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className='text-xs italic text-red-500'
						>
							<ErrorMessage name='name' errors={errors} />
						</motion.span>
					)}
				</AnimatePresence>
			</div>

			<div className='h-[6.5rem] relative'>
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
					className={`form-input text-gray-900 dark:text-gray-300 focus:ring-purple-500 w-full rounded-md dark:bg-white/5 bg-black/5 px-3.5 py-2 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 dark:ring-white/10 ring-black/10 ${
						errors.email ? " border-red-500" : ""
					}`}
				/>
				<AnimatePresence>
					{errors.email && (
						<motion.span
							key='email'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className='text-xs italic text-red-500'
						>
							<ErrorMessage name='email' errors={errors} />
						</motion.span>
					)}
				</AnimatePresence>
			</div>

			<div className='h-44 relative'>
				<label
					className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
					htmlFor='message'
				>
					Message
				</label>
				<textarea
					id='message'
					rows={5}
					{...register("message", { required: true })}
					className={`form-input text-gray-900 dark:text-gray-300 focus:ring-purple-500 w-full rounded-md dark:bg-white/5 bg-black/5 px-3.5 py-2 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 dark:ring-white/10 ring-black/10 ${
						errors.message ? " border-red-500" : ""
					}`}
				/>
				<AnimatePresence>
					{errors.message && (
						<motion.span
							key='message'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className='text-xs italic text-red-500'
						>
							<ErrorMessage name='message' errors={errors} />
						</motion.span>
					)}
				</AnimatePresence>
			</div>
			<div className='mt-8 flex gap-6 justify-end'>
				<button
					type='submit'
					disabled={isSubmitting}
					className='w-60 rounded-md bg-indigo-600 p-3 text-center font-bold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
				>
					Send message
				</button>
				</div>
				<AnimatePresence>
						{success && <motion.div
						key='success'
						initial={{ scale: 0, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0, opacity: 0 }}
						transition={{ type: "spring" }}
						className='flex gap-1 w-72 fixed top-[7.5rem] left-0 right-0 m-auto z-50 bg-red-500 text-gray-900 py-1 px-2 rounded-full'
					>
						<ExclamationCircleIcon className='w-6 h-6' />
						An error occured!
						<button
							onClick={() => setSuccess(false)}
							className='w-6 h-6 ml-auto focus:outline-none text-gray-900'
						>
							<XMarkIcon />
						</button>
					</motion.div>}

				{error && <motion.div
						key='error'
						initial={{ scale: 0, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0, opacity: 0 }}
						transition={{ type: "spring" }}
						className='flex gap-1 w-72 fixed top-[7.5rem] left-0 right-0 m-auto z-50 bg-green-500 text-gray-900 py-1 px-2 rounded-full'
					>
						<CheckCircleIcon className='w-6 h-6' />
						Form sent successfully!
						<button
							onClick={() => setError(false)}
							className='w-6 h-6 ml-auto focus:outline-none text-gray-900'
						>
							<XMarkIcon />
						</button>
					</motion.div>}
</AnimatePresence>
				</form>
			</div>
	);
}
