import dynamic from "next/dynamic";
import remarkGfm from "remark-gfm";
import { markdownComponents } from "../../lib/react-markdown";

const ReactMarkdown = dynamic(() => import("react-markdown"), {
	ssr: false,
});

export default function PostContent(props) {
	const { content } = props;
	return (
		<div className='prose dark:prose-dark md:prose-xl dark:md:prose-xl-dark'>
			<ReactMarkdown
				components={markdownComponents}
				remarkPlugins={[remarkGfm]}
			>
				{content}
			</ReactMarkdown>
		</div>
	);
}
