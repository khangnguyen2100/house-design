'use client';
import Link from 'next/link';
import Image from 'next/image';
import Masonry from '@mui/lab/Masonry';

import Banner from '@/components/common/Banner/Banner';

import ProductBanner from '/public/images/banner/product-banner.jpg';

import { projectItems, projectsLinks } from '@/constants';
import Breadcrumbs from '@/components/common/Breadcrumbs/Breadcrumbs';


function Projects() {
  return (
    <>
      <Breadcrumbs></Breadcrumbs>
      <div className='mb-8 flex w-full flex-col items-center'>
        <Banner
          background={ProductBanner}
          title='Các dự án'
          height='large'
          overlay
        />
      </div>
      <div className='sectionY text-center'>
        <div className='mx-auto mb-8 flex max-w-medium flex-wrap items-center justify-center  gap-x-10 gap-y-5'>
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
          <Masonry spacing={3} columns={3}>
            {projectItems.map((project, index) => {
              return (
                <Link
                  key={index}
                  className='hover:opacity-75! transition-opacity-300ms group relative h-auto w-2/6  cursor-pointer opacity-100'
                  href={`/projects/${project.id}`}
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
            })}
          </Masonry>
        </div>
      </div>
    </>
  );
}

export default Projects;
