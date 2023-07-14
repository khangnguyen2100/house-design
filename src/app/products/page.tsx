import React from 'react';

import ProductBanner from '/public/images/banner/product-banner.jpg';

import Banner from 'components/common/Banner/Banner';

const Products = () => {
  return (
    <div className='flex min-h-screen w-full flex-col items-center'>
      <Banner
        background={ProductBanner}
        title='Products'
        height='large'
        overlay
      />
    </div>
  );
};

export default Products;
