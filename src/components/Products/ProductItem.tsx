import { HeartOutlined } from '@ant-design/icons';
import Image from 'next/image';
import React from 'react';
import { Button, Divider } from 'antd';

import { formatPrice } from '@/utils/product';
export type ProductType = {
  name: string;
  price: number;
  salePrice: number;
  image: string;
  description: string;
  category: string;
};

const ProductItem = (props: ProductType) => {
  const { name, price, salePrice, image, description, category } = props;
  return (
    <div className='group flex flex-col items-center border border-solid border-transparent p-5 hover:border-[#DFDFE2]'>
      <div className='h-[200px] w-full'>
        <Image src={image} alt={name} width={296} height={200} />
      </div>
      <div>
        <div className='flex flex-col'>
          {/* info */}
          <div className='flex items-center justify-between'>
            <h3 className='text-base'>{name}</h3>

            <Button
              type='primary'
              icon={<HeartOutlined className='text-xl' />}
              loading={false}
            />
          </div>
          <Divider />
          {/* price */}
          <div className='flex w-full flex-col items-end justify-end mb-5'>
            <p className='font-medium text-red-600'>{formatPrice(price)}</p>
            <p className='mt-2 text-typo-5 line-through'>
              {formatPrice(salePrice)}
            </p>
          </div>
          <div className='flex items-center'>
            <Button>Thêm vào giỏ hàng</Button>
            <Button type='primary'>Xem ngay</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
