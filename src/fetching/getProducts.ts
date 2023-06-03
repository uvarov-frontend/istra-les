import { notFound } from 'next/navigation';

import { IProduct } from '@/types';

export default async function getProducts(category: string) {
  try {
    const res = await fetch(`${process.env.STRAPI_API_URL}/api/products?pagination[pageSize]=100&populate=sorts&filters['category'][slug][$eq]=${category}&sort[0]=sortID`, {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      next: {
        revalidate: 10,
      },
    });

    const data: { data: IProduct[] } = await res.json();
    if (!data.data) throw new Error('Data is empty, check request URL.');
    return data.data;
  } catch (err) {
  // eslint-disable-next-line no-console
    console.error(err);
    return notFound();
  }
}
