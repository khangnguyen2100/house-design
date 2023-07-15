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
  createdAt: string;
};

const ProductItem = (props: ProductType) => {
  const { name, price, salePrice, image, description, category } = props;
  return (
    <div className='group flex w-full flex-col items-center border border-solid border-transparent p-4 hover:border-[#DFDFE2]'>
      <div className='h-[200px] w-full'>
        <Image src={image} alt={name} width={296} height={200} />
      </div>
      <div className='flex w-full flex-col'>
        {/* info */}
        <div className='flex items-center justify-between'>
          <h3 className='text-base'>{name}</h3>

          <Button
            type='text'
            icon={<HeartOutlined style={{ fontSize: '22px' }} />}
          />
        </div>
        <Divider />
        {/* price */}
        <div className='mb-5 flex w-full flex-col items-end justify-end'>
          <p className='text-base font-semibold text-red-500'>
            {formatPrice(price)}
          </p>
          <p className='text-base text-typo-5 line-through'>
            {formatPrice(salePrice)}
          </p>
        </div>
        <div className='invisible mt-3 flex items-center justify-between opacity-0 transition-all group-hover:visible group-hover:opacity-100'>
          <Button type='primary' size='large'>
            Thêm vào giỏ hàng
          </Button>
          <Button size='large'>Xem ngay</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
