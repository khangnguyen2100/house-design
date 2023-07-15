'use client';
import Link from 'next/link';
import { Button, Empty } from 'antd';
import React from 'react';

const NotFound = () => {
  return (
    <Empty
      description={
        <h1 className='text-2xl font-semibold'>Không tìm thấy sản phẩm</h1>
      }
    >
      <Button type='primary'>
        <Link href='/products'>Quay về trang chính</Link>
      </Button>
    </Empty>
  );
};

export default NotFound;
