"use client";

import {
	FieldErrors,
	useForm,
	UseFormRegister,
	FieldPath,
} from "react-hook-form";
import { getFormData, State } from "./actions";
import { useFormState, useFormStatus } from "react-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "../../lib/validation";
import { ErrorMessage } from "@hookform/error-message";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	CheckCircleIcon,
	ExclamationCircleIcon,
} from "@heroicons/react/20/solid";

export interface FormValues {
	name: string;
	email: string;
	messageFromUser: string;
}

function FormContent({
	register,
	isValid,
	errors,
}: {
	register: UseFormRegister<FormValues>;
	isValid: boolean;
	errors: FieldErrors<FormValues>;
}) {
	const { pending } = useFormStatus();

	return (
		<div className='grid grid-cols-1 gap-3 relative'>
			<div className='h-[6.5rem]'>
				<label
					className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
					htmlFor='name'
				>
					Name
				</label>
				<input
					type='text'
					placeholder='Your name'
					{...register("name")}
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
							<ErrorMessage
								name='name'
								errors={errors}
								message='Please enter your name'
							/>
						</motion.span>
					)}
				</AnimatePresence>
			</div>

			<div className='h-[6.5rem]'>
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
					{...register("email")}
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
							{errors.email.message}
						</motion.span>
					)}
				</AnimatePresence>
			</div>

			<div className='h-44'>
				<label
					className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
					htmlFor='message'
				>
					Message
				</label>
				<textarea
					id='messageFromUser'
					rows={5}
					{...register("messageFromUser")}
					className={`form-input text-gray-900 dark:text-gray-300 focus:ring-purple-500 w-full rounded-md dark:bg-white/5 bg-black/5 px-3.5 py-2 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 dark:ring-white/10 ring-black/10 ${
						errors.messageFromUser ? " border-red-500" : ""
					}`}
				/>
				<AnimatePresence>
					{errors.messageFromUser && (
						<motion.span
							key='messageFromUser'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className='text-xs italic text-red-500'
						>
							{errors.messageFromUser.message}
						</motion.span>
					)}
				</AnimatePresence>
			</div>
			<div className='mt-8 flex gap-6 justify-end'>
				<button
					type='submit'
					disabled={pending || !isValid}
					className='w-60 rounded-md bg-indigo-600 p-3 text-center font-bold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
				>
					{pending ? <span>Sending...</span> : <span>Send</span>}
				</button>
			</div>
		</div>
	);
}

export function Form() {
	const {
		register,
		formState: { isValid, errors },
		setError,
		reset,
	} = useForm<FormValues>({
		mode: "all",
		resolver: zodResolver(contactSchema),
	});
	const [state, formAction] = useFormState<State, FormData>(getFormData, null);
	const [successsMsg, setSuccesssMsg] = useState(false);
	const [errorMsg, setErrorMsg] = useState(false);

	useEffect(() => {
		if (!state) {
			return;
		}
		if (state.status === "error") {
			state.errors?.forEach((error) => {
				setError(error.path as FieldPath<FormValues>, {
					message: error.message,
				});
			});

			setErrorMsg(true);
			reset();

			const timer = setTimeout(() => {
				setErrorMsg(false);
			}, 3000);
			return () => clearTimeout(timer);
		}
		if (state.status === "success") {
			setSuccesssMsg(true);
			reset();
			const timer = setTimeout(() => {
				setSuccesssMsg(false);
			}, 3000);
			return () => clearTimeout(timer);
		}
	}, [state, setError, reset]);

	return (
		<>
			<form action={formAction}>
				<FormContent register={register} isValid={isValid} errors={errors} />
			</form>
			<AnimatePresence>
				{successsMsg && (
					<motion.div
						key='success'
						initial={{ scale: 0, opacity: 0 }}
						animate={{ scale: 1, opacity: 1, transition: { ease: "easeOut" } }}
						exit={{ scale: 0, opacity: 0, transition: { ease: "easeIn" } }}
						className='flex gap-1 w-72 fixed top-[7.5rem] left-0 right-0 m-auto z-50 bg-green-500 text-gray-900 py-1 px-2 rounded-full'
					>
						<CheckCircleIcon className='w-6 h-6' />
						{state?.message}
					</motion.div>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{errorMsg && (
					<motion.div
						key='error'
						initial={{ scale: 0, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0, opacity: 0 }}
						transition={{ ease: "easeOut" }}
						className='flex gap-1 w-96 fixed top-[7.5rem] left-0 right-0 m-auto z-50 bg-red-500 text-gray-900 py-1 px-2 rounded-full'
					>
						<ExclamationCircleIcon className='w-6 h-6' />
						{state?.message}
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
