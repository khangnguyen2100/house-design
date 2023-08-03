import React from 'react';
import { BsPersonFill, BsThreeDotsVertical } from 'react-icons/bs';

import { API_URL, userData } from '@/constants';
import { UserProps } from '@/Types/Type';
import { Chip } from '@mui/material';

const getUsers = async () => {
  const users = await fetch(`${API_URL}/users`).then(res => res.json());

  return users;
};

const customers = async () => {
  const userData = await getUsers();
  console.log('data:', userData);
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
                className='my-3 grid cursor-pointer grid-cols-2 items-center justify-between rounded-lg bg-gray-50 p-2 hover:bg-gray-100 sm:grid-cols-3 md:grid-cols-4'
              >
                <div className='flex items-center'>
                  <p className='pl-4'>{user.name}</p>
                </div>
                <div className='col-span-1'>
                  <p className='text-bold'>{user.email}</p>
                </div>
                <div className='col-span-1'>
                  <Chip
                    label={user.role}
                    color={user.role === 'admin' ? 'secondary' : 'primary'}
                    variant='outlined'
                    className='text-bold'
                  />
                </div>
                <div className='col-span-1'>
                  <Chip
                    label={user.status}
                    color={user.status === 'active' ? 'primary' : 'error'}
                    variant='outlined'
                    className='text-bold'
                  />
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
