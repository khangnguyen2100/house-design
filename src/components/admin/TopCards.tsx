import React from 'react';

import { formatPrice } from '@/utils/product';

interface Props {
  data: any;
}
const TopCards = async ({ data }: Props) => {
  return (
    <div className='grid gap-4 p-4 lg:grid-cols-5'>
      <div className='col-span-1 flex w-full justify-between rounded-lg border bg-white p-4 lg:col-span-2'>
        <div className='flex w-full flex-col pb-4'>
          <p className='text-2xl font-bold'>{data.totalOrders}</p>
          <p className='text-gray-600'>Số đơn hàng hôm nay</p>
        </div>
      </div>
      <div className='col-span-1 flex w-full justify-between rounded-lg border bg-white p-4 lg:col-span-2'>
        <div className='flex w-full flex-col pb-4'>
          <p className='text-2xl font-bold'>{formatPrice(data.totalPrice)}</p>
          <p className='text-gray-600'>Tổng tiền bán được trong hôm này</p>
        </div>
      </div>
    </div>
  );
};

export default TopCards;
