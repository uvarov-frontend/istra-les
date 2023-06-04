import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import BreadCrumbs from '@/components/BreadCrumbs';
import getProduct from '@/fetching/getProduct';
import translation from '@/translation.yaml';
import { IParams } from '@/types';

import Table from './components/Table';

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

  return (
    <main className="container mx-auto my-10 min-h-[350px] grid grid-cols-[1fr_260px] gap-9 items-start">
      <div className="h-[800px]">
        <BreadCrumbs title={product.attributes.title} />
        <h1 className="text-3xl font-bold mb-8">{product.attributes.title}</h1>
        <div className="shadow-sm rounded-xl py-5 px-6 h-80 mb-5">
          <div className="flex item-center w-56 h-full rounded-xl bg-white overflow-hidden border border-lite">
            <Image alt={product.attributes.title}
              height={224}
              src={`${process.env.STRAPI_API_URL}${product.attributes.img.data.attributes.url}`}
              width={224} />
          </div>
        </div>
        {/* @ts-expect-error Server Component */}
        <Table tableID={product.attributes.tableID} />
      </div>
      <div className="sticky top-32 grid grid-flow-row gap-5 items-start">
        <div>
          <b className="block text-xl mb-4">Вагонка</b>
          <ul>
            <li>
              <Link className="block py-3 px-4 w-full hover:bg-lite border-l-2 border-green text-green" href="/">Евровагонка</Link>
            </li>
            <li>
              <Link className="block py-3 px-4 w-full hover:bg-lite border-l-2 border-transparent hover:border-x-dark_gray" href="/">Вагонка штиль</Link>
            </li>
            <li>
              <Link className="block py-3 px-4 w-full hover:bg-lite border-l-2 border-transparent hover:border-x-dark_gray" href="/">Вагонка для бани</Link>
            </li>
          </ul>
        </div>
        <div className="border border-green rounded-xl py-5 px-6">
          <p className="text-sm mb-3">Для крупных заказов мы предоставляем персональную скидку, для заказа звоните:</p>
          <b>+7 (985) 991-66-06</b>
        </div>
      </div>
  </main>
  );
}
