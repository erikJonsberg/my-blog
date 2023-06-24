import FeaturedPosts from "@/components/posts/featured-posts";
import Hero from "@/components/layout/hero";
import { getFeaturedPosts } from "@/lib/post-utils";

export default function HomePage(props) {
	return (
		<>
			<Hero />
			<FeaturedPosts posts={props.posts} />
		</>
	);
}

export function getStaticProps() {
	const featuredPosts = getFeaturedPosts();

	return {
		props: {
			posts: featuredPosts,
		},
	};
}
