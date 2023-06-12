import Image from 'next/image';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';

import BreadCrumbs from '@/components/BreadCrumbs';
import getPage from '@/fetching/getPage';
import translation from '@/translation.yaml';

import Advantages from '../components/Advantages';

export async function generateMetadata() {
  const { contacts } = translation;
  const page = await getPage('about');
  if (!page) return notFound();

  return {
    description: page.attributes.description,
    title: `${page.attributes.title}  | ${contacts.title}`,
  };
}

export default async function About() {
  const { info } = translation;
  const page = await getPage('about');
  if (!page) return notFound();

  return (
    <main className="container mx-auto my-5 lg:my-10 min-h-[350px]">
      <BreadCrumbs title={page.attributes.title} />
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-14">
        <div className="content">
          <h1 className="mb-5 lg:mb-10 text-2xl lg:text-3xl font-bold">{page.attributes.title}</h1>
          {/* @ts-expect-error Server Component */}
          <MDXRemote source={page.attributes.content} />
        </div>
        <div className="grid grid-cols-2 gap-3 justify-items-center lg:justify-items-start content-center">
          <Image alt="about" className="rounded-xl" height={250} src={`${process.env.STRAPI_API_URL}${page.attributes.imgs.data[0].attributes.url}`} width={275} />
          <Image alt="about" className="rounded-xl" height={250} src={`${process.env.STRAPI_API_URL}${page.attributes.imgs.data[1].attributes.url}`} width={275} />
          <Image alt="about" className="col-span-2 rounded-xl" height={180} src={`${process.env.STRAPI_API_URL}${page.attributes.imgs.data[2].attributes.url}`} width={580} />
        </div>
      </section>
      <section className="mt-6">
        <h2 className="text-xl lg:text-2xl font-bold">{info.advantages}</h2>
        {/* @ts-expect-error Server Component */}
        <Advantages />
      </section>
    </main>
  );
}
