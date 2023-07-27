'use client';
import { Col, Divider, Empty, Row } from 'antd';
import { useState } from 'react';

import FilterContainer from './Filter/FilterContainer';
import ProductItem, { ProductType } from './ProductItem';
type Props = {
  products: ProductType[];
};
export type FilterType = {
  sortBy: number;
  category: string;
  search: string;
};
const filterInit = {
  sortBy: 1,
  category: '',
  search: '',
};
export type FilterChangeType = {
  type: keyof FilterType;
  value: string | number | string[];
};

const ProductsList = (props: Props) => {
  const { products } = props;
  const [filters, setFilters] = useState<FilterType>(filterInit);
  const [productsData, setProductsData] = useState(products);

  const handleFiltersChange = (props: FilterChangeType) => {
    const { type, value } = props;
    setFilters(prev => ({
      ...prev,
      [type]: value,
    }));
  };
  const handleFilterProducts = () => {
    // filter
    const newProductData = products.filter(product => {
      const { category, search } = filters;

      const isCategory =
        category.length === 0 || category.includes(product.category);

      const isSearch =
        !search || product.name.toLowerCase().includes(search.toLowerCase());
      return isCategory && isSearch;
    });
    // sort
    const { sortBy } = filters;
    if (sortBy === 3 || sortBy === 4) {
      newProductData.sort((a, b) => {
        if (sortBy === 3) return b.price - a.price;
        return a.price - b.price;
      });
    }
    if (sortBy === 2) {
      newProductData.sort((a, b) => {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      });
    }

    setProductsData(newProductData);
  };
  const handleResetFilters = () => {
    setFilters(filterInit);
    setProductsData(products);
  };

  return (
    <div className='flex min-h-screen w-full max-w-large flex-col px-5'>
      <FilterContainer
        filters={filters}
        onChange={handleFiltersChange}
        onFilter={handleFilterProducts}
        onReset={handleResetFilters}
      />
      <Divider className='my-7' />
      <Row className='mt-5'>
        {productsData.map((product, i) => (
          <Col
            className='gutter-row'
            xs={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 8 }}
            xl={{ span: 6 }}
            key={i}
          >
            <ProductItem {...product} />
          </Col>
        ))}
        {productsData.length === 0 && (
          <div className='mt-16 grid w-full place-items-center'>
            <Empty description={'Không tìm thấy sản phẩm phù hợp'} />
          </div>
        )}
      </Row>
    </div>
  );
};

export default ProductsList;
