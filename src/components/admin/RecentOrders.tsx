import momment from 'moment';
import 'moment/locale/vi';
import Link from 'next/link';
import { FaShoppingBag } from 'react-icons/fa';

import { OrderProps } from '@/Types/Type';
import { formatPrice } from '@/utils/product';
interface Props {
  data: any;
}
const RecentOrders = ({ data }: Props) => {
  return (
    <div className='relative col-span-1 m-auto h-[50vh] w-full overflow-scroll rounded-lg border bg-white p-4 lg:h-[70vh]'>
      <h1>Đơn đặt hàng mới</h1>
      <ul>
        {data.orders.map((order: OrderProps, index: number) => (
          <li
            key={index}
            className='my-3 grid cursor-pointer grid-cols-2 items-center justify-between rounded-lg bg-gray-50 p-2 hover:bg-gray-100'
          >
            {/* order */}
            <div className='col-span-1 flex'>
              <Link href={`/admin/orders`}>
                <div className='rounded-lg bg-purple-100 p-3'>
                  <FaShoppingBag className='text-purple-800' />
                </div>
              </Link>
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
              <p>
                {momment(order.createdAt, 'YYYY-MM-DDThh:mm:ssTZD')
                  .locale('vi')
                  .fromNow()}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentOrders;
