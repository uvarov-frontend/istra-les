'use client';

import { ChangeEvent, useEffect, useState } from 'react';

import { getUnit } from '@/helper';
import { IData, IProduct } from '@/types';

import Select from './Select';

export default function Content({ data, contacts, info, product }: { data: IData[], contacts: {[key: string]: string}, info: {[key: string]: string}, product: IProduct }) {
  const [countProduct, setCountProduct] = useState(1);
  const [sortID, setSortID] = useState(0);
  const [optionsID, setOptionsID] = useState(0);
  const [selectProduct, setSelectProduct] = useState<{ [key: string]: string }>(data[sortID].data[optionsID]);
  const relevantDate = data[data.length - 1].id;
  const price = Number(Object.values(selectProduct)[Object.values(selectProduct).length - 1]);
  const { currency, thing, title } = getUnit(Object.keys(data[sortID].data[0])[Object.keys(data[sortID].data[0]).length - 1]);
  const formatterRUB = new Intl.NumberFormat('ru-RU');

  useEffect(() => {
    setSelectProduct(data[sortID].data[optionsID]);
  }, [data, sortID, optionsID]);

  const handlerDis = () => {
    if (countProduct <= 1) return;
    setCountProduct(countProduct - 1);
  };

  const handlerInc = () => {
    setCountProduct(countProduct + 1);
  };

  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    if ((e.target.value.length >= 1 && (!e.target.value.match(/^-?\d+$/))) || e.target.value.length === 5) return;
    if (e.target.value.length === 0 || e.target.value === '0') {
      setCountProduct(1);
    } else {
      setCountProduct(Number(e.target.value));
    }
  };

  return (
    <div className="grid grid-cols-[350px_auto] items-start h-full">
      <div className="py-6 px-4">
        <h1 className="text-3xl font-bold mb-5 -ml-[2px]">
          {product.attributes.title}
          {product.attributes.type ? <span className="block w-max mt-[6px] ml-[2px] text-dark_gray text-sm font-normal border-b border-dark_gray border-dashed">{product.attributes.type}</span> : ''}
        </h1>
        <div className="mb-3">
          <span className="block text-sm text-dark_gray mb-2">{data[0].id.replace(/\[(.*)\]+.*/g, (_, g1) => g1)}</span>
          <div className="block">
            {data.map((sort, index) => {
              if (index === (data.length - 1)) return null;
              return (
                <button key={index} className={`inline-block align-bottom mr-2 mb-2 tab ${sortID === index ? 'bg-green border-green text-white' : '' }`}
                  type="button"
                  onClick={() => {
                    setSortID(index);
                    setOptionsID(0);
                  }}>{sort.id.replace(/\[(.*)\]/g, '').trimStart()}</button>
              );
            })}
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
      <div className="bg-gray/30 rounded-r-lg h-full py-6 px-7 overflow-hidden flex flex-col">
        <div className="pb-3 mb-3 border-b border-gray">
          <span className="block text-sm text-dark_gray mb-2">{title}:</span>
          <b className="block text-lg">{formatterRUB.format(price)} {currency}/{thing}</b>
        </div>
        <div className="mb-4">
          <span className="block text-sm mb-2">{info.ordering}:</span>
          <b className="block">{contacts.mainPhone}</b>
        </div>
        <div className="grow flex flex-col justify-end">
          <span className="block text-sm text-dark_gray mb-3">{info.count} ({thing}):</span>
          <div className="flex items-center h-9 w-full bg-white rounded-lg mb-4">
            <button className="w-10 h-full bg-green font-medium text-lg text-white rounded-l-lg hover:bg-green_hover" type="button" onClick={handlerDis}>-</button>
            <input className="h-full flex grow overflow-hidden justify-center text-center outline-none" type="text" value={countProduct} onChange={handlerChange} />
            <button className="w-10 h-full bg-green font-medium text-lg text-white rounded-r-lg hover:bg-green_hover" type="button" onClick={handlerInc}>+</button>
          </div>
          <div className="grid grid-cols-[auto_1fr] gap-3 items-center mb-3">
            <span className="block text-sm text-dark_gray whitespace-nowrap">{info.total}:</span>
            <b className="block text-lg whitespace-nowrap">{formatterRUB.format(price * countProduct)} {currency}</b>
          </div>
          <span className="block text-xs mb-3 text-green_hover">{info.relevance} {relevantDate.replace(/^\[(.+)\]$/, (_, g1) => g1)}</span>
          <span className="block text-xs text-dark_gray mb-1">{info.difference}</span>
          <span className="block text-xs text-dark_gray">{info.save}</span>
        </div>
      </div>
    </div>
  );
}
