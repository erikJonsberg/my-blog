import { defineField, defineType } from 'sanity';
import { LuMail } from 'react-icons/lu';

export default defineType({
	name: 'contact',
	title: 'Contact',
	type: 'document',
	fields: [
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
		}),
		defineField({
			name: 'email',
			title: 'Email',
			type: 'string',
		}),
		defineField({
			name: 'messageFromUser',
			title: 'Message',
			type: 'text',
		}),
	],
	preview: {
		select: {
			title: 'name',
			subtitle: 'email',
		},
		prepare({ title, subtitle }) {
			return {
				title,
				subtitle,
				media: LuMail,
			};
		},
	},
});
