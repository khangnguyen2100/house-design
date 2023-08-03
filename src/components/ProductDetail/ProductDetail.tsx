'use client';
import { HeartOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Divider, Rate } from 'antd';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { formatPrice } from '@/utils/product';
import { ProductProps } from '@/Types/Type';

const ProductDetail = (props: ProductProps) => {
  const { name, rate, price, salePrice, thumbnail, description, category } =
    props;
  const productAmountBtnClass =
    'w-10 h-10 flex items-center justify-center border border-solid border-[#DFDFE2] hover:bg-[#ccc] transition-all cursor-pointer';

  const [productAmount, setProductAmount] = useState<number>(1);

  const handleIncrementProductAmount = () => {
    setProductAmount(productAmount + 1);
  };
  const handleDecrementProductAmount = () => {
    if (productAmount > 1) setProductAmount(productAmount - 1);
  };

  return (
    <div className='mt-10 flex w-full items-start justify-center gap-x-[5%]'>
      <div className='image-side w-[50%]'>
        <Image
          src={thumbnail}
          alt={name}
          className='h-full w-full'
          width={600}
          height={400}
          layout='responsive'
          priority
        />
      </div>
      <div className='content-side w-[45%]'>
        <div className='flex items-center justify-between'>
          {/* name */}
          <h1 className='text-3xl font-bold'>{name}</h1>
          <Button
            type='text'
            icon={<HeartOutlined style={{ fontSize: '22px' }} />}
          />
        </div>
        {/* rating */}
        {/* <Rate disabled defaultValue={rate} className='mt-3' /> */}
        <Divider />
        {/* price */}
        <div className='mb-7 mt-5 flex items-center'>
          <span className='text-xl font-bold text-red-500'>
            {formatPrice(salePrice || price)}
          </span>
        </div>
        {/* category */}
        <div className='mb-7 mt-3'>
          <span className='text-lg font-bold text-typo-1'>Danh mục: </span>
          <Link href={`/categories/${category._id}`} passHref>
            <span className='text-base font-medium text-typo-3'>
              {category.name}
            </span>
          </Link>
        </div>
        {/* actions */}
        <div className='my-3 flex items-center'>
          <div
            className={productAmountBtnClass}
            onClick={handleDecrementProductAmount}
          >
            <MinusOutlined />
          </div>
          <div
            className={clsx(
              productAmountBtnClass,
              'select-none !bg-transparent',
            )}
          >
            {productAmount}
          </div>
          <div
            className={productAmountBtnClass}
            onClick={handleIncrementProductAmount}
          >
            <PlusOutlined />
          </div>
        </div>
        <div className='mt-8 flex items-center justify-start gap-x-5'>
          <Button type='primary' size='large'>
            Mua ngay
          </Button>
          <Button size='large'>Thêm vào giỏ hàng</Button>
        </div>
        <Divider />
        {/* description */}
        <div className='mt-3'>
          <span className='text-base font-medium text-typo-3'>
            {description}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
