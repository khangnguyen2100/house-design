import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';

import { userData } from '@/constants';

const RecentOrders = () => {
  return (
    <div className='relative col-span-1 m-auto h-[50vh] w-full overflow-scroll rounded-lg border bg-white p-4 lg:h-[70vh]'>
      <h1>Recent Orders </h1>
      <ul>
        {userData.map((order, id) => (
          <li
            key={id}
            className='my-3 flex cursor-pointer items-center rounded-lg bg-gray-50 p-2 hover:bg-gray-100'
          >
            <div className='rounded-lg bg-purple-100 p-3'>
              <FaShoppingBag className='text-purple-800' />
            </div>
            <div className='pl-4'>
              <p className='font-bold text-gray-800'>${order.total}</p>
              <p className='text-sm text-gray-400'>{order.name.first}</p>
            </div>
            <p className='absolute right-6 text-sm md:hidden lg:flex'>
              {order.date}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentOrders;
