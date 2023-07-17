'use client';

import { useEffect } from 'react';
import './globals.css';
import { Quicksand } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { register } from 'swiper/element/bundle';

const quicksand = Quicksand({ subsets: ['latin'] });

// export const metadata = {
//   title: 'Wealth Management Platform: Capai Tujuan Keuangan Dengan PINA',
//   description:
//     'Dapatkan solusi keuangan terbaik dari PINA, wealth management platform yang menyediakan akses ke financial planner berpengalaman untuk bantu kamu capai tujuan keuangan.',
// };

export default function RootLayout({ children }) {
  register();

  useEffect(() => {
    import('preline');
  }, []);
  return (
    <html lang='en'>
      <body className={quicksand.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
