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

export const getPrice = (selectProduct: { [key: string]: string }) => Number(Object.values(selectProduct)[Object.values(selectProduct).length - 1].replace(/\*/g, ''));

export const getSale = (selectProduct: { [key: string]: string }) => !!Object.values(selectProduct)[Object.values(selectProduct).length - 1].includes('*');
