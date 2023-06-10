import Image from 'next/image';

import { IData, IProduct, ITranslate } from '@/types';

export default function Tables({ data, info, product, url }: { data: IData[], info: ITranslate, product: IProduct, url: string }) {
  return (
    <div>
      <h2 className="font-bold text-2xl mb-5">{product.attributes.title} { product.attributes.type ? <span className="lowercase text-dark_gray font-medium">{product.attributes.type}</span> : <></> } — цены</h2>
      {product.attributes.profile.data?.attributes?.url ?
        <div className="flex mb-4 items-end">
          <span className="block text-sm text-dark_gray mr-4">{info.profile}:</span>
          <Image alt={product.attributes.title}
            className="inline-block align-middle"
            height={24}
            src={`${url}${product.attributes.profile.data.attributes.url}`}
            width={110} />
        </div>
      : <></>}
      {data.map((sort, index) => {
        if (index === (data.length - 1)) return null;
        const name = sort.id.replace(/\[.*\]/g, '').trim();
        const isSale = Object.values(sort.data).find((_, i) => Object.values(sort.data[i]).find((value) => value.includes('*')));

        return (
          <div className="my-7">
            <h3 className="text-lg font-bold mb-2">{name}</h3>
            <div className="border border-gray/70 rounded-lg overflow-hidden">
              <table className="table-fixed bg-white w-full">
                <thead className=" bg-gray/30">
                  <tr>
                    {Object.keys(sort.data[0]).map((title, i) => {
                      const correctTitle = title.replace(/\(.*\)/g, '').replace(/\[.*\]/g, '').trim();
                      return (
                        <th key={i}
                          className="py-2 px-2 font-medium text-sm text-center border-r border-gray/70 last:border-r-0">{correctTitle}</th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {sort.data.map((_, i) => {
                    const price = Object.values(sort.data[i])[Object.values(sort.data[i]).length - 1];
                    return (
                    <tr key={i} className="group">
                      {Object.values(sort.data[i]).map((value, l) => (
                        <td key={l}
                          className={`py-2 px-2 font-normal text-sm text-center border-b border-r border-gray/70 group-last:border-b-0 last:border-r-0 ${price.includes('*') ? 'bg-yellow border-r-yellow_dark'
                          : ''}`}>{value.replace(/\*/, '')}</td>
                        ))}
                    </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            {isSale ?
              <div className="mt-2 ml-2 flex items-center">
                <div className="w-4 h-4 bg-yellow rounded" />
                <span className="block text-xs text-dark_gray before:content-['—'] before:mx-2">{info.sale}</span>
              </div>
            : null}
          </div>
          );
        })}
    </div>
  );
}
