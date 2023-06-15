import { IData } from './types';

export const getUnit = (str: string) => {
  let title = '';
  let currency = '';
  let thing = '';

  str.replace(/^(.*),.+/g, (_, g1) => {
    title = g1;
    return _;
  });
  str.replace(/(?:\()(.+?)(?=\))/g, (_, g1) => {
    currency = g1;
    return _;
  });
  str.replace(/(?:\[)(.+?)(?=\])/g, (_, g1) => {
    thing = g1;
    return _;
  });

  return { currency, thing, title };
};

export const getParams = (data: IData[], sortID: number) => {
  const objParams: {[key: string] : string[]} = {};
  const selectParams: {[key: number] : string} = {};
  Object.keys(data[sortID].data[0]).forEach((_, i) => {
    if (i === (Object.keys(data[sortID].data[0]).length - 1)) return;
    let arrParam: string[] = [];

    data[sortID].data.forEach((p) => {
      if (arrParam.includes(Object.values(p)[i])) return;
      arrParam = [...arrParam, Object.values(p)[i]];
    });

    objParams[i] = arrParam;
    // eslint-disable-next-line prefer-destructuring
    selectParams[i] = arrParam[0];
  });

  return {
    objParams,
    selectParams,
  };
};

export const getSelectProduct = (data: IData[], sortID: number, selectParams: {[key: number] : string}) => data[sortID].data.filter((row) => JSON.stringify(Object.values(row).filter((_, i) => i !== Object.values(row).length - 1)) === JSON.stringify(Object.values(selectParams)))[0];

export const getPrice = (selectProduct: { [key: string]: string }) => Number(Object.values(selectProduct)[Object.values(selectProduct).length - 1].replace(/\*/g, ''));

export const getSale = (selectProduct: { [key: string]: string }) => !!Object.values(selectProduct)[Object.values(selectProduct).length - 1].includes('*');
