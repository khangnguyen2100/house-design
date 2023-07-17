import { Montserrat } from 'next/font/google';
import type { Metadata } from 'next';

import './globals.css';
import Nav from '@/components/common/Nav/Navbar';
import Footer from '@/components/common/Footer/Footer';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});
export const metadata: Metadata = {
  title: 'Home',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${montserrat.variable} relative`}>
        <Nav></Nav>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
