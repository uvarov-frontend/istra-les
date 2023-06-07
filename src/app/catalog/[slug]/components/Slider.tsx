'use client';

import Image from 'next/image';
import { useState } from 'react';

import { IProduct } from '@/types';

export default function Slider({ info, url, product }: { info: {[key: string]: {[key: string]: string}}, url: string, product: IProduct }) {
  const [activeSlideID, setActiveSlideID] = useState(0);

  return (
    <div className="grid grid-rows-[auto_auto_1fr] gap-2 pl-6 pr-4 py-6">
      <div className="flex item-center w-[300px] h-[220px] rounded-lg bg-lite overflow-hidden">
        <Image alt={product.attributes.title}
          height={220}
          src={`${url}${product.attributes.img.data[activeSlideID].attributes.url}`}
          width={300} />
      </div>
      <div className="grid grid-cols-3 gap-[9px]">
        {product.attributes.img.data?.map((img, index) => (
          <div key={img.id}
            className={`cursor-pointer w-[94px] h-[70px] rounded-lg bg-lite overflow-hidden border ${activeSlideID === index ? 'border-green' : 'border-transparent'}`}>
            <Image alt={product.attributes.title}
              height={73}
              src={`${url}${img.attributes.url}`}
              width={94}
              onClick={() => setActiveSlideID(index)}/>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-end mt-4 px-1 py-2">
        <div className="relative text-sm font-medium text-dark flex items-center">
          <i className="block w-4 h-4 mr-2 icon-address bg-green" />
          {info.delivery.title}
        </div>
        <span className="block mt-1 text-xs text-dark_gray pl-6">{info.delivery.text}</span>
      </div>
    </div>
  );
}
