import Head from "next/head";

export default function Meta(props) {
	const { title, description, image, imageAlt } = props;

	return (
		<Head>
			<title>{title}</title>
			<meta name='description' content={description} />
			<meta property='og:title' content={title} />
			<meta property='og:description' content={description} />
			<meta property='og:image' content={image} />
			<meta property='og:image:alt' content={imageAlt} />
			<meta property='og:type' content='website' />
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:site' content='@erikjonsberg' />
			<meta name='twitter:creator' content='@erikjonsberg' />
			<meta name='twitter:title' content={title} />
			<meta name='twitter:description' content={description} />
			<meta name='twitter:image' content={image} />
			<meta name='twitter:image:alt' content={imageAlt} />
		</Head>
	);
}
