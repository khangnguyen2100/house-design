import type { Metadata } from 'next';

import Layout from '@/components/Layout/Layout';

export const metadata: Metadata = {
  title: 'Sản phẩm',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
