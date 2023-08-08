'use client';
import ProductBanner from '/public/images/banner/product-banner.jpg';

import { useEffect, useState } from 'react';

import Banner from 'components/common/Banner/Banner';
import { getProducts } from '@/services/productServices';
import { getCategories } from '@/services/categoryServices';
import ProductsList from '@/components/Products/ProductsList';
import { CategoryProps, ProductProps } from '@/Types/Type';

import { Spin } from 'antd';

export const dynamic = 'force-dynamic';

const Products = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const getData = async () => {
    const [products, categories] = await Promise.all([
      getProducts(),
      getCategories(),
    ]);
    setProducts(products);
    setCategories(categories);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className='flex min-h-screen w-full flex-col items-center'>
      <Banner
        background={ProductBanner}
        title='Sản phẩm'
        height='large'
        overlay
      />
      {products.length > 0 ? (
        <ProductsList products={products} categories={categories} />
      ) : (
        <div
          className='flex h-full w-full items-center justify-center'
          style={{ minHeight: 'calc(100vh - 64px)' }}
        >
          <Spin size='large' />
        </div>
      )}
    </div>
  );
};

export default Products;
