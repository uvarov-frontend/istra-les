import { notFound } from 'next/navigation';

import getCategories from '@/fetching/getCategories';

import CatalogList from './CatalogList';

export default async function Catalog() {
  const categories = await getCategories();
  if (!categories) return notFound();

  return <CatalogList categories={categories} />;
}
