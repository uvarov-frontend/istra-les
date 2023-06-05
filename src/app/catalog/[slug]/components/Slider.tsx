import Image from 'next/image';

import { IProduct } from '@/types';

export default function Slider({ product }: { product: IProduct }) {
  return (
    <div className="grid gap-2">
      <div className="flex item-center w-[300px] h-[220px] rounded-lg bg-lite overflow-hidden">
        <Image alt={product.attributes.title}
          height={220}
          src={`${process.env.STRAPI_API_URL}${product.attributes.img.data[0].attributes.url}`}
          width={300} />
      </div>
      <div className="grid grid-flow-col gap-[9px]">
        <div className="cursor-pointer w-[94px] h-[73px] rounded-lg bg-lite overflow-hidden border border-green">
          <Image alt={product.attributes.title}
            height={73}
            src={`${process.env.STRAPI_API_URL}${product.attributes.img.data[0].attributes.url}`}
            width={94} />
        </div>
        <div className="cursor-pointer w-[94px] h-[73px] rounded-lg bg-lite overflow-hidden border border-transparent">
          <Image alt={product.attributes.title}
            height={73}
            src={`${process.env.STRAPI_API_URL}${product.attributes.img.data[1].attributes.url}`}
            width={94} />
        </div>
        <div className="cursor-pointer w-[94px] h-[73px] rounded-lg bg-lite overflow-hidden border border-transparent">
          <Image alt={product.attributes.title}
            height={73}
            src={`${process.env.STRAPI_API_URL}${product.attributes.img.data[2].attributes.url}`}
            width={94} />
        </div>
      </div>
    </div>
  );
}
