import React from 'react';

import Nav from '../common/Nav/Navbar';
import Footer from '../common/Footer/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='app relative bg-[#f0f0f0] p-10'>
      <Nav />
      <main className='mb-8'>{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
