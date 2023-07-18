import Image from 'next/image';

import { footerInfo } from '@/constants';

function Footer() {
  return (
    <footer className='mx-auto grid grid-cols-3 bg-white p-10'>
      {footerInfo.map((item, index) => {
        return (
          <div className='flex h-full flex-col gap-y-4' key={index}>
            {item.type === 'text' ? (
              <>
                <h3 className='text-center'>{item.title}</h3>
                {item.type === 'text' && (
                  <div className='flex flex-1 flex-col justify-around gap-y-4'>
                    {item.info.map((info, index) => {
                      if ('icon' in info) {
                        const { icon, text } = info as {
                          icon: string;
                          text: string;
                        };
                        return (
                          <div
                            key={index}
                            className='flex w-full items-center gap-x-5 text-left'
                          >
                            <Image
                              src={icon}
                              alt=''
                              width={23}
                              height={30}
                              className='h-[25px]'
                            />
                            <p className='text-sm text-lightBLack'>{text}</p>
                          </div>
                        );
                      }
                    })}
                  </div>
                )}
              </>
            ) : (
              <>
                <Image
                  src='https://housedesign.vn/wp-content/uploads/2020/04/232Model.png'
                  alt={item.title}
                  width={320}
                  height={175}
                  className='mx-auto h-auto w-2/4'
                ></Image>
              </>
            )}
          </div>
        );
      })}
    </footer>
  );
}

export default Footer;
