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
    <main className="container mx-auto my-10 min-h-[350px]">
      <BreadCrumbs title="Доставка и оплата" />
      <h1 className="text-3xl font-bold mb-8">{page.attributes.title}</h1>
      <div className="grid grid-cols-2 gap-7">
        <div className="grid grid-cols-2 gap-7">
          <Image alt="shipping" className="rounded-xl" height={283} src="/img/shipping-payment/shipping.jpg" width={283} />
          <div className="content">
            {/* @ts-expect-error Server Component */}
            <MDXRemote source={page.attributes.content} />
            <button className="flex items-center text-green hover:text-green_hover group" type="button">
              Узнать стоимость
              <i className="block min-w-[1.25rem] min-h-[1.25rem] w-5 h-5 ml-2 icon-arrowhead bg-green group-hover:text-green_hover" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-7">
          <Image alt="shipping" className="rounded-xl" height={283} src="/img/shipping-payment/payment.jpg" width={283} />
          <div className="content">
            {/* @ts-expect-error Server Component */}
            <MDXRemote source={page.attributes.contentAdditional} />
          </div>
        </div>
      </div>
    </main>
  );
}
