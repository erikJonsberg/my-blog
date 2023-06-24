import PostItem from "./post-item";

export default function PostsGrid(props) {
	const { posts } = props;
	return (
		<div className='mt-8 flex flex-col md:flex-row justify-center items-center gap-10 flex-wrap'>
			{posts.map((post) => (
				<div className='lg:flex-shrink-0' key={post.slug}>
					<PostItem post={post} />
				</div>
			))}
		</div>
	);
}
