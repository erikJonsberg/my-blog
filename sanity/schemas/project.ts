import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'project',
	title: 'Project',
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
			name: 'publishedAt',
			title: 'Published at',
			type: 'date',
		}),
		defineField({
			name: 'screenshot',
			title: 'Project Screenshot',
			type: 'image',
			fields: [
				{
					name: 'alt',
					title: 'Alt Text',
					type: 'string',
				},
			],
			options: {
				hotspot: true,
				metadata: ['lqip'],
			},
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'text',
		}),
		defineField({
			name: 'link',
			title: 'Github Link',
			type: 'url',
		}),
	],

	preview: {
		select: {
			title: 'title',
			subtitle: 'publishedAt',
			media: 'screenshot',
		},
	},
});
