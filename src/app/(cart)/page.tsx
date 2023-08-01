'use client';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { HiOutlineXMark } from 'react-icons/hi2';
import { BsCartX } from 'react-icons/bs';

import Button from '@/components/common/Button/Button';
import { useCartContext } from '@/contexts/Cart/CartContextProvider';
import { formatPrice } from '@/utils/product';
function Cart() {
  const { cartState, updateQuantity, removeFromCart } = useCartContext();
  return (
    <>
      <div className='flex h-[300px] items-center justify-center bg-black text-white'>
        <h2 className='text-2xl font-bold uppercase'>
          Giỏ hàng của bạn - House Design
        </h2>
      </div>
      {cartState.items.length > 0 ? (
        <div className='section-Y mt-8'>
          <div className='mx-auto max-w-large'>
            <h3 className='block border-b border-black py-5 text-2xl font-bold uppercase'>
              Giỏ hàng
            </h3>
            <table className='cart_table w-full table-auto'>
              <thead>
                <tr>
                  <th colSpan={2} className='text-sm'>
                    Thông tin chi tiết sản phẩm
                  </th>
                  <th className='py-5 text-center text-sm'>Đơn giá</th>
                  <th className='py-5 text-center text-sm'>Số lượng</th>
                  <th className='py-5 text-center text-sm'>Tổng giá</th>
                  <th className='py-5 text-center text-sm'>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {cartState.items.length > 0 &&
                  cartState.items.map((item, index) => {
                    return (
                      <tr key={item.id}>
                        <td className='w-[240px]'>
                          <Link href={'/'} className='block'>
                            <Image
                              src={item.image}
                              alt=''
                              width={240}
                              height={240}
                            ></Image>
                          </Link>
                        </td>
                        <td className=''>
                          <div className='flex h-full flex-col px-3'>
                            <h3 className='mb-3 text-xl font-bold'>
                              {item.name}
                            </h3>
                            <p>{item.description}</p>
                          </div>
                        </td>
                        <td className='text-center'>
                          {formatPrice(item.price)}
                        </td>
                        <td>
                          <div className='flex justify-center text-center'>
                            <Button
                              type='button'
                              className='cursor-pointer border !border-r-0 border-black px-2 py-1 align-middle text-lg'
                              text=''
                              onClick={() => {
                                updateQuantity(item.quantity - 1, item.id);
                              }}
                            >
                              <AiOutlineMinus></AiOutlineMinus>
                            </Button>
                            <input
                              type='text'
                              value={item.quantity}
                              min={1}
                              max={100}
                              onChange={e => {
                                const value = parseInt(e.target.value);
                                if (!isNaN(value) && value >= 1) {
                                  updateQuantity(value, item.id);
                                }
                              }}
                              className='borderblack max-w-[40px] border border-black bg-white text-center outline-none'
                            />
                            <Button
                              type='button'
                              className='cursor-pointer border !border-l-0 border-black px-2 py-1 align-middle text-lg'
                              text=''
                              onClick={() => {
                                updateQuantity(item.quantity + 1, item.id);
                              }}
                            >
                              <AiOutlinePlus></AiOutlinePlus>
                            </Button>
                          </div>
                        </td>
                        <td className='text-right'>{formatPrice(item.pay)}</td>
                        <td className='text-center'>
                          <HiOutlineXMark
                            className='cursor-pointer text-2xl'
                            onClick={() => removeFromCart(item.id)}
                          ></HiOutlineXMark>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            <div className='mt-5 flex border-t border-black pt-5'>
              <div className='flex flex-1 flex-col pr-72'>
                <label htmlFor='ghichu'>Chú thích cho cửa hàng</label>
                <textarea
                  name='ghichu'
                  id='ghichu'
                  className='mt-3 h-full text-base'
                ></textarea>
              </div>
              <div className='flex flex-col gap-y-5'>
                <div className='flex items-center gap-x-3'>
                  <p className='text-base'>Tổng tiền</p>
                  <h4 className='text-xl'>{formatPrice(cartState.totalPay)}</h4>
                </div>
                <p className=' text-right text-base '>Vận chuyển</p>
                <div className='flex justify-end'>
                  <Button
                    type='button'
                    className='cursor-pointer bg-black px-3 py-2 text-base font-bold text-white'
                    text='Thanh toán'
                  ></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='section-y mt-8 flex flex-col items-center justify-center gap-y-10'>
          <h3 className='text-xl font-medium uppercase'>
            Giỏ hãng của bạn trống
          </h3>
          <BsCartX className='text-9xl'></BsCartX>
          <Link
            className='font-semibold tracking-widest text-black'
            href={'/products'}
          >
            Nhấp vào đây để tiếp tục mua sắm
          </Link>
        </div>
      )}
    </>
  );
}

export default Cart;
