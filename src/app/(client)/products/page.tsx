import ProductBanner from '/public/images/banner/product-banner.jpg';

import type { Metadata } from 'next';

import ProductsList from '@/components/Products/ProductsList';
import { productsMock } from '@/constants';
import Banner from 'components/common/Banner/Banner';

export const metadata: Metadata = {
  title: 'Sản phẩm',
};

const Products = async () => {
  // check user on server side
  // const session = await getServerSession(authOptions);
  // console.log('session:', session);
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
