'use client';

import { ChangeEvent, ChangeEventHandler, useState } from 'react';
import { marked } from 'marked';

import { Roboto_Mono, Roboto } from 'next/font/google';
import { AiOutlineEye } from 'react-icons/ai';

const robotoMono = Roboto_Mono({ subsets: ['latin'] });
const roboto = Roboto({ subsets: ['latin'], weight: '400' });

const md = `# Welcome to Markdown

Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents.

## How to use this?

1. Write markdown in the markdown editor window
2. See the rendered markdown in the preview window

### Features

- Create headings, paragraphs, links, blockquotes, inline-code, code blocks, and lists
- Name and save the document to access again later
- Choose between Light or Dark mode depending on your preference

> This is an example of a blockquote. If you would like to learn more about markdown syntax, you can visit this [markdown cheatsheet](https://www.markdownguide.org/cheat-sheet/).

#### Headings

To create a heading, add the hash sign (#) before the heading. The number of number signs you use should correspond to the heading level. You'll see in this guide that we've used all six heading levels (not necessarily in the correct way you should use headings!) to illustrate how they should look.

##### Lists

You can see examples of ordered and unordered lists above.

###### Code Blocks

This markdown editor allows for inline-code snippets, like this: \`<p>I'm inline</p>\`. It also allows for larger code blocks like this:

\`\`\`
<main>
  <h1>This is a larger code block</h1>
</main>
\`\`\`
`;

export default function Panes() {
  const [markdown, setMarkdown] = useState(md);
  const [isPreview, setIsPreview] = useState(false);

  const html = marked.parse(markdown);

  function handlePreviewToggle() {
    setIsPreview(!isPreview);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setMarkdown(e.target.value);
  }

  return (
    <>
      <div className="fixed flex w-full items-center justify-between bg-base-200 p-4">
        <h2
          className={`${roboto.className} my-0 text-sm uppercase tracking-wide text-base-500`}
        >
          markdown editor
        </h2>
        <button className="py-1" onClick={handlePreviewToggle}>
          <AiOutlineEye className="h-6 w-6" />
        </button>
      </div>
      <MarkdownPane
        markdown={markdown}
        onChange={handleChange}
        isPreview={isPreview}
      />
      <HtmlPane html={html} isPreview={isPreview} />
    </>
  );
}

function MarkdownPane({
  markdown,
  onChange,
  isPreview,
}: {
  markdown: string;
  onChange: ChangeEventHandler;
  isPreview: boolean;
}) {
  return (
    <textarea
      className={`${robotoMono.className} ${
        isPreview ? '-translate-x-full ' : ''
      }absolute  -z-10 mt-16 h-[calc(100vh-112px)] w-full resize-none p-4 text-base-700 transition-transform duration-300 ease-in`}
      value={markdown}
      onChange={onChange}
    ></textarea>
  );
}

function HtmlPane({ html, isPreview }: { html: string; isPreview: boolean }) {
  return (
    <article
      className={`${
        isPreview ? '' : 'translate-x-full '
      }h-[calc(100vh-112px)] absolute -z-10 mt-16 w-full resize-none p-4 transition-transform duration-300 ease-in`}
      dangerouslySetInnerHTML={{ __html: html }}
    ></article>
  );
}
