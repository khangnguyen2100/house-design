import Link from 'next/link';
import React from 'react';
import { AiOutlineDashboard } from 'react-icons/ai';
import { BiCategoryAlt } from 'react-icons/bi';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { RxPerson, RxSketchLogo } from 'react-icons/rx';
const Sidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex'>
      <div className='fixed flex h-screen w-20 flex-col justify-between border-r-[1px] bg-white p-4'>
        <div className='flex flex-col items-center'>
          <Link href='/admin'>
            <div className='inline-block rounded-lg bg-purple-800 p-3 text-white'>
              <RxSketchLogo size={20} />
            </div>
          </Link>
          <span className='w-full border-b-[1px] border-gray-200 p-2'></span>
          <Link href='/admin'>
            <div className='my-4 inline-block cursor-pointer rounded-lg bg-gray-100 p-3 text-typo-2 hover:bg-gray-200'>
              <AiOutlineDashboard size={20} />
            </div>
          </Link>
          <Link href='/admin/categories'>
            <div className='my-4 inline-block cursor-pointer rounded-lg bg-gray-100 p-3 text-typo-2 hover:bg-gray-200'>
              <BiCategoryAlt size={20} />
            </div>
          </Link>
          <Link href='/admin/products'>
            <div className='my-4 inline-block cursor-pointer rounded-lg bg-gray-100 p-3 text-typo-2 hover:bg-gray-200'>
              <MdOutlineProductionQuantityLimits size={20} />
            </div>
          </Link>
          <Link href='/admin/customers'>
            <div className='my-4 inline-block cursor-pointer rounded-lg bg-gray-100 p-3 text-typo-2 hover:bg-gray-200'>
              <RxPerson size={20} />
            </div>
          </Link>
          <Link href='/admin/orders'>
            <div className='my-4 inline-block cursor-pointer rounded-lg bg-gray-100 p-3 text-typo-2 hover:bg-gray-200'>
              <HiOutlineShoppingBag size={20} />
            </div>
          </Link>
        </div>
      </div>
      <main className='ml-20 w-full'>{children}</main>
    </div>
  );
};

export default Sidebar;
