import Image from 'next/image';

import { IData, IProduct, ITranslate } from '@/types';

export default function Tables({ data, info, product, url }: { data: IData[]; info: ITranslate; product: IProduct; url: string }) {
  return (
    <div>
      <h2 className="mb-5 text-2xl font-bold">
        {product.attributes.title} {product.attributes.type ? <span className="font-medium lowercase text-dark_gray">{product.attributes.type}</span> : <></>} — цены
      </h2>
      {product.attributes.profile.data?.attributes?.url ? (
        <div className="mb-4 flex items-end">
          <span className="mr-4 block text-sm text-dark_gray">{info.profile}:</span>
          <Image alt={product.attributes.title} className="inline-block align-middle" height={24} src={`${url}${product.attributes.profile.data.attributes.url}`} width={110} />
        </div>
      ) : (
        <></>
      )}
      {data.map((sort, index) => {
        if (index === data.length - 1) return null;
        const name = sort.id.replace(/\[.*\]/g, '').trim();
        const isSale = Object.values(sort.data).find((_, i) => Object.values(sort.data[i]).find((value) => value.includes('*')));

        return (
          <div className="my-7">
            <h3 className="mb-2 text-lg font-bold">{name}</h3>
            <div className="overflow-hidden rounded-lg border border-gray/70">
              <table className="w-full table-fixed bg-white">
                <thead className=" bg-gray/30">
                  <tr>
                    {Object.keys(sort.data[0]).map((title, i) => {
                      const correctTitle = title
                        .replace(/\(.*\)/g, '')
                        .replace(/\[.*\]/g, '')
                        .trim();
                      return (
                        <th key={i} className="border-r border-gray/70 px-2 py-2 text-center text-sm font-medium last:border-r-0">
                          {correctTitle}
                        </th>
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
                          <td
                            key={l}
                            className={`border-b border-r border-gray/70 px-2 py-2 text-center text-sm font-normal last:border-r-0 group-last:border-b-0 ${
                              price.includes('*') ? 'border-r-yellow_dark bg-yellow' : ''
                            }`}
                          >
                            {value.replace(/\*/, '')}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            {isSale ? (
              <div className="ml-2 mt-2 flex items-center">
                <div className="h-4 w-4 rounded bg-yellow" />
                <span className="block text-xs text-dark_gray before:mx-2 before:content-['—']">{info.sale}</span>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
