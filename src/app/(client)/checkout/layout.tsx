import type { Metadata } from 'next';

import Layout from '@/components/Layout/Layout';

export const metadata: Metadata = {
  title: 'Thanh toán',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
