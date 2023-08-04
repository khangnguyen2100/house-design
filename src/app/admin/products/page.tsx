import Image from 'next/image';
import Link from 'next/link';

import { ProductProps } from '@/Types/Type';
import AddProductModal from '@/components/admin/Product/AddProductModal';
import ProductMenu from '@/components/admin/Product/ProductMenu';
import { formatPrice } from '@/utils/product';
import { getProducts } from '@/services/productServices';
import { getCategories } from '@/services/categoryServices';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

const Page = async () => {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);
  return (
    <div className='relative min-h-screen bg-gray-100'>
      <div className='flex justify-between p-4'>
        <h2>Sản phẩm</h2>
        <h2>Welcome Back, Clint</h2>
      </div>
      <div className='p-4'>
        <div className='m-auto w-full overflow-y-auto rounded-lg border bg-white p-4'>
          <div className='my-3 grid grid-cols-3 items-center justify-between p-2 sm:grid-cols-4 md:grid-cols-6'>
            <span className='col-span-2'>Tên</span>
            <span className='col-span-1'>Danh mục</span>
            <span className='col-span-1'>Giá</span>
            <span className='col-span-1'>Ảnh</span>
            <span className='col-span-1'>Số lượng</span>
          </div>
          <ul>
            {products.map((product: ProductProps, index: number) => {
              return (
                <li
                  key={index}
                  className='relative my-3 grid grid-cols-3 items-center justify-between rounded-lg bg-gray-50 p-2 hover:bg-gray-100 sm:grid-cols-4 md:grid-cols-6'
                >
                  <div className='col-span-2 flex items-center'>
                    <p className='font-semibold text-primary'>{product.name}</p>
                  </div>
                  <Link
                    href={`/admin/categories/${product.category._id}`}
                    className='col-span-1'
                  >
                    <p className=' text-gray-600 hover:text-purple-600'>
                      {product.category.name}
                    </p>
                  </Link>
                  <p className='col-span-1 flex flex-col'>
                    <span className='text-gray-400 line-through'>
                      {formatPrice(product.price)}
                    </span>
                    <span className='text-lg font-semibold text-purple-800'>
                      {formatPrice(product.salePrice)}
                    </span>
                  </p>
                  <div className='col-span-1'>
                    <Image
                      src={product.thumbnail}
                      alt={product.name}
                      width={70}
                      height={70}
                    />
                  </div>
                  <div className='col-span-1'>
                    <p className='text-bold text-lg'>{product.remainingItem}</p>
                  </div>
                  <ProductMenu
                    categories={categories}
                    productId={product._id}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <AddProductModal categories={categories} />
    </div>
  );
};

export default Page;
