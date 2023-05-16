import { Roboto } from 'next/font/google';
import { AiOutlineMenu, AiOutlineFile, AiOutlineSave } from 'react-icons/ai';
import { FaRegTrashAlt } from 'react-icons/fa';
import Panes from '@/components/Panes';

const roboto = Roboto({ subsets: ['latin'], weight: '400' });

export default function Home() {
  return (
    <main>
      <div className="fixed w-full">
        <header className="flex items-center bg-base-800 py-1 pr-2 text-base-100">
          <button className="mr-6 flex h-14 w-14 items-center justify-center bg-base-700">
            <AiOutlineMenu />
          </button>
          <div className="mr-auto flex items-center gap-2">
            <AiOutlineFile />
            <h2 className={`${roboto.className} mb-0 text-sm`}>untitled.md</h2>
          </div>
          <button className="mr-6">
            <FaRegTrashAlt className="text-base-500" />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded bg-primary">
            <AiOutlineSave />
          </button>
        </header>
      </div>

      <section className="overflow-hidden pt-16">
        <Panes />
      </section>
    </main>
  );
}
