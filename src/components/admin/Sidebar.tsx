'use client';
import { Icon, IconButton } from '@mui/material';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { AiOutlineDashboard } from 'react-icons/ai';
import { BiCategoryAlt } from 'react-icons/bi';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import type { IconType } from 'react-icons/lib';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { RxPerson } from 'react-icons/rx';

interface AdminRouteProps {
  path: string;
  name: string;
  icon: IconType;
}
const adminRoutes: AdminRouteProps[] = [
  {
    path: '/admin',
    name: 'Bảng thống kê',
    icon: AiOutlineDashboard,
  },
  {
    path: '/admin/categories',
    name: 'Danh mục',
    icon: BiCategoryAlt,
  },
  {
    path: '/admin/products',
    name: 'Sản phẩm',
    icon: MdOutlineProductionQuantityLimits,
  },
  {
    path: '/admin/customers',
    name: 'Khách hàng',
    icon: RxPerson,
  },
  {
    path: '/admin/orders',
    name: 'Đơn đặt hàng',
    icon: HiOutlineShoppingBag,
  },
];
const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  return (
    <div className='flex'>
      <div className='fixed flex h-screen w-56 flex-col justify-between border-r-[1px] bg-white p-4'>
        <div className='mt-5 flex flex-col gap-y-6'>
          {adminRoutes.map((item, index: number) => {
            const { path, icon, name } = item;
            return (
              <Link href={path} key={index}>
                <div className={'flex cursor-pointer items-center gap-x-4'}>
                  <div
                    className={clsx(
                      'flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 p-3 text-typo-2 hover:bg-gray-200',
                      pathName === path &&
                        'bg-purple-600 text-white hover:bg-purple-800',
                    )}
                  >
                    <Icon component={icon} />
                  </div>
                  <p
                    className={clsx(
                      'font-semibold text-typo-3',
                      pathName === path &&
                        '!text-purple-600 hover:!text-purple-800',
                    )}
                  >
                    {name}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <main className='ml-56 w-full'>{children}</main>
    </div>
  );
};

export default Sidebar;
