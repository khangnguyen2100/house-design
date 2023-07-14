'use client';

import { Col, Divider, Row } from 'antd';
import { useState } from 'react';

import FilterContainer from './Filter/FilterContainer';
import ProductItem, { ProductType } from './ProductItem';
type Props = {
  products: ProductType[];
};
type FilterType = {
  price: {
    min: number;
    max: number;
  };
  category: string;
  search: string;
};
const filterInit = {
  price: {
    min: 0,
    max: 1000,
  },
  category: '',
  search: '',
};

const ProductsList = (props: Props) => {
  const { products } = props;
  const [filters, setFilters] = useState<FilterType>(filterInit);
  return (
    <div className='flex max-w-large flex-col px-5 '>
      <FilterContainer />
      <Divider className='my-7' />
      <Row className='mt-5'>
        {products.map((product, i) => (
          <Col className='gutter-row' span={6} key={i}>
            <ProductItem {...product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductsList;
