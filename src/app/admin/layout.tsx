import type { Metadata } from 'next';

import Sidebar from '@/components/admin/Sidebar';

export const metadata: Metadata = {
  title: 'Admin',
};
export const revalidate = 0;
export const fetchCache = 'force-no-store';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='min-h-screen bg-gray-100'>
      <Sidebar>{children}</Sidebar>
    </main>
  );
}
