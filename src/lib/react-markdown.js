import Image from "next/image";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import javascript from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";
import markdown from "react-syntax-highlighter/dist/cjs/languages/prism/markdown";
import html from "react-syntax-highlighter/dist/cjs/languages/prism/markup";

SyntaxHighlighter.registerLanguage("js", javascript);
SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("md", markdown);
SyntaxHighlighter.registerLanguage("html", html);

export const markdownComponents = {
	p(paragraph) {
		const { node } = paragraph;
		if (node.children[0].tagName === "img") {
			const image = node.children[0];
			const substrings = image.properties.alt?.split("{{");
			const alt = substrings[0].trim();
			const width = substrings[1]
				? substrings[1].match(/(?<=w:\s?)\d+/g)[0]
				: 1200;
			const height = substrings[1]
				? substrings[1].match(/(?<=h:\s?)\d+/g)[0]
				: 630;
			return (
				<div className='relative w-full'>
					<Image
						className='rounded-2xl'
						src={image.properties.src}
						alt={alt}
						width={width}
						height={height}
					/>
				</div>
			);
		}
		return <p>{paragraph.children}</p>;
	},
	code({ node, inline, className, children, ...props }) {
		const match = /language-(\w+)/.exec(className || "");
		return !inline && match ? (
			<SyntaxHighlighter
				style={oneDark}
				language={match[1]}
				customStyle={{
					backgroundColor: "black",
				}}
				PreTag='div'
				{...props}
			>
				{String(children).replace(/\n$/, "")}
			</SyntaxHighlighter>
		) : (
			<code className={className} {...props}>
				{children}
			</code>
		);
	},
};
