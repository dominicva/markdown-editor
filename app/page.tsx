import { Roboto } from 'next/font/google';
import {
  AiOutlineMenu,
  AiOutlineFile,
  AiOutlineSave,
  AiOutlineEye,
} from 'react-icons/ai';
import { FaRegTrashAlt } from 'react-icons/fa';
import Panes from '@/components/Panes';
const roboto = Roboto({ subsets: ['latin'], weight: '400' });

export default function Home() {
  return (
    <main>
      <header className="flex items-center bg-base-800 pr-2 text-base-100">
        <button className="mr-6 flex h-14 w-14 items-center justify-center bg-base-700">
          <AiOutlineMenu />
        </button>
        <div className="mr-auto flex items-center gap-2">
          <AiOutlineFile />
          <h2 className={roboto.className}>untitled.md</h2>
        </div>
        <button className="mr-6">
          <FaRegTrashAlt className="text-base-500" />
        </button>
        <button className="flex h-10 w-10 items-center justify-center rounded bg-primary">
          <AiOutlineSave />
        </button>
      </header>
      <div className="flex items-center justify-between bg-base-200 p-4">
        <h2
          className={`${roboto.className} text-sm uppercase tracking-wide text-base-500`}
        >
          markdown editor
        </h2>
        <button>
          <AiOutlineEye className="h-6 w-6" />
        </button>
      </div>

      <section>
        {/* <MarkdownPane /> */}

        <Panes />
      </section>
    </main>
  );
}
