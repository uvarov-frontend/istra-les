import { notFound } from 'next/navigation';

import { IPromo } from '@/types';

export default async function getPopulars() {
  try {
    const res = await fetch(`${process.env.STRAPI_API_URL}/api/promos?pagination[pageSize]=100&populate=img&sort[0]=sortID`, {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      next: {
        revalidate: 10,
      },
    });

    const data: { data: IPromo[] } = await res.json();
    if (!data.data) throw new Error('Data is empty, check request URL.');
    return data.data;
  } catch (err) {
  // eslint-disable-next-line no-console
    console.error(err);
    return notFound();
  }
}
