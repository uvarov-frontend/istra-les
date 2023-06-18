'use client';

import { Listbox } from '@headlessui/react';
import { ChangeEvent, useEffect, useState } from 'react';

import Callback from '@/components/Callback';
import { getUnit, getPrice, getSale } from '@/helper';
import { IData, IDataItem, IProduct, ITranslate } from '@/types';

export default function Content({ data, contacts, info, product }: { data: IData[]; contacts: ITranslate; info: ITranslate; product: IProduct }) {
  const relevantDate = data[data.length - 1].id;
  const [countProduct, setCountProduct] = useState(1);
  const [sortID, setSortID] = useState(0);
  const [selectedValues, setSelectedValues] = useState<IDataItem>({});
  // const [price, setPrice] = useState(getPrice(selectProduct));
  // const [sale, setSale] = useState(getSale(selectProduct));

  const { currency, thing, title } = getUnit(Object.keys(data[sortID].data[0])[Object.keys(data[sortID].data[0]).length - 1]);
  const price = 0;
  const sale = false;
  const formatterRUB = new Intl.NumberFormat('ru-RU');

  const uniqueKeys = Array.from(new Set(data[sortID].data.flatMap((item) => Object.keys(item))));

  const handleSelectChange = (key: string, value: string) => {
    setSelectedValues((prevValues) => {
      const updatedValues = {
        ...prevValues,
        [key]: value,
      };

      const keys = Object.keys(updatedValues);
      const startIndex = keys.indexOf(key) + 1;
      // eslint-disable-next-line no-plusplus
      for (let i = startIndex; i < keys.length; i++) {
        updatedValues[keys[i]] = '';
      }

      return updatedValues;
    });
  };

  const getFilteredData = (index: number): IDataItem[] => {
    let filteredData = [...data[sortID].data];

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < index; i++) {
      const selectedValue = selectedValues[uniqueKeys[i]];
      if (selectedValue) {
        filteredData = filteredData.filter((item) => item[uniqueKeys[i]] === selectedValue);
      }
    }

    return filteredData;
  };

  // useEffect(() => {
  //   setParams(getParams(data, sortID).objParams);
  //   setSelectParams(getParams(data, sortID).selectParams);
  // }, [data, sortID]);

  // useEffect(() => {
  //   const tempSelectProduct = getSelectProduct(data, sortID, selectParams);

  //   if (tempSelectProduct) {
  //     setSelectProduct(tempSelectProduct);
  //     setPrice(getPrice(tempSelectProduct));
  //     setSale(getSale(tempSelectProduct));
  //   } else {
  //     setPrice(0);
  //     setSale(false);
  //   }
  // }, [data, sortID, selectParams]);

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
                  }}
                >
                  {sort.id.replace(/\[(.*)\]/g, '').trim()}
                </button>
              );
            })}
          </div>
        </div>
        <div className="grid xl:max-w-max w-full grid-cols-2 justify-start gap-x-2 gap-y-4">
          {uniqueKeys.map((key, index) => {
            if (index === uniqueKeys.length - 1) return null;

            const filteredData = getFilteredData(index);
            const values = Array.from(new Set(filteredData.map((item) => item[key])));
            const defaultValue = values[0];

            return (
              <div key={key}>
                <span className="mb-2 block text-sm text-gray_dark">{key}</span>
                <Listbox value={selectedValues[key] || defaultValue} onChange={(value) => handleSelectChange(key, value)}>
                  <div className="relative mt-1">
                    <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white py-2 px-5 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                      <span className="block truncate">{selectedValues[key] || defaultValue}</span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                          <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </Listbox.Button>
                    <Listbox.Options className="absolute z-10 mt-1 max-h-80 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {values.map((value: string, i: number) => (
                        <Listbox.Option
                          key={i}
                          // eslint-disable-next-line no-nested-ternary
                          className={({ active, selected }) => `relative cursor-pointer select-none py-2 px-5 text-slate-900 ${active && selected ? 'bg-[#5ec03b] text-white' : selected ? 'bg-[#5ec03b] text-white' : active ? 'bg-gray-100' : ''}`}
                          value={value}>{value}</Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </div>
                </Listbox>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex h-full w-full flex-col overflow-hidden rounded-r-lg bg-gray/30 px-7 py-6">
        <div className="mb-3 border-b border-gray pb-3">
          {price === 0 ? <span className="inline text-base font-medium border-b border-red">По заданным параметрам, товар не найден!</span>
          : <>
            <span className="mb-1 block text-sm text-gray_dark">{title}:</span>
            <b className={`block max-w-max rounded text-lg ${sale ? 'bg-yellow px-2' : ''}`}>
              {formatterRUB.format(price)} {currency}/{thing}
              {sale ? '*' : ''}
            </b>
          </> }
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
