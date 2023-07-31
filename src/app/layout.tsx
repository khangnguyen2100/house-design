import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import './globals.css';
import { ReactNode } from 'react';

import { CartContextProvider } from '@/contexts/Cart/CartContextProvider';

import { NextAuthProvider } from './providers';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});
export const metadata: Metadata = {
  title: 'Home',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${montserrat.variable}`}>
        <CartContextProvider>
          <NextAuthProvider>{children}</NextAuthProvider>
        </CartContextProvider>
      </body>
    </html>
  );
}
