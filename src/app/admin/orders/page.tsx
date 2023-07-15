import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';

import { data } from 'src/data/data.js';

const orders = () => {
  return (
    <div className='min-h-screen bg-gray-100'>
      <div className='flex justify-between px-4 pt-4'>
        <h2>Orders</h2>
        <h2>Welcome Back, Clint</h2>
      </div>
      <div className='p-4'>
        <div className='m-auto w-full overflow-y-auto rounded-lg border bg-white p-4'>
          <div className='my-3 grid cursor-pointer grid-cols-2 items-center justify-between p-2 sm:grid-cols-3 md:grid-cols-4'>
            <span>Order</span>
            <span className='text-right sm:text-left'>Status</span>
            <span className='hidden md:grid'>Last Order</span>
            <span className='hidden sm:grid'>Method</span>
          </div>
          <ul>
            {data.map((order, id) => (
              <li
                key={id}
                className='my-3 grid cursor-pointer grid-cols-2 items-center justify-between rounded-lg bg-gray-50 p-2 hover:bg-gray-100 sm:grid-cols-3 md:grid-cols-4'
              >
                <div className='flex'>
                  <div className='rounded-lg bg-purple-100 p-3'>
                    <FaShoppingBag className='text-purple-800' />
                  </div>
                  <div className='pl-4'>
                    <p className='font-bold text-gray-800'>
                      ${order.total.toLocaleString()}
                    </p>
                    <p className='text-sm text-gray-800'>{order.name.first}</p>
                  </div>
                </div>
                <p className='text-right text-gray-600 sm:text-left'>
                  <span
                    className={
                      order.status == 'Processing'
                        ? 'rounded-lg bg-green-200 p-2'
                        : order.status == 'Completed'
                        ? 'rounded-lg bg-blue-200 p-2'
                        : 'rounded-lg bg-yellow-200 p-2'
                    }
                  >
                    {order.status}
                  </span>
                </p>
                <p className='hidden md:flex'>{order.date}</p>
                <div className='hidden items-center justify-between sm:flex'>
                  <p>{order.method}</p>
                  <BsThreeDotsVertical />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default orders;
