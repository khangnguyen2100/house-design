'use client';
import Link from 'next/link';
import { Masonry } from 'react-masonry/dist';
import Image from 'next/image';

import Banner from '@/components/common/Banner/Banner';

import ProductBanner from '/public/images/banner/product-banner.jpg';

import { projectsItems, projectsLinks } from '@/constants';
function Projects() {
  return (
    <>
      <div className='mb-8 flex min-h-screen w-full flex-col items-center '>
        <Banner
          background={ProductBanner}
          title='Các dự án'
          height='large'
          overlay
        />
      </div>
      <div className='mx-auto mb-8 flex max-w-large flex-wrap items-center justify-center gap-x-10 gap-y-5 text-center xld:max-w-medium'>
        {projectsLinks.map((projectLink, i) => {
          return (
            <Link
              href={projectLink.link}
              key={i}
              className='underlineLink text-sm text-[#0d0d0d] '
            >
              {projectLink.title}
            </Link>
          );
        })}
      </div>
      <div className='mx-auto max-w-large'>
        <Masonry>
          {projectsItems.map((project, index) => {
            return (
              <Link
                key={index}
                className='hover:opacity-75! group h-auto w-2/6 cursor-pointer p-2 opacity-100 transition-opacity duration-300 ease-in-out'
                href={`/projects/${project.id}`}
              >
                <Image
                  src={project.img}
                  alt={project.title}
                  width={500}
                  height={500}
                  className='h-full w-full object-cover'
                ></Image>
                <div className='absolute inset-0 z-10 flex h-full w-full items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100'>
                  <p className='text-center text-xl font-bold text-white'>
                    {project.title}
                  </p>
                </div>
              </Link>
            );
          })}
        </Masonry>
      </div>
    </>
  );
}

export default Projects;
