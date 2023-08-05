import { Chip } from '@mui/material';

import { UserProps } from '@/Types/Type';
import { getUsers } from '@/services/userServices';
import CustomersMenu from '@/components/admin/Customers/CustomersMenu';
import { formatPrice } from '@/utils/product';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

const customers = async () => {
  const userData = await getUsers();
  return (
    <div className='min-h-screen bg-gray-100'>
      <div className='flex justify-between p-4'>
        <h2>Khách hàng</h2>
      </div>
      <div className='p-4'>
        <div className='m-auto w-full overflow-y-auto rounded-lg border bg-white p-4'>
          <div className='my-3 grid cursor-pointer grid-cols-4 items-center justify-between p-2 sm:grid-cols-5 md:grid-cols-6'>
            <span>Tên</span>
            <span>Email</span>
            <span>Đơn hàng đã đặt</span>
            <span>Tổng tiền</span>
            <span>Quyền</span>
            <span>Trạng thái</span>
          </div>
          <ul>
            {userData.map((user: UserProps, index: number) => (
              <li
                key={index}
                className='relative my-3 grid cursor-pointer grid-cols-4 items-center justify-between rounded-lg bg-gray-50 p-2 hover:bg-gray-100 sm:grid-cols-5 md:grid-cols-6'
              >
                <div className='col-span-1'>
                  <p className='pl-4 font-semibold'>{user.name}</p>
                </div>
                <div className='col-span-1'>
                  <p className='font-medium'>{user.email}</p>
                </div>
                <div className='col-span-1'>
                  <p className='text-center font-bold'>{user.totalOrders}</p>
                </div>
                <div className='col-span-1'>
                  <p className='font-medium'>
                    {formatPrice(user.totalOrderPrice)}
                  </p>
                </div>
                {/* role */}
                <div className='col-span-1'>
                  {user.role === 'admin' ? (
                    <Chip
                      label={user.role.toUpperCase()}
                      color={'success'}
                      variant='filled'
                      className='font-medium'
                    />
                  ) : (
                    <Chip
                      label={user.role}
                      color={'primary'}
                      variant='outlined'
                      className='font-medium'
                    />
                  )}
                </div>
                {/* status */}
                <div className='col-span-1'>
                  {user.status === 'active' ? (
                    <Chip
                      label={user.status}
                      color={'primary'}
                      variant='outlined'
                      className='font-medium'
                    />
                  ) : (
                    <Chip
                      label={user.status}
                      color={'error'}
                      variant='filled'
                      className='font-medium'
                    />
                  )}
                </div>
                <CustomersMenu userData={user} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default customers;
