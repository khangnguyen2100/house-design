import { AiOutlineHeart } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';
import { enqueueSnackbar } from 'notistack';
import { useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { Button, Divider } from '@mui/material';

import { ProductProps } from '@/Types/Type';
import { useCartContext } from '@/contexts/Cart/CartContextProvider';
import { formatPrice } from '@/utils/product';

const ProductItem = (props: ProductProps) => {
  const { addToCart } = useCartContext();
  const [loading, setLoading] = useState(false);
  const { _id, name, price, salePrice, thumbnail } = props;
  const handleAddToCart = () => {
    setLoading(true);
    addToCart(props);
    enqueueSnackbar('Thêm vào giỏ hàng thành công', { variant: 'success' });
    setLoading(false);
  };
  return (
    <div className='group flex w-full flex-col items-center rounded-md border border-transparent p-4 hover:border-gray-600 hover:shadow-lg'>
      <div className='h-[200px] w-full'>
        <Image src={thumbnail} alt={name} width={296} height={200} />
      </div>
      <div className='flex w-full flex-col'>
        {/* info */}
        <div className='flex min-h-[50px] items-start justify-between'>
          <Link href={`/products/${_id}`}>
            <h3 className='text-base text-purple-600'>{name}</h3>
          </Link>
          <div>
            <AiOutlineHeart style={{ fontSize: '22px' }} />
          </div>
        </div>
        <Divider />
        {/* price */}
        <div className='mb-2 flex w-full items-center justify-between'>
          <p className='text-lg font-bold text-red-600'>
            {formatPrice(salePrice)}
          </p>
          <p className='text-base text-typo-5 line-through'>
            {formatPrice(price)}
          </p>
        </div>
        <div className='invisible mt-3 flex items-center justify-between opacity-0 transition-all group-hover:visible group-hover:opacity-100'>
          <LoadingButton
            loading={loading}
            color='primary'
            size='small'
            variant='contained'
            onClick={handleAddToCart}
          >
            Thêm vào giỏ hàng
          </LoadingButton>
          <Button variant='outlined' className='text-gray-500' size='small'>
            <Link href={`/products/${_id}`}>Xem ngay</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
