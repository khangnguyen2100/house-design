'use client';
import { Metadata } from 'next';

import BarChart from 'components/admin/BarChart';
import Header from 'components/admin/Header';
import RecentOrders from 'components/admin/RecentOrders';
import TopCards from 'components/admin/TopCards';
import Sidebar from '@/components/admin/Sidebar';

export const metadata: Metadata = {
  title: 'Admin',
};
export default function Index() {
  return (
    <main className='min-h-screen bg-gray-100'>
      <Sidebar>
        <Header />
        <TopCards />
        <div className='grid grid-cols-1 gap-4 p-4 md:grid-cols-3'>
          <BarChart />
          <RecentOrders />
        </div>
      </Sidebar>
    </main>
  );
}
