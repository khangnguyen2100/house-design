import { CategoryProps } from '@/Types/Type';
import { getCategories } from '@/services/categoryServices';

const Page = async () => {
  const categories = await getCategories();

  return (
    <div className='min-h-screen bg-gray-100'>
      <div className='flex justify-between p-4'>
        <h2>Danh mục</h2>
        <h2>Welcome Back, Clint</h2>
      </div>
      <div className='p-4'>
        <div className='m-auto w-full overflow-y-auto rounded-lg border bg-white p-4'>
          <div className='my-3 grid cursor-pointer grid-cols-2 items-center justify-between p-2'>
            <span>Tên</span>
            <span>Tổng sản phẩm</span>
          </div>
          <ul>
            {categories.map((product: CategoryProps, index: number) => {
              return (
                <li
                  key={index}
                  className='my-3 grid cursor-pointer grid-cols-2 items-center justify-between rounded-lg bg-gray-50 p-2 hover:bg-gray-100'
                >
                  <div className='flex items-center'>
                    <p className='font-semibold text-primary'>{product.name}</p>
                  </div>
                  <div className='flex items-center'>
                    <p className='text-lg font-medium'>
                      {product.totalProducts}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
