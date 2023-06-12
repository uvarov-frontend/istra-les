import Image from 'next/image';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';

import BreadCrumbs from '@/components/BreadCrumbs';
import getPage from '@/fetching/getPage';
import translation from '@/translation.yaml';

export async function generateMetadata() {
  const { contacts } = translation;
  const page = await getPage('shipping-payment');
  if (!page) return notFound();

  return {
    description: page.attributes.description,
    title: `${page.attributes.title}  | ${contacts.title}`,
  };
}

export default async function ShippingPayment() {
  const page = await getPage('shipping-payment');
  if (!page) return notFound();

  return (
    <main className="container mx-auto my-5 min-h-[350px] lg:my-10">
      <BreadCrumbs title="Доставка и оплата" />
      <h1 className="mb-5 text-2xl font-bold lg:mb-10 lg:text-3xl">{page.attributes.title}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-7">
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
          <Image
            alt="shipping"
            className="hidden rounded-xl lg:block"
            height={283}
            src={`${process.env.STRAPI_API_URL}${page.attributes.imgs.data[0].attributes.url}`}
            width={283}
          />
          <div className="content">
            {/* @ts-expect-error Server Component */}
            <MDXRemote source={page.attributes.content} />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
          <Image
            alt="shipping"
            className="hidden rounded-xl lg:block"
            height={283}
            src={`${process.env.STRAPI_API_URL}${page.attributes.imgs.data[1].attributes.url}`}
            width={283}
          />
          <div className="content">
            {/* @ts-expect-error Server Component */}
            <MDXRemote source={page.attributes.contentAdditional} />
          </div>
        </div>
      </div>
    </main>
  );
}
