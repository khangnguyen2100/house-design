import Image from 'next/image';

import Logo from '/public/Logo.png';

import Link from 'next/link';

import { menuItems } from '@/constants';

function Nav() {
  return (
    <header className='absolute left-1/2 top-20 z-10 flex h-[40px] w-full max-w-[1460px] -translate-x-1/2 items-center justify-between overflow-hidden px-4'>
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
            className='nav__link text-uppercase z-10 cursor-pointer text-base uppercase text-white opacity-70 hover:opacity-100'
          >
            {item.title}
          </Link>
        ))}
      </div>
    </header>
  );
}

export default Nav;
