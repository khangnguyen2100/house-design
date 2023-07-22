import type { Metadata } from 'next';

import Layout from '@/components/Layout/Layout';
import ExampleClientComponent from '@/components/common/Breadcrumbs/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Dự án',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout>
      <ExampleClientComponent />

      {children}
    </Layout>
  );
}
