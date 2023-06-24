import PostSingle from "@/components/posts/post-single";
import { getPostData, getPostsFiles } from "@/lib/post-utils";

export default function Post(props) {
	return (
		<>
			<PostSingle post={props.post} />
		</>
	);
}

export function getStaticPaths() {
	const postFilenames = getPostsFiles();

	const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));
	const paths = slugs.map((slug) => ({ params: { slug: slug } }));
	return {
		paths: paths,
		fallback: "blocking",
	};
}

export function getStaticProps(context) {
	const { params } = context;
	const { slug } = params;

	const postData = getPostData(slug);

	return {
		props: {
			post: postData,
		},
		revalidate: 1800,
	};
}
