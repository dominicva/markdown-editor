import { Roboto } from 'next/font/google';
import { AiOutlineMenu, AiOutlineFile, AiOutlineSave } from 'react-icons/ai';
import { FaRegTrashAlt } from 'react-icons/fa';

const roboto = Roboto({ subsets: ['latin'], weight: '400' });

export default function Home() {
  return (
    <>
      <header className="flex items-center bg-base-800 pr-2 text-base-100">
        <button className="mr-6 flex h-14 w-14 items-center justify-center bg-base-700">
          <AiOutlineMenu />
        </button>
        <div className="mr-auto flex items-center gap-2">
          <AiOutlineFile />
          <h1 className={roboto.className}>untitled.md</h1>
        </div>
        <button className="mr-6">
          <FaRegTrashAlt className="text-base-500" />
        </button>
        <button className="flex h-10 w-10 items-center justify-center rounded bg-primary">
          <AiOutlineSave />
        </button>
      </header>
      <main>
        <h1 className="text-base-500">Markdown Editor</h1>
      </main>
    </>
  );
}
