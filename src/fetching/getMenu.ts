import { notFound } from 'next/navigation';

import { IMenu } from '@/types';

export default async function getMenu(mainMenu: boolean) {
  try {
    const res = await fetch(`${process.env.STRAPI_API_URL}/api/menus?pagination[pageSize]=100&filters[mainMenu][$eq]=${mainMenu}`, {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      next: {
        revalidate: 120,
      },
    });

    const data: { data: IMenu[] } = await res.json();
    if (!data.data) throw new Error('Data is empty, check request URL.');
    return data.data;
  } catch (err) {
  // eslint-disable-next-line no-console
    console.error(err);
    return notFound();
  }
}
