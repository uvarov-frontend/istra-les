'use client';

import { ChangeEvent, useEffect, useState } from 'react';

import Callback from '@/components/Callback';
import { getUnit } from '@/helper';
import { IData, IProduct, ITranslate } from '@/types';

import Select from './Select';

export default function Content({ data, contacts, info, product }: { data: IData[]; contacts: ITranslate; info: ITranslate; product: IProduct }) {
  const [sale, setSale] = useState(false);
  const [countProduct, setCountProduct] = useState(1);
  const [sortID, setSortID] = useState(0);
  const [optionsID, setOptionsID] = useState(0);
  const [selectProduct, setSelectProduct] = useState<{ [key: string]: string }>(data[0].data[0]);

  const relevantDate = data[data.length - 1].id;
  const price = Number(Object.values(selectProduct)[Object.values(selectProduct).length - 1].replace(/\*/g, ''));
  const { currency, thing, title } = getUnit(Object.keys(data[sortID].data[optionsID])[Object.keys(data[sortID].data[optionsID]).length - 1]);
  const formatterRUB = new Intl.NumberFormat('ru-RU');

  useEffect(() => {
    setSelectProduct(data[sortID].data[optionsID]);
  }, [data, sortID, optionsID]);

  useEffect(() => {
    if (Object.values(selectProduct)[Object.values(selectProduct).length - 1].includes('*')) {
      setSale(true);
    } else {
      setSale(false);
    }
  }, [selectProduct]);

  const handlerDis = () => {
    if (countProduct <= 1) return;
    setCountProduct(countProduct - 1);
  };

  const handlerInc = () => {
    setCountProduct(countProduct + 1);
  };

  const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    if ((e.target.value.length >= 1 && !e.target.value.match(/^-?\d+$/)) || e.target.value.length === 5) return;
    if (e.target.value.length === 0 || e.target.value === '0') {
      setCountProduct(1);
    } else {
      setCountProduct(Number(e.target.value));
    }
  };

  return (
    <div className="grid h-full grid-cols-1 items-start justify-items-start lg:grid-cols-[1fr_340px]">
      <div className="w-full px-6 py-6">
        <h1 className="-ml-[2px] mb-6 text-3xl font-bold">
          {product.attributes.title}
          {product.attributes.type ? (
            <span className="ml-[2px] mt-[6px] block w-max border-b border-dashed border-gray_dark text-sm font-normal text-gray_dark">{product.attributes.type}</span>
          ) : (
            ''
          )}
        </h1>
        <div className="mb-6">
          <span className="mb-2 block text-sm text-gray_dark">{data[0].id.replace(/\[(.*)\]+.*/g, (_, g1) => g1)}</span>
          <div className="block">
            {data.map((sort, index) => {
              if (index === data.length - 1) return null;
              return (
                <button
                  key={index}
                  className={`tab mb-2 mr-2 inline-block align-bottom ${sortID === index ? 'border-green bg-green text-white' : ''}`}
                  type="button"
                  onClick={() => {
                    setSortID(index);
                    setOptionsID(0);
                  }}
                >
                  {sort.id.replace(/\[(.*)\]/g, '').trim()}
                </button>
              );
            })}
          </div>
        </div>
        <div className="grid xl:max-w-max w-full grid-cols-2 justify-start gap-x-2 gap-y-4">
          {Object.keys(data[sortID].data[0]).map((option, id) => {
            if (id === Object.keys(data[sortID].data[0]).length - 1) return null;
            const options: string[] = [];
            data[sortID].data.forEach((row) => {
              if (!options.includes(row[option])) options.push(row[option]);
            });
            return (
              <div key={id}>
                <span className="mb-2 block text-sm text-gray_dark">{option}</span>
                <div className="block">
                  <Select key={sortID} name={option} options={options} optionsID={optionsID} setOptionsID={setOptionsID} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex h-full w-full flex-col overflow-hidden rounded-r-lg bg-gray/30 px-7 py-6">
        <div className="mb-3 border-b border-gray pb-3">
          <span className="mb-1 block text-sm text-gray_dark">{title}:</span>
          <b className={`block max-w-max rounded text-lg ${sale ? 'bg-yellow px-2' : ''}`}>
            {formatterRUB.format(price)} {currency}/{thing}
            {sale ? '*' : ''}
          </b>
        </div>
        <div className="mb-3">
          <span className="mb-2 block text-sm">{info.ordering}:</span>
          <div>
            <b className="block text-lg font-bold">{contacts.mainPhone}</b>
            <span className="mr-1 text-sm">{info.or}</span>
            <Callback callback={info.callback} className="text-sm lowercase text-green hover:text-green_hover" />
          </div>
        </div>
        <span className="mb-3 block text-sm text-gray_dark">
          {info.count} ({thing}):
        </span>
        <div className="mb-4 flex h-9 w-full max-w-[285px] items-center rounded-lg bg-white">
          <button className="h-full w-10 rounded-l-lg bg-green text-lg font-medium text-white hover:bg-green_hover" type="button" onClick={handlerDis}>
            -
          </button>
          <input
            className="flex h-full w-[calc(100%_-_80px)] grow justify-center overflow-hidden text-center outline-none"
            type="text"
            value={countProduct}
            onChange={handlerChange}
          />
          <button className="h-full w-10 rounded-r-lg bg-green text-lg font-medium text-white hover:bg-green_hover" type="button" onClick={handlerInc}>
            +
          </button>
        </div>
        <div className="mb-3 grid grid-cols-[auto_1fr] items-center gap-2">
          <span className="block whitespace-nowrap text-sm text-gray_dark">{info.total}:</span>
          <b className={`block max-w-max whitespace-nowrap rounded text-xl ${sale ? 'bg-yellow px-2' : ''}`}>
            {formatterRUB.format(price * countProduct)} {currency}
            {sale ? '*' : ''}
          </b>
        </div>
        <div className="flex grow flex-col justify-end">
          <span className="mb-3 block text-xs font-medium text-green_hover">
            {info.relevance} {relevantDate.replace(/^\[(.+)\]$/, (_, g1) => g1)}
          </span>
          <span className="mb-1 block text-xs text-gray_dark">{info.difference}</span>
          <span className="block text-xs text-gray_dark">{info.save}</span>
          {sale ? <span className="mt-1 block text-xs text-gray_dark">{info.sale}</span> : <></>}
        </div>
      </div>
    </div>
  );
}
