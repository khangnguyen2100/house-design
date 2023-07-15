import ProductBanner from '/public/images/banner/product-banner.jpg';

import type { Metadata } from 'next';

import ProductsList from '@/components/Products/ProductsList';
import Banner from 'components/common/Banner/Banner';
import { productsMock } from '@/constants';

export const metadata: Metadata = {
  title: 'Sản phẩm',
};

const Products = () => {
  return (
    <div className='flex min-h-screen w-full flex-col items-center'>
      <Banner
        background={ProductBanner}
        title='Sản phẩm'
        height='large'
        overlay
      />
      <ProductsList products={productsMock} />
    </div>
  );
};

export default Products;
