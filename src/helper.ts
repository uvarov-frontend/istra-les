export const getUnit = (str: string) => {
  let currency = '';
  let thing = '';

  str.replace(/(?<=\().+?(?=\))/g, (math) => {
    currency = math;
    return math;
  });
  str.replace(/(?<=\[).+?(?=\])/g, (math) => {
    thing = math;
    return math;
  });

  return { currency, thing };
};
