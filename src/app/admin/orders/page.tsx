import momment from 'moment';
import { FaShoppingBag } from 'react-icons/fa';

import { getAllOrders } from '@/services/orderServices';
import { OrderProps } from '@/Types/Type';
import { formatPrice } from '@/utils/product';
const orders = async () => {
  const ordersData: OrderProps[] = await getAllOrders();

  return (
    <div className='min-h-screen bg-gray-100'>
      <div className='flex justify-between px-4 pt-4'>
        <h2>Đơn đặt hàng</h2>
        <h2>Welcome Back, Clint</h2>
      </div>
      <div className='p-4'>
        <div className='m-auto w-full overflow-y-auto rounded-lg border bg-white p-4'>
          <div className='my-3 grid cursor-pointer grid-cols-2 items-center justify-between p-2 sm:grid-cols-3 md:grid-cols-4'>
            <span className='col-span-1'>Đơn hàng</span>
            <span className='col-span-1'>Trạng thái</span>
            <span className='col-span-1'>Thời gian</span>
            <span className='col-span-1'>Địa chỉ</span>
          </div>
          <ul>
            {ordersData.map((order, index) => (
              <li
                key={index}
                className='my-3 grid cursor-pointer grid-cols-2 items-center justify-between rounded-lg bg-gray-50 p-2 hover:bg-gray-100 sm:grid-cols-3 md:grid-cols-4'
              >
                {/* order */}
                <div className='col-span-1 flex'>
                  <div className='rounded-lg bg-purple-100 p-3'>
                    <FaShoppingBag className='text-purple-800' />
                  </div>
                  <div className='pl-4'>
                    <p className='font-bold text-gray-800'>
                      {formatPrice(order.totalPay)}
                    </p>
                    <p className='text-sm text-gray-800'>
                      {order.customerName || order.user.name}
                    </p>
                  </div>
                </div>
                <div className='col-span-1'>
                  <p className='text-right text-gray-600 sm:text-left'>
                    <span
                      className={
                        order.status == 'pending'
                          ? 'rounded-lg bg-gray-300 p-2'
                          : order.status == 'delivery'
                          ? 'rounded-lg bg-green-300 p-2'
                          : order.status == 'success'
                          ? 'rounded-lg bg-blue-300 p-2'
                          : order.status == 'cancel'
                          ? 'rounded-lg bg-red-400 p-2'
                          : ''
                      }
                    >
                      {order.status}
                    </span>
                  </p>
                </div>
                <div className='col-span-1'>
                  <p>
                    {momment(
                      order.createdAt,
                      'YYYY-MM-DDThh:mm:ssTZD',
                    ).fromNow()}
                  </p>
                </div>
                <div className='col-span-1'>
                  <p>{order.address}</p>
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
