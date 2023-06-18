import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';

import BreadCrumbs from '@/components/BreadCrumbs';
import getAllProducts from '@/fetching/getAllProducts';
import getData from '@/fetching/getData';
import getProduct from '@/fetching/getProduct';
import translation from '@/translation.yaml';
import { IData, IParams } from '@/types';

import Calculator from './components/Calculator';
import Sidebar from './components/Sidebar';
import Slider from './components/Slider';
import Tables from './components/Tables';

export async function generateStaticParams() {
  const products = await getAllProducts();

  return products.map((product) => ({
    slug: product.attributes.slug,
  }));
}

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
    <main className="container mx-auto my-5 min-h-[340px] lg:my-10">
      <BreadCrumbs title={product.attributes.title} />
      <div className={`grid ${product.attributes.img.data?.[0] ? 'grid-cols-1 lg:grid-cols-[325px_1fr]' : 'grid-cols-1'} mt-8 rounded-lg border border-lite bg-white_dark`}>
        {product.attributes.img.data?.[0] ? <Slider info={info} product={product} url={process.env.STRAPI_API_URL as string} /> : <></>}
        <Calculator contacts={contacts} data={data} info={info} product={product} />
      </div>
      <div className="mb-4 mt-7 grid grid-cols-1 items-start gap-9 border-t border-gray/50 pt-4 lg:my-10 lg:grid-cols-[auto_300px] lg:pt-8">
        <div className="overflow-hidden">
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
