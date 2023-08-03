import ProductBanner from '/public/images/banner/product-banner.jpg';

import type { Metadata } from 'next';

import ProductsList from '@/components/Products/ProductsList';
import { API_URL } from '@/constants';
import Banner from 'components/common/Banner/Banner';

export const metadata: Metadata = {
  title: 'Sản phẩm',
};
export const revalidate = 30;

const getProducts = async () => {
  const products = await fetch(`${API_URL}/products`).then(res => res.json());

  return products;
};
const getCategories = async () => {
  const categories = await fetch(`${API_URL}/categories`).then(res =>
    res.json(),
  );

  return categories;
};

const Products = async () => {
  const productsData = await getProducts();
  const categoriesData = await getCategories();
  return (
    <div className='flex min-h-screen w-full flex-col items-center'>
      <Banner
        background={ProductBanner}
        title='Sản phẩm'
        height='large'
        overlay
      />
      <ProductsList products={productsData} categories={categoriesData} />
    </div>
  );
};

export default Products;
