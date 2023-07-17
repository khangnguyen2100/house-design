import Image from 'next/image';

import { footerInfo } from '@/constants';

function Footer() {
  return (
    <footer className='mx-auto flex max-w-medium'>
      {footerInfo.map((item, index) => {
        return (
          <div className='flex h-full flex-col' key={index}>
            {item.type === 'text' ? (
              <>
                <h3 className='text-center'>{item.title}</h3>
                {item.type === 'text' && (
                  <div className='flex flex-col items-center justify-around'>
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
                              width={28}
                              height={35}
                              className=''
                            />
                            <p>{text}</p>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                )}
              </>
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </footer>
  );
}

export default Footer;
