import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import parse from 'html-react-parser';
type Props = {
  background: string | StaticImageData;
  title: string;
  height: 'small' | 'medium' | 'large';
  subTitle?: string | string[];
  overlay?: boolean;
};

const heightLookup: Record<string, string> = {
  small: 'calc(50vh - 80px)',
  medium: 'calc(70vh - 80px)',
  large: 'calc(100vh - 80px)',
};

const Banner = (props: Props) => {
  const {
    height = 'large',
    overlay,
    background,
    title = 'title',
    subTitle,
  } = props;
  return (
    <div
      className=' relative grid w-full place-items-center'
      style={{
        height: heightLookup[height],
      }}
    >
      {/* background */}
      <div
        className={
          'absolute inset-0 left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2'
        }
      >
        <Image src={background} alt={title} layout='fill' />
        {overlay && <div className='absolute inset-0 bg-black opacity-40' />}
      </div>
      {/* title */}
      <div
        className={clsx(
          'relative flex flex-col items-center justify-center',
          overlay && 'text-white',
        )}
      >
        <h1 className='text-4xl font-bold'>{title}</h1>
        {subTitle && // Check if subTitle exists and is truthy
          (Array.isArray(subTitle) ? (
            <div className='mt-2'>
              {subTitle.map((item, index) => {
                return (
                  <span key={index} className='slashAfter text-base'>
                    {parse(item)}
                  </span>
                );
              })}
            </div>
          ) : (
            <div>{subTitle}</div>
          ))}
      </div>
    </div>
  );
};

export default Banner;
