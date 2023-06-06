import { notFound } from 'next/navigation';

import BreadCrumbs from '@/components/BreadCrumbs';
import getData from '@/fetching/getData';
import getProduct from '@/fetching/getProduct';
import translation from '@/translation.yaml';
import { IData, IParams } from '@/types';

import Content from './components/Content';
import Sidebar from './components/Sidebar';
import Slider from './components/Slider';
// import Table from './components/Table';

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

  const data = await getData(product.attributes.tableID) as unknown as IData[];

  return (
    <main className="container mx-auto my-10 min-h-[350px] grid grid-cols-[1fr_210px] gap-9 items-start">
      <div className="h-[800px]">
        <BreadCrumbs title={product.attributes.title} />
        <div className="grid grid-cols-[300px_1fr_1fr] gap-7 items-start mt-8">
          <Slider product={product} url={process.env.STRAPI_API_URL as string} />
          <Content data={data} product={product} />
        </div>
        {/* <Table data={data} /> */}
      </div>
      <Sidebar />
  </main>
  );
}
