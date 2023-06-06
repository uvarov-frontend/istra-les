import { notFound } from 'next/navigation';

import { ICategory } from '@/types';

export default async function getCategory(id: number) {
  try {
    const res = await fetch(`${process.env.STRAPI_API_URL}/api/categories?pagination[pageSize]=100&populate=products&filters[id][$eq]=${id}`, {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      next: {
        revalidate: 10,
      },
    });

    const data: { data: ICategory[] } = await res.json();
    if (!data.data) throw new Error('Data is empty, check request URL.');
    return data.data[0];
  } catch (err) {
  // eslint-disable-next-line no-console
    console.error(err);
    return notFound();
  }
}
