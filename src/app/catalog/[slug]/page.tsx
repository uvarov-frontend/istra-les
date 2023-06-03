import { notFound } from 'next/navigation';

import BreadCrumbs from '@/components/BreadCrumbs';
import getProduct from '@/fetching/getProduct';
import translation from '@/translation.yaml';
import { ILink, IParams } from '@/types';

export async function generateMetadata({ params }: IParams) {
  const { contacts } = translation;
  const product = await getProduct(params.slug);
  if (!product) return notFound();

  return {
    description: product.attributes.description,
    title: `${product.attributes.title}  | ${contacts.title}`,
  };
}

export default async function Product({ params }: IParams) {
  const product = await getProduct(params.slug);
  if (!product) return notFound();

  const links: ILink[] = [
    {
      id: 0,
      title: 'Главная',
      href: '/',
    },
    {
      id: 1,
      title: product.attributes.title,
      href: false,
    },
  ];

  return (
    <main className="container mx-auto my-10 min-h-[350px]">
    <BreadCrumbs links={links} />
    <h1 className="text-3xl font-bold mb-8">{product.attributes.title}</h1>
  </main>
  );
}
