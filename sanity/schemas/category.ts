import { defineField, defineType } from 'sanity';
import { BiSolidCategory } from 'react-icons/bi';

export default defineType({
	name: 'category',
	title: 'Category',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'text',
		}),
	],
	preview: {
		select: {
			title: 'title',
			subtitle: 'description',
		},
		prepare({ title, subtitle }) {
			return {
				title,
				subtitle,
				media: BiSolidCategory,
			};
		},
	},
});
