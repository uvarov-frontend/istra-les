'use client';

import { useEffect, useState } from 'react';

import { IData, IProduct } from '@/types';

import Select from './Select';

export default function Content({ data, product }: { data: IData[], product: IProduct }) {
  const [sortID, setSortID] = useState(0);
  const [optionsID, setOptionsID] = useState(0);
  const [selectProduct, setSelectProduct] = useState<{ [key: string]: string }>(data[sortID].data[optionsID]);

  useEffect(() => {
    setSelectProduct(data[sortID].data[optionsID]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortID, optionsID]);

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold mb-6">{product.attributes.title}</h1>
        <div className="mb-3">
          <span className="block text-sm text-dark_gray mb-2">Сорт</span>
          <div className="block">
            {data.map((title, id) => (
              <button key={id} className={`inline-block align-bottom mr-2 mb-2 tab ${sortID === id ? 'bg-green border-green text-white' : '' }`}
                type="button"
                onClick={() => {
                  setSortID(id);
                  setOptionsID(0);
                }}>{title.id}</button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-[auto_auto] gap-x-2 gap-y-4 justify-start">
          {Object.keys(data[sortID].data[0]).map((option, id) => {
            if (id === (Object.keys(data[sortID].data[0]).length - 1)) return null;
            const options: string[] = [];
            data[sortID].data.forEach((row) => {
              if(!options.includes(row[option])) options.push(row[option]);
            });

            return (
              <div key={id}>
                <span className="block text-sm text-dark_gray mb-2">{option}</span>
                <div className="block">
                  <Select key={sortID} name={option} options={options} optionsID={optionsID} setOptionsID={setOptionsID} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full">
        <h2>Цена: {Object.values(selectProduct)[Object.values(selectProduct).length - 1]}</h2>
      </div>
    </>
  );
}
