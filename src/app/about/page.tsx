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
  const page = await getPage('about');
  if (!page) return notFound();

  return (
    <main className="container mx-auto my-10 min-h-[350px]">
      <BreadCrumbs title={page.attributes.title} />
      <section className="grid grid-cols-2 gap-14">
        <div className="content">
          <h1 className="text-3xl font-bold mb-8">{page.attributes.title}</h1>
          {/* @ts-expect-error Server Component */}
          <MDXRemote source={page.attributes.content} />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Image alt="about"
            className="rounded-xl"
            height={250}
            src={`${process.env.STRAPI_API_URL}${page.attributes.imgs.data[0].attributes.url}`}
            width={275} />
          <Image alt="about"
            className="rounded-xl"
            height={250}
            src={`${process.env.STRAPI_API_URL}${page.attributes.imgs.data[1].attributes.url}`}
            width={275} />
          <Image alt="about"
            className="rounded-xl col-span-2"
            height={180}
            src={`${process.env.STRAPI_API_URL}${page.attributes.imgs.data[2].attributes.url}`}
            width={580} />
        </div>
      </section>
      <section className="mt-6">
        <h2 className="text-2xl font-bold">Наши преимущества</h2>
        {/* @ts-expect-error Server Component */}
        <Advantages />
      </section>
    </main>
  );
}
