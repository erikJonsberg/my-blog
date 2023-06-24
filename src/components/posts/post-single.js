import PostMeta from "./post-meta";
import FeaturedImage from "./post-featured-image";
import PostContent from "./post-content";
import Meta from "./post-head";

export default function PostSingle(props) {
	const { post } = props;
	const imageUrl = `/images/posts/${post.slug}/${post.image}`;
	const avatar = `/images/posts/${post.slug}/author/${post.authorAvatar}`;
	const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
		month: "long",
		day: "numeric",
		year: "numeric",
	});
	return (
		<>
			<Meta
				title={post.title}
				image={imageUrl}
				description={post.description}
				imageAlt={post.imageAlt}
			/>
			<article className='mx-auto max-w-screen-md h-full'>
				<PostMeta
					title={post.title}
					authorAvatar={avatar}
					date={formattedDate}
					authorName={post.authorName}
					imageAlt={post.imageAlt}
				/>
				<FeaturedImage imageUrl={imageUrl} imageAlt={post.imageAlt} />
				<PostContent content={post.content} />
			</article>
		</>
	);
}
