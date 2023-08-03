'use client';
import { Metadata } from 'next';

import BarChart from 'components/admin/BarChart';
import Header from 'components/admin/Header';
import RecentOrders from 'components/admin/RecentOrders';
import TopCards from 'components/admin/TopCards';
export const revalidate = 30;
export const metadata: Metadata = {
  title: 'Admin',
};
export default function Index() {
  return (
    <>
      <Header />
      <TopCards />
      <div className='grid grid-cols-1 gap-4 p-4 md:grid-cols-3'>
        <BarChart />
        <RecentOrders />
      </div>
    </>
  );
}
