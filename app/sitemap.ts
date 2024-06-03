import { MetadataRoute } from 'next';
import type { SanityDocument } from '@sanity/client';
import { client } from '@/sanity/lib/client';

async function getData() {
	const query = `*[_type == "post"] {
    "currentSlug": slug.current,
      "lastModified": _updatedAt
  }`;
	const data = await client.fetch(query);
	return data;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const data = await getData();
	const posts: MetadataRoute.Sitemap = data.map((post: SanityDocument) => ({
		url: `https://erikjonsberg.dev/posts/${post.currentSlug}`,
		lastModified: post.lastModified,
		changeFrequency: 'weekly',
		priority: 0.9,
	}));

	return [
		{
			url: 'https://erikjonsberg.dev/',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: 'https://erikjonsberg.dev/contact',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 0.8,
		},
		{
			url: 'https://erikjonsberg.dev/posts',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.9,
		},
		...posts,
	];
}
