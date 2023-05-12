'use client';

import { ChangeEvent, ChangeEventHandler, useState } from 'react';
import { marked } from 'marked';

import { Roboto_Mono } from 'next/font/google';

const robotoMono = Roboto_Mono({ subsets: ['latin'] });

export default function Panes() {
  const [markdown, setMarkdown] = useState('# Welcome to Markdown');
  const html = marked.parse(markdown);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setMarkdown(e.target.value);
  }

  return (
    <>
      <MarkdownPane markdown={markdown} onChange={handleChange} />
      <HtmlPane html={html} />
    </>
  );
}

function MarkdownPane({
  markdown,
  onChange,
}: {
  markdown: string;
  onChange: ChangeEventHandler;
}) {
  return (
    <textarea
      className={`${robotoMono.className} h-[calc(100vh-112px)] w-full resize-none p-4 text-base-700`}
      value={markdown}
      onChange={onChange}
    ></textarea>
  );
}

function HtmlPane({ html }: { html: string }) {
  return (
    <article
      className={`h-[calc(100vh-112px)] w-full resize-none p-4 text-base-700`}
      dangerouslySetInnerHTML={{ __html: html }}
    ></article>
  );
}
