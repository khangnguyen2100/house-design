import React from 'react';

import Nav from '../Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Nav />
      <main className='bg-[#f0f0f0] p-10'>
        <section className='bg-white'>{children}</section>
      </main>
    </>
  );
};

export default Layout;
