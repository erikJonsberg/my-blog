"use client";

import {
	ClipboardIcon,
	ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useState, useEffect } from "react";

export function Code({
	language,
	children,
}: {
	language: string;
	children: string;
}) {
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		if (copied) {
			setTimeout(() => {
				setCopied(false);
			}, 1500);
		}
	}, [copied]);

	const copyCode = () => {
		navigator.clipboard.writeText(children);
		setCopied(true);
	};

	return (
		<div className='relative'>
			<SyntaxHighlighter
				customStyle={{
					fontFamily: "var(--fira-code-font)",
				}}
				codeTagProps={{ style: { fontFamily: "inherit" } }}
				language={language}
				style={oneDark}
			>
				{children}
			</SyntaxHighlighter>
			<button onClick={copyCode} className='absolute top-0 right-0 p-3'>
				{!copied ? (
					<ClipboardIcon className='w-6 h-6 text-purple-600' />
				) : (
					<ClipboardDocumentCheckIcon className='w-6 h-6 text-green-600' />
				)}
			</button>
		</div>
	);
}
