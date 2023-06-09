/* eslint-disable sort-keys */
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

export const onSubmitCallback = async (body: {[key: string]: string}) => {
  try {
    const res = await fetch('api/callback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const { error } = await res.json();

    if (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      return;
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};
