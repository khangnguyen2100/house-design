import { HeartOutlined } from '@ant-design/icons';
import Image from 'next/image';
import React from 'react';
import { Button, Divider, Rate } from 'antd';
import Link from 'next/link';

import { formatPrice } from '@/utils/product';
import { useCartContext } from '@/contexts/Cart/CartContextProvider';
export type ProductType = {
  id: string;
  name: string;
  price: number;
  salePrice: number;
  image: string;
  rate: number;
  description: string;
  category: string;
  createdAt: string;
};

const ProductItem = (props: ProductType) => {
  const { addToCart } = useCartContext();
  const { id, name, rate, price, salePrice, image } = props;
  return (
    <div className='group flex w-full flex-col items-center border border-solid border-transparent p-4 hover:border-[#DFDFE2]'>
      <div className='h-[200px] w-full'>
        <Image src={image} alt={name} width={296} height={200} />
      </div>
      <div className='flex w-full flex-col'>
        {/* info */}
        <div className='flex items-center justify-between'>
          <h3 className='text-base'>
            <Link href={`/products/${id}`}>{name}</Link>
          </h3>

          <Button
            type='text'
            icon={<HeartOutlined style={{ fontSize: '22px' }} />}
          />
        </div>
        <Divider />
        {/* price */}
        <div className='mb-2 flex w-full items-center justify-between'>
          <p className='text-lg font-bold text-red-600'>{formatPrice(price)}</p>
          <p className='text-base text-typo-5 line-through'>
            {formatPrice(salePrice)}
          </p>
        </div>
        {/* rate */}
        <Rate disabled defaultValue={rate} className='mb-5' />
        <div className='invisible mt-3 flex items-center justify-between opacity-0 transition-all group-hover:visible group-hover:opacity-100'>
          <Button type='primary' size='large' onClick={() => addToCart(props)}>
            Thêm vào giỏ hàng
          </Button>
          <Button size='large'>
            <Link href={`/products/${id}`}>Xem ngay</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
