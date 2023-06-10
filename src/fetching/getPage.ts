import { notFound } from 'next/navigation';

import { IPage } from '@/types';

export default async function getPage(slug: string) {
  try {
    const res = await fetch(`${process.env.STRAPI_API_URL}/api/pages?pagination[pageSize]=100&populate=imgs&filters[slug][$eq]=${slug}`, {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      next: {
        revalidate: 120,
      },
    });

    const data: { data: IPage[] } = await res.json();
    if (!data.data) throw new Error('Data is empty, check request URL.');
    return data.data[0];
  } catch (err) {
  // eslint-disable-next-line no-console
    console.error(err);
    return notFound();
  }
}
