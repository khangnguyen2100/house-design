import React from 'react';

import Nav from '../common/Nav/Navbar';
import Footer from '../common/Footer/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='app relative bg-white p-10'>
      <Nav />
      <main className='mb-8 bg-white'>{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
