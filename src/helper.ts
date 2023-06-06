export const getUnit = (str: string) => {
  let title = '';
  let currency = '';
  let thing = '';

  str.replace(/^(.*),.+/g, (_, g1) => {
    title = g1;
    return _;
  });
  str.replace(/(?<=\().+?(?=\))/g, (math) => {
    currency = math;
    return math;
  });
  str.replace(/(?<=\[).+?(?=\])/g, (math) => {
    thing = math;
    return math;
  });

  return {  currency, thing, title };
};
