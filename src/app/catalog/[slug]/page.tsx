import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';

import BreadCrumbs from '@/components/BreadCrumbs';
import getData from '@/fetching/getData';
import getProduct from '@/fetching/getProduct';
import translation from '@/translation.yaml';
import { IData, IParams } from '@/types';

import Content from './components/Content';
import Sidebar from './components/Sidebar';
import Slider from './components/Slider';
import Tables from './components/Tables';

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
  const { contacts, info } = translation;
  const product = await getProduct(params.slug);
  if (!product) return notFound();

  const data = await getData(product.attributes.tableID) as unknown as IData[];

  return (
    <main className="container mx-auto my-10 min-h-[350px] grid grid-cols-[auto_210px] gap-9 items-start">
      <div className="overflow-hidden">
        <BreadCrumbs title={product.attributes.title} />
        <div className="grid grid-cols-[332px_1fr] items-start mt-8 bg-white_dark border border-lite rounded-lg">
          <Slider info={info} product={product} url={process.env.STRAPI_API_URL as string} />
          <Content contacts={contacts} data={data} info={info} product={product} />
        </div>
        <Tables data={data} info={info} />
        {product.attributes.content ?
          <div className="content mt-6">
            <h2 className="font-bold text-2xl mb-5">{info.description}</h2>
            {/* @ts-expect-error Server Component */}
            <MDXRemote source={product.attributes.content} />
          </div>
        : <></>}
      </div>
      {/* @ts-expect-error Server Component */}
      <Sidebar contacts={contacts} info={info} product={product} />
  </main>
  );
}
