import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='bg-[#f0f0f0] p-10'>
      <section className='bg-white'>{children}</section>
    </main>
  );
}
