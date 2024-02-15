import { CAT_QUERY } from "@/sanity/lib/queries";
import { SanityDocument } from "next-sanity";
import Category from "../../components/posts/category";
import { loadQuery } from "@/sanity/lib/store";

export default async function Page() {
	const category = await loadQuery<SanityDocument>(CAT_QUERY);

	return <Category category={category.data} />;
}
