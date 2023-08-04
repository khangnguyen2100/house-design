import { Chip } from '@mui/material';

import { UserProps } from '@/Types/Type';
import { getUsers } from '@/services/userServices';
import CustomersMenu from '@/components/admin/Customers/CustomersMenu';

const customers = async () => {
  const userData = await getUsers();
  return (
    <div className='min-h-screen bg-gray-100'>
      <div className='flex justify-between p-4'>
        <h2>Khách hàng</h2>
        <h2>Welcome Back, Clint</h2>
      </div>
      <div className='p-4'>
        <div className='m-auto w-full overflow-y-auto rounded-lg border bg-white p-4'>
          <div className='my-3 grid cursor-pointer grid-cols-2 items-center justify-between p-2 sm:grid-cols-3 md:grid-cols-4'>
            <span>Name</span>
            <span>Email</span>
            <span>Role</span>
            <span>Trạng thái</span>
          </div>
          <ul>
            {userData.map((user: UserProps, index: number) => (
              <li
                key={index}
                className='relative my-3 grid cursor-pointer grid-cols-2 items-center justify-between rounded-lg bg-gray-50 p-2 hover:bg-gray-100 sm:grid-cols-3 md:grid-cols-4'
              >
                <div className='flex items-center'>
                  <p className='pl-4'>{user.name}</p>
                </div>
                <div className='col-span-1'>
                  <p className='text-bold'>{user.email}</p>
                </div>
                {/* role */}
                <div className='col-span-1'>
                  {user.role === 'admin' ? (
                    <Chip
                      label={user.role.toUpperCase()}
                      color={'success'}
                      variant='filled'
                      className='text-bold'
                    />
                  ) : (
                    <Chip
                      label={user.role}
                      color={'primary'}
                      variant='outlined'
                      className='text-bold'
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
                      className='text-bold'
                    />
                  ) : (
                    <Chip
                      label={user.status}
                      color={'error'}
                      variant='filled'
                      className='text-bold'
                    />
                  )}
                </div>
                <div className='col-span-1'>
                  <CustomersMenu userData={user} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default customers;
