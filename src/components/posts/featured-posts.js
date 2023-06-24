import PostsGrid from "./posts-grid";

export default function FeaturedPosts(props) {
	return (
		<div className='py-16 sm:py-20'>
			<div className='max-w-7xl px-6 lg:px-8 mx-auto'>
				<div className='max-w-2xl text-center mx-auto'>
					<h2 className='dark:text-gray-50 text-gray-900 sm:text-4xl'>
						From the blog
					</h2>
					<p className='mt-2 text-lg leading-8 dark:text-gray-200 text-gray-600'>
						Tips and tricks for building your next project
					</p>
				</div>
				<PostsGrid posts={props.posts} />
			</div>
		</div>
	);
}
