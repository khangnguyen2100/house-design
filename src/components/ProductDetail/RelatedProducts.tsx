'use client';
import { Col, Row } from 'antd';

import ProductItem, { ProductType } from '../Products/ProductItem';

type Props = {
  relatedProducts: ProductType[];
};

const RelatedProducts = (props: Props) => {
  const { relatedProducts } = props;
  return (
    <div className='mt-24'>
      <h2 className='text-2xl font-bold'>Sản phẩm liên quan</h2>
      <Row className='mt-5'>
        {relatedProducts.map((product, i) => (
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
      </Row>
    </div>
  );
};

export default RelatedProducts;
