import { Form } from '@/app/components/forms/contact-form';
import {
	BuildingOffice2Icon,
	EnvelopeIcon,
	PhoneIcon,
} from '@heroicons/react/24/outline';

export default function Contact() {
	return (
		<div className='flex lg:items-center min-h-screen max-w-5xl mx-auto'>
			<div className='mx-auto flex justify-around lg:gap-12 flex-wrap lg:flex-nowrap'>
				<div className='w-full lg:w-1/2 p-8'>
					<h1 className='text-3xl font-bold tracking-tight text-black dark:text-white'>
						Get in touch
					</h1>
					<p className='mt-6 text-lg leading-8 text-gray-900 dark:text-gray-300'>
						I&apos;m always open to new projects, collaborations, or just a
						chat. Feel free to reach out to me using the contact form, or any of
						the other methods below.
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
								<a
									className='hover:text-white'
									href='tel:+1 (555) 234-5678'
								>
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
				<div className='w-full lg:w-1/2 p-8'>
					<Form />
				</div>
			</div>
		</div>
	);
}
