import Image from "next/image";
import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import { client } from "../lib/client";
import { PortableText } from "@portabletext/react";
import { Code } from "../components/syntax-highlighter";
import Link from "next/link";

// Barebones lazy-loaded image component
const imageComponent = ({ value, isInline }: any) => {
	const { width, height } = getImageDimensions(value);
	return (
		<Image
			src={urlBuilder(client)
				.image(value)
				.width(isInline ? 100 : 800)
				.fit("max")
				.auto("format")
				.url()}
			alt={value.alt || " "}
			width={width}
			height={height}
			loading='lazy'
			style={{
				// Display alongside text if image appears inside a block text span
				display: isInline ? "inline-block" : "block",

				// Avoid jumping around with aspect-ratio CSS property
				aspectRatio: width / height,
			}}
		/>
	);
};

export const components = {
	types: {
		image: imageComponent,
		code: ({ value }: { value: any }) => {
			const { code, language } = value;
			return <Code language={language}>{code}</Code>;
		},
	},
	marks: {
		internalLink: ({ value, children }: { value?: any; children: any }) => {
			return <Link href={`/posts/${value.slug.current}`}>{children}</Link>;
		},
		link: ({ value, children }: { value?: any; children: any }) => {
			const { blank, href } = value;
			return blank ? (
				<Link href={href} target='_blank' rel='noopener'>
					{children}
				</Link>
			) : (
				<Link href={href}>{children}</Link>
			);
		},
	},
};

export const PortableTextComponent = (props: any) => {
	return <PortableText value={props.value} components={components} />;
};
