import { categoryQuery, categoryPathsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/fetch";
import { SanityDocument } from "next-sanity";
import { client } from "@/sanity/lib/client";
import Category from "../../components/posts/category";

// Prepare Next.js to know which routes already exist
export async function generateStaticParams() {
	// Important, use the plain Sanity Client here
	const categories = await client.fetch(categoryPathsQuery);

	return categories;
}
export default async function CategoryPage({ params }: { params: any }) {
	const category = await sanityFetch<SanityDocument>({
		query: categoryQuery,
		params,
	});
	return <Category category={category} />;
}
