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
