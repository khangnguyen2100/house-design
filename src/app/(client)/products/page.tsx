import ProductBanner from '/public/images/banner/product-banner.jpg';

import type { Metadata } from 'next';

import Banner from 'components/common/Banner/Banner';
import { getCategories, getProducts } from '@/utils/fetchAPI';
import ProductsList from '@/components/Products/ProductsList';

export const metadata: Metadata = {
  title: 'Sản phẩm',
};
export const revalidate = 30;

const Products = async () => {
  let products = await getProducts();
  let categories = await getCategories();
  return (
    <div className='flex min-h-screen w-full flex-col items-center'>
      <Banner
        background={ProductBanner}
        title='Sản phẩm'
        height='large'
        overlay
      />
      <ProductsList products={products} categories={categories} />
    </div>
  );
};

export default Products;
