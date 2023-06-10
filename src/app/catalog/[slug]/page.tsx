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

  const data = (await getData(product.attributes.tableID)) as unknown as IData[];

  return (
    <main className="container mx-auto my-10 min-h-[340px]">
      <BreadCrumbs title={product.attributes.title} />
      <div className={`grid ${product.attributes.img.data?.[0] ? 'grid-cols-[350px_1fr]' : 'grid-cols-[1fr]'} mt-8 rounded-lg border border-lite bg-white_dark`}>
        {product.attributes.img.data?.[0] ? <Slider info={info} product={product} url={process.env.STRAPI_API_URL as string} /> : <></>}
        <Content contacts={contacts} data={data} info={info} product={product} />
      </div>
      <div className="my-10 grid grid-cols-[auto_300px] items-start gap-9 border-t border-gray/50 pt-8">
        <div className="">
          <Tables data={data} info={info} product={product} url={process.env.STRAPI_API_URL as string} />
          {product.attributes.content ? (
            <div className="content mt-10">
              <h2 className="mb-5 text-2xl font-bold">{info.description}</h2>
              {/* @ts-expect-error Server Component */}
              <MDXRemote source={product.attributes.content} />
            </div>
          ) : (
            <></>
          )}
        </div>
        {/* @ts-expect-error Server Component */}
        <Sidebar contacts={contacts} info={info} product={product} />
      </div>
    </main>
  );
}
