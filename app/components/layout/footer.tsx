import Link from "next/link";
import { FaRedditAlien } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";

const navigation = {
	social: [
		{
			name: "Reddit",
			href: "https://www.reddit.com/user/hungryGhost50/",
			icon: (props: any) => <FaRedditAlien {...props} />,
		},
		{
			name: "Instagram",
			href: "https://www.instagram.com/erikjonsberg/",
			icon: (props: any) => <FaInstagram {...props} />,
		},
		{
			name: "Twitter",
			href: "https://twitter.com/erikjonsberg",
			icon: (props: any) => <FaXTwitter {...props} />,
		},
		{
			name: "GitHub",
			href: "https://github.com/erikJonsberg",
			icon: (props: any) => <FaGithub {...props} />,
		},
		{
			name: "Discord",
			href: "https://discord.com/erikjonsberg",
			icon: (props: any) => <FaDiscord {...props} />,
		},
	],
};

export default function Footer() {
	const today = new Date();
	const year = today.getFullYear();
	return (
		<footer className='bg-gray-900' aria-labelledby='footer-heading'>
			<h2 id='footer-heading' className='sr-only'>
				Footer
			</h2>
			<div className='mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32'>
				<div className='mt-16 border-t border-white/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24'>
					<div className='flex space-x-6 md:order-2'>
						{navigation.social.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className='text-gray-500 hover:text-gray-400'
							>
								<span className='sr-only'>{item.name}</span>
								<item.icon className='size-6' aria-hidden='true' />
							</Link>
						))}
					</div>
					<p className='mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0'>
						&copy; {year} Erik Jonsberg All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
