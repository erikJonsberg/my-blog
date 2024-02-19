import { Form } from "@/components/forms/contact-form";
import {
	BuildingOffice2Icon,
	EnvelopeIcon,
	PhoneIcon,
} from "@heroicons/react/24/outline";

export default function Contact() {
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
					<Form />
				</div>
			</div>
		</div>
	);
}
