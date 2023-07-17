'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import Logo from '/public/Logo.png';

import Link from 'next/link';

import { menuItems } from '@/constants';

function Nav() {
  const [isFixed, setIsFixed] = useState(false);
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
      className={`navbar z-10 flex h-[40px] items-center justify-between overflow-hidden font-medium transition-transform duration-300 ease-in-out ${
        isFixed
          ? 'animate-slide-down fixed  top-0 bg-white px-1 text-black shadow-lg'
          : 'absolute left-10 top-10 p-10 text-white'
      }`}
    >
      <div className='logo z-10 h-10 cursor-pointer'>
        <Link href='/' className=''>
          <Image src={Logo} alt='' className='h-full w-auto' />
        </Link>
      </div>
      <div className='nav__links flex gap-x-4'>
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
    </header>
  );
}

export default Nav;
