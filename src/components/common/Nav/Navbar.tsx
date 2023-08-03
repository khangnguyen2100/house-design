'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import Logo from '/public/Logo.png';

import { Badge } from '@mui/material';
import Link from 'next/link';
import { CgShoppingCart } from 'react-icons/cg';
import { MdOutlineAccountCircle } from 'react-icons/md';

import { menuItems } from '@/constants';
import { useCartContext } from '@/contexts/Cart/CartContextProvider';

function Nav() {
  const [isFixed, setIsFixed] = useState(false);
  const { cartState } = useCartContext();
  const { cartState } = useCartContext();

  const handleScroll = () => {
    const scollTop = window.scrollY || document.documentElement.scrollTop;
    setIsFixed(scollTop > 100);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header
      className={`z-10 flex h-[60px] items-center justify-between overflow-hidden font-medium shadow-sm transition-transform duration-300 ease-in-out ${
        isFixed
          ? 'animate-slide-down fixed  left-0 top-0 w-screen bg-white px-10 text-black'
          : ' mx-auto bg-white text-black'
      }`}
    >
      <div className='grid w-full grid-cols-12'>
        <div className='col-span-4 flex items-center justify-start gap-x-5'>
          {menuItems.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className='nav__link text-uppercase z-10 cursor-pointer text-sm uppercase text-inherit opacity-70 hover:opacity-100'
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className='z-10 col-span-4 h-16 cursor-pointer py-2 text-center'>
          <Link href='/' className=''>
            <Image src={Logo} alt='' className='h-full w-auto' />
          </Link>
        </div>
        <div className='col-span-4 flex items-center justify-end gap-x-8'>
          <Link href={'/cart'}>
            <Badge
              badgeContent={cartState.totalQuantity || 0}
              showZero
              color='secondary'
            >
              <CgShoppingCart className='cursor-pointer text-[1.75em] text-black'></CgShoppingCart>
            </Badge>
          </Link>
          <MdOutlineAccountCircle className='cursor-pointer text-[1.75em]'></MdOutlineAccountCircle>
        </div>
      </div>
    </header>
  );
}

export default Nav;
