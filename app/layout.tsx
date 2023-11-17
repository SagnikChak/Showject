import { Expletus_Sans } from 'next/font/google';

import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const expletus = Expletus_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata = {
  title: 'Showject | Showoff your Projects',
  description: 'A place to showoff your best projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-black text-slate-200 ${expletus.className}`}>
        <Navbar />

        <main>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
