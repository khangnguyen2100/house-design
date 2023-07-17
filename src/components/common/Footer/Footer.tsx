import Image from 'next/image';

import { footerInfo } from '@/constants';

function Footer() {
  return (
    <div className='flex items-center justify-between'>
      {footerInfo.map((item, index) => {
        return (
          <div
            className='flex flex-col items-center justify-center'
            key={index}
          >
            <h4>{item.title}</h4>
            {item.type === 'text' && item.info.map((info,index)=>{
              
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Footer;
