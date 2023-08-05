'use client';
import Image from 'next/image';
import Link from 'next/link';

import { projectItem } from '@/Types/Type';

const Item = (project: projectItem, index: number) => {

  return (
    <Link
      key={index}
      className='hover:opacity-75! transition-opacity-300ms group relative block cursor-pointer opacity-100'
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
export default Item;
