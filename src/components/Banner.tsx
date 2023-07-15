import Image from 'next/image';

import BannerIMG from '/public/Banner.jpg';
function Banner() {
  return (
    <section className='banner relative overflow-hidden bg-white'>
      <div className='overlay absolute inset-0 w-full rounded-lg bg-gradient-to-t from-[rgba(0,0,0,0.1)] to-[rgba(0,0,0,0.1)] before:h-full'></div>
      <div className='h-full w-full'>
        <Image
          src={BannerIMG}
          alt=''
          className='h-full w-full object-cover'
        ></Image>
      </div>
      <div className='absolute bottom-28 left-40  text-white'>
        <h2 className='mb-4 text-6xl'>Housedesign</h2>
        <p className='mb-4 text-5xl'>Thiết kế thi công nội thất hiện đại</p>
        <button className='cursor-pointer border border-white bg-[#454545] px-6 py-3 text-base text-white transition duration-300 ease-in-out hover:bg-white hover:text-black'>
          Liên hệ
        </button>
      </div>
    </section>
  );
}

export default Banner;
