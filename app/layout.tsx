import './globals.css';
import { Roboto_Slab } from 'next/font/google';

const robotoSlab = Roboto_Slab({ subsets: ['latin'] });

export const metadata = {
  title: 'Markdown Editor',
  description: 'A live-preview markdown editor',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={robotoSlab.className}>{children}</body>
    </html>
  );
}
