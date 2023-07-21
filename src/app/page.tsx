'use client';
import { Button, Col, Row } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

import Logo from '/public/Logo.png';
import ServiceIMG from '/public/service.jpg';

import Layout from '@/components/Layout/Layout';
import ProductItem from '@/components/Products/ProductItem';
import { productsMock } from '@/constants';
import Banner from '@/components/Banner';

export default function Home() {
  return (
    <Layout>
      <Banner></Banner>
      <section className='sectionY'>
        <div className='mx-auto grid max-w-large grid-cols-12 items-center  justify-center gap-x-4 xld:max-w-medium'>
          <div className='fetured__img col-span-4'>
            <Image src={Logo} alt='' className='max-w-[80%]' />
          </div>
          <p className='col-span-8 text-justify text-xl leading-relaxed tracking-[0.5px] xld:text-base'>
            Housedesign là một đơn vị chuyên thiết kế thi công nội thất hiện đại
            thanh lịch. Dẫn đầu trong việc Mix&match các phong cách nội thất,
            chúng tôi sáng tạo ra các không gian sống đậm chất riêng của gia
            chủ. Thiết kế của Housedesign là sự kết hợp của những nền tảng chắc
            chắn về kiến trúc và thiết kế, vừa mang thẩm mỹ hiện đại, vừa đơn
            giản thanh lịch nhưng vẫn sang trọng tinh tế. Để đảm bảo chất lượng,
            công ty cung cấp dịch vụ thi công nội thất trọn gói ch ỉnh chu trong
            từng chi tiết, biến ý tưởng sáng tạo nhất thành hiện thực.
          </p>
        </div>
      </section>
      <section className='sectionY'>
        <div className='mx-auto grid max-w-large grid-cols-12 gap-x-8  xld:max-w-medium'>
          <div className='fetured__img col-span-5'>
            <Image
              src={ServiceIMG}
              alt=''
              className='h-full max-h-[250px] w-full object-cover'
            />
          </div>
          <div className='col-span-7 flex flex-col gap-y-5'>
            <h3 className='text-2xl font-bold opacity-80'>
              Thiết kế kiến trúc
            </h3>
            <p className='text-justify text-lg leading-relaxed tracking-[0.5px] xld:text-base'>
              Để đem đến một công trình hoàn chỉnh nhất, mỗi nhân viên của House
              Design luôn tỉ mỉ chú trọng đến từng chi tiết nhỏ nhất. Bên cạnh
              đó, đảm bảo tiến độ làm việc, hoàn thành nhanh chóng và đúng hạn
              với mức chi phí hợp lý. Chính những yếu tố này, đã làm nên một
              thương hiệu House Design uy tín và được sự tín nhiệm của nhiều thế
              hệ khách hàng.
            </p>
          </div>
        </div>
      </section>
      <section className='sectionY'>
        <div className='mx-auto max-w-large'>
          <h3 className='pb-8 text-center text-3xl font-semibold'>
            Dự án của Housedesign
          </h3>
          <div className='grid grid-cols-3 gap-5 pb-8'>
            <div className='group relative'>
              <Link href='/a'>
                <div className='absolute inset-0 flex h-full w-full items-center justify-center bg-[rgba(0,0,0,.21)] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100'>
                  <p className='text-center text-base font-bold text-white'>
                    Thiết kế Villa Quận 12
                  </p>
                </div>
                <Image
                  src='/house.jpg'
                  alt=''
                  width={300}
                  height={300}
                  className='w-full'
                ></Image>
              </Link>
            </div>
            <div className='group relative'>
              <Link href='/a'>
                <div className='absolute inset-0 flex h-full w-full items-center justify-center bg-[rgba(0,0,0,.21)] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100'>
                  <p className='text-center text-base font-bold text-white'>
                    Thiết kế Villa Quận 12
                  </p>
                </div>
                <Image
                  src='/house.jpg'
                  alt=''
                  width={300}
                  height={300}
                  className='w-full'
                ></Image>
              </Link>
            </div>
            <div className='group relative'>
              <Link href='/a'>
                <div className='absolute inset-0 flex h-full w-full items-center justify-center bg-[rgba(0,0,0,.21)] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100'>
                  <p className='text-center text-base font-bold text-white'>
                    Thiết kế Villa Quận 12
                  </p>
                </div>
                <Image
                  src='/house.jpg'
                  alt=''
                  width={300}
                  height={300}
                  className='w-full'
                ></Image>
              </Link>
            </div>
            <div className='group relative'>
              <Link href='/a'>
                <div className='absolute inset-0 flex h-full w-full items-center justify-center bg-[rgba(0,0,0,.21)] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100'>
                  <p className='text-center text-base font-bold text-white'>
                    Thiết kế Villa Quận 12
                  </p>
                </div>
                <Image
                  src='/house.jpg'
                  alt=''
                  width={300}
                  height={300}
                  className='w-full'
                ></Image>
              </Link>
            </div>
            <div className='group relative'>
              <Link href='/a'>
                <div className='absolute inset-0 flex h-full w-full items-center justify-center bg-[rgba(0,0,0,.21)] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100'>
                  <p className='text-center text-base font-bold text-white'>
                    Thiết kế Villa Quận 12
                  </p>
                </div>
                <Image
                  src='/house.jpg'
                  alt=''
                  width={300}
                  height={300}
                  className='w-full'
                ></Image>
              </Link>
            </div>
            <div className='group relative'>
              <Link href='/a'>
                <div className='absolute inset-0 flex h-full w-full items-center justify-center bg-[rgba(0,0,0,.21)] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100'>
                  <p className='text-center text-base font-bold text-white'>
                    Thiết kế Villa Quận 12
                  </p>
                </div>
                <Image
                  src='/house.jpg'
                  alt=''
                  width={300}
                  height={300}
                  className='w-full'
                ></Image>
              </Link>
            </div>
            <div className='group relative'>
              <Link href='/a'>
                <div className='absolute inset-0 flex h-full w-full items-center justify-center bg-[rgba(0,0,0,.21)] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100'>
                  <p className='text-center text-base font-bold text-white'>
                    Thiết kế Villa Quận 12
                  </p>
                </div>
                <Image
                  src='/house.jpg'
                  alt=''
                  width={300}
                  height={300}
                  className='w-full'
                ></Image>
              </Link>
            </div>
            <div className='group relative'>
              <Link href='/a'>
                <div className='absolute inset-0 flex h-full w-full items-center justify-center bg-[rgba(0,0,0,.21)] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100'>
                  <p className='text-center text-base font-bold text-white'>
                    Thiết kế Villa Quận 12
                  </p>
                </div>
                <Image
                  src='/house.jpg'
                  alt=''
                  width={300}
                  height={300}
                  className='w-full'
                ></Image>
              </Link>
            </div>
            <div className='group relative'>
              <Link href='/a'>
                <div className='absolute inset-0 flex h-full w-full items-center justify-center bg-[rgba(0,0,0,.21)] opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100'>
                  <p className='text-center text-base font-bold text-white'>
                    Thiết kế Villa Quận 12
                  </p>
                </div>
                <Image
                  src='/house.jpg'
                  alt=''
                  width={300}
                  height={300}
                  className='w-full'
                ></Image>
              </Link>
            </div>
          </div>
          <div className='flex justify-center gap-x-10'>
            <button className='bg-black px-2 py-3 text-sm text-white'>
              <Link href={'/'}>Xem thêm toàn bộ dự án</Link>
            </button>
            <button className='bg-black px-2 py-3 text-sm font-medium text-white'>
              <Link href={'/'}>Xem các dự án thi công thực tế</Link>
            </button>
          </div>
        </div>
      </section>
      <section className='sectionY'>
        <h3 className='pb-8 text-center text-3xl font-semibold'>
          Lý do nên chọn Housedesign
        </h3>
        <div className='mx-auto max-w-medium'>
          <Image
            alt=''
            src='/Reason.png'
            width={700}
            height={220}
            className='h-full w-full object-cover'
          ></Image>
        </div>
      </section>
      <section className='sectionY'>
        <div className='mx-auto max-w-large xld:max-w-medium'>
          <h3 className='pb-8 text-center text-3xl font-semibold'>
            Khách hàng và Housedesign
          </h3>
          <div className='flex flex-col items-center px-10 text-center'>
            <p className='text-lg leading-relaxed tracking-[0.5px]'>
              {
                '"" Làm việc chuyên nghiệp, tư vấn tận tâm, chất lượng. Đặc biệt cảm ơn Mr Tùng, Mr Hậu và Ms Loan đã nhiệt tình tư vấn. "" '
              }
            </p>
            <Image
              alt=''
              src={'/vu-nguyen-thuy-dung.jpg'}
              width={100}
              height={100}
              className='mb-10 mt-6 rounded-full'
            ></Image>
          </div>
        </div>
      </section>
      <section className='sectionY'>
        <div className='mx-auto max-w-large xld:max-w-medium'>
          <Row className='mt-5'>
            {productsMock.slice(0, 8).map((product, i) => (
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
          <div className='text-center'>
            <Button type='primary' size='large' href='/products'>
              Xem thêm
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
