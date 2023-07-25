'use client';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from 'next/link';
import Image from 'next/image';

import Banner from '@/components/common/Banner/Banner';

import ProductBanner from '/public/images/banner/product-banner.jpg';

import { projectItems } from '@/constants';
import { projectItem } from '@/Types/Type';
import MansonryLayout from '@/components/Layout/MansonryLayout';

type PropsType = {
  params: { project_slug: string };
};
export async function generateMetadata({ params }: PropsType) {}
export async function generateStaticParams() {
  return projectItems.map(project => ({
    project_slug: project.slug,
  }));
}
const Item = (project: projectItem, index: number) => {
  return (
    <Link
      key={index}
      className='hover:opacity-75! transition-opacity-300ms group relative h-auto   cursor-pointer opacity-100'
      href={`/projects/${project.slug}`}
    >
      <Image
        src={project.img}
        alt={project.title}
        width={500}
        height={500}
        className='h-full w-full object-cover'
      ></Image>
      <div className='bg-overlay transition-opacity-300ms z-10 flex h-full w-full items-center justify-center opacity-0 group-hover:opacity-100'>
        <p className='text-center text-xl font-bold text-white'>
          {project.title}
        </p>
      </div>
    </Link>
  );
};
function ProjectDetailPage({ params }: PropsType) {
  const { project_slug } = params;

  return (
    <>
      <Banner
        background={ProductBanner}
        title='Nhà phố Long Biên'
        height='large'
        overlay
        subTitle={[
          'Minimalist',
          `75 m<sub className='relative -top-2'>2</sub>`,
          '2 PN',
        ]}
      />
      <div className='bg-white pt-14'>
        <div className='mx-auto max-w-medium'>
          <Breadcrumbs className='bg-gray-200 p-3'>
            <Link href='/' className='text-lg text-black'>
              Trang chủ
            </Link>
            <Link href='/' className='text-black'>
              Dự án
            </Link>
            <Link href='/' className='text-black'>
              Tên dự án
            </Link>
          </Breadcrumbs>
          <h4 className='mt-24 text-center text-3xl font-normal uppercase tracking-[10px] text-[#0d0d0d]'>
            nhà hàng chay ngũ sắc
          </h4>
          <div className='mt-24 text-base font-light'>
            Nhà hàng chay Ngũ Sắc tại Tp Buôn Mê Thuật.
          </div>
          <div className='mt-5 text-base font-light'>
            Công trình là dấu ấn của thành phố núi cũng là nơi chủ nhà tâm huyết
            với triết lý kinh doanh của mình. Với một nhà hàng chay dành cho
            thực khách Việt Nam thì không gian thiết kế sao cho ấm cúng đầy chất
            cảm được chủ quán đặc biệt quan tâm đến. Cảm hứng đến từ không gian
            cảm xúc đến từ chất liệu.
          </div>
        </div>
        <div className='mx-auto mt-24 max-w-large'>
          <MansonryLayout
            itemArray={projectItems}
            itemRender={Item}
          ></MansonryLayout>
        </div>
        <div className='mx-auto mt-24 max-w-medium border border-white p-2'>
          ewqewqew
        </div>
      </div>
    </>
  );
}

export default ProjectDetailPage;
