'use client';

import Image from 'next/image';
import { useState } from 'react';

import { IProduct } from '@/types';

export default function Slider({ info, url, product }: { info: { [key: string]: { [key: string]: string } }; url: string; product: IProduct }) {
  const [activeSlideID, setActiveSlideID] = useState(0);

  return (
    <div className="grid grid-rows-[auto_auto_1fr] gap-2 py-6 px-3 lg:pl-6 lg:pr-4">
      <div className="item-center flex h-[220px] w-full lg:w-[300px] overflow-hidden rounded-lg bg-lite">
        <Image alt={product.attributes.title} className="object-cover object-center w-full" height={220} src={`${url}${product.attributes.img.data[activeSlideID].attributes.url}`} width={300} />
      </div>
      <div className="grid grid-cols-3 gap-[9px] w-[300px]">
        {product.attributes.img.data?.map((img, index) => (
          <div
            key={img.id}
            className={`h-[69px] w-[94px] cursor-pointer overflow-hidden rounded-lg border bg-lite ${activeSlideID === index ? 'border-green' : 'border-transparent'}`}
          >
            <Image alt={product.attributes.title} height={73} src={`${url}${img.attributes.url}`} width={94} onClick={() => setActiveSlideID(index)} />
          </div>
        ))}
      </div>
      <div className="mt-4 hidden lg:flex flex-col justify-end py-2">
        <div className="relative flex items-center text-sm font-medium text-dark">
          <i className="icon-address mr-2 block h-4 w-4 bg-green" />
          {info.delivery.title}
        </div>
        <span className="mt-1 block pl-6 text-xs text-dark_gray">{info.delivery.text}</span>
      </div>
    </div>
  );
}
