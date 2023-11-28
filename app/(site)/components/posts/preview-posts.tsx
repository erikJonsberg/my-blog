"use client";

import type { SanityDocument } from "@sanity/client";
import { useLiveQuery } from "@sanity/preview-kit";
import Posts from "./all-posts";
import { postsQuery } from "@/sanity/lib/queries";

export default function PreviewPosts({
	posts = [],
}: {
	posts: SanityDocument[];
}) {
	const [data] = useLiveQuery(posts, postsQuery);

	return <Posts posts={data} />;
}
