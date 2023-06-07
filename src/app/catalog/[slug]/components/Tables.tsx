import Image from 'next/image';

import { IData } from '@/types';

export default function Tables({ data, info }: { data: IData[], info: {[key: string]: string} }) {

  return (
    <div className="my-10 pt-8 border-t border-gray/50">
      <h2 className="font-bold text-2xl mb-5">Евровагонка ель, сосна — цены</h2>
      <div className="flex mb-4 items-end">
        <span className="block text-sm text-dark_gray mr-4">Профиль:</span>
        <Image alt="title" className="inline-block align-middle" height={21} src="//istra-les.ru/img/profiles/evrovagonka.svg" width={100} />
      </div>
      <div className="my-7">
        <h3 className="text-lg font-bold mb-2">Экстра</h3>
        <div className="border border-gray/70 rounded-lg overflow-hidden">
          <table className="table-fixed bg-white w-full">
            <thead className=" bg-gray/30">
              <tr className="">
                <th className="py-2 px-2 font-medium text-sm text-center border-r border-gray/70 last:border-r-0">Длина, м</th>
                <th className="py-2 px-2 font-medium text-sm text-center border-r border-gray/70 last:border-r-0">Сечение, мм</th>
                <th className="py-2 px-2 font-medium text-sm text-center border-r border-gray/70 last:border-r-0">Кв.м. в упаковке</th>
                <th className="py-2 px-2 font-medium text-sm text-center border-r border-gray/70 last:border-r-0">Цена за упаковку, руб.</th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="group">
                <td className="py-2 px-2 font-normal text-sm text-center border-b border-r border-gray/70 group-last:border-b-0 last:border-r-0">2.5</td>
                <td className="py-2 px-2 font-normal text-sm text-center border-b border-r border-gray/70 group-last:border-b-0 last:border-r-0">12,5х96</td>
                <td className="py-2 px-2 font-normal text-sm text-center border-b border-r border-gray/70 group-last:border-b-0 last:border-r-0">2.4</td>
                <td className="py-2 px-2 font-normal text-sm text-center border-b border-r border-gray/70 group-last:border-b-0 last:border-r-0">1550</td>
              </tr>
              <tr className="group">
                <td className="py-2 px-2 font-normal text-sm text-center border-b border-r border-gray/70 group-last:border-b-0 last:border-r-0 bg-yellow border-r-yellow_dark">2.7</td>
                <td className="py-2 px-2 font-normal text-sm text-center border-b border-r border-gray/70 group-last:border-b-0 last:border-r-0 bg-yellow border-r-yellow_dark">12,5х96</td>
                <td className="py-2 px-2 font-normal text-sm text-center border-b border-r border-gray/70 group-last:border-b-0 last:border-r-0 bg-yellow border-r-yellow_dark">2.59</td>
                <td className="py-2 px-2 font-normal text-sm text-center border-b border-r border-gray/70 group-last:border-b-0 last:border-r-0 bg-yellow border-r-yellow_dark">1675</td>
              </tr>
              <tr className="group">
                <td className="py-2 px-2 font-normal text-sm text-center border-b border-r border-gray/70 group-last:border-b-0 last:border-r-0">3.0</td>
                <td className="py-2 px-2 font-normal text-sm text-center border-b border-r border-gray/70 group-last:border-b-0 last:border-r-0">12,5х96</td>
                <td className="py-2 px-2 font-normal text-sm text-center border-b border-r border-gray/70 group-last:border-b-0 last:border-r-0">2.88</td>
                <td className="py-2 px-2 font-normal text-sm text-center border-b border-r border-gray/70 group-last:border-b-0 last:border-r-0">1975</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-2 ml-2 flex items-center">
          <div className="w-4 h-4 bg-yellow rounded" />
          <span className="block text-xs text-dark_gray before:content-['—'] before:mx-2">{info.sale}</span>
        </div>
      </div>
    </div>
  );
}
