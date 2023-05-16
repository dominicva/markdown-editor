'use client';

import { ChangeEvent, ChangeEventHandler, useState } from 'react';
import { marked } from 'marked';

import { Roboto_Mono, Roboto } from 'next/font/google';
import { AiOutlineEye } from 'react-icons/ai';

const robotoMono = Roboto_Mono({ subsets: ['latin'] });
const roboto = Roboto({ subsets: ['latin'], weight: '400' });

export default function Panes() {
  const [markdown, setMarkdown] = useState('# Welcome to Markdown');
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
      <div className="flex items-center justify-between bg-base-200 p-4">
        <h2
          className={`${roboto.className} mb-0 text-sm uppercase tracking-wide text-base-500`}
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
        isPreview ? '-translate-x-full' : ''
      } absolute  h-[calc(100vh-112px)] w-full resize-none p-4 text-base-700 transition-transform duration-300 ease-in`}
      value={markdown}
      onChange={onChange}
    ></textarea>
  );
}

function HtmlPane({ html, isPreview }: { html: string; isPreview: boolean }) {
  const styles = `${isPreview ? '' : 'translate-x-full'}
  }h-[calc(100vh-112px)] w-full  resize-none p-4 text-base-700 transition-transform duration-300 ease-in`;

  return (
    <article
      className={styles}
      dangerouslySetInnerHTML={{ __html: html }}
    ></article>
  );
}
