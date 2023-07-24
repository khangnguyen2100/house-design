import Image, { StaticImageData } from 'next/image';

import BannerIMG from '/public/Banner.jpg';
type Props = {
  background: string | StaticImageData;
  title: string;
  subTitle: string;
  height?: 'small' | 'medium' | 'large';
  overlay?: boolean;
  buttonText: string;
};
const heightLookup: Record<string, string> = {
  small: 'calc(50vh - 80px)',
  medium: 'calc(70vh - 80px)',
  large: 'calc(100vh - 80px)',
};

function BannerWithButton(props: Props) {
  const {
    background,
    title,
    height = 'large',
    overlay = true,
    subTitle,
    buttonText,
  } = props;
  return (
    <section
      className='relative overflow-hidden bg-white'
      style={{ height: heightLookup[height] }}
    >
      {overlay && <div className='bg-overlay'></div>}
      <div className='h-full w-full'>
        <Image
          src={background}
          alt=''
          className='h-full w-full object-cover'
          layout='fill'
        ></Image>
      </div>
      <div className='absolute bottom-28 left-40  text-white'>
        <h2 className='mb-4 text-5xl'>{title}</h2>
        <p className='mb-4 text-4xl'>{subTitle}</p>
        <button className='cursor-pointer border border-white bg-[#454545] px-6 py-3 text-base text-white transition duration-300 ease-in-out hover:bg-white hover:text-black'>
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default BannerWithButton;
