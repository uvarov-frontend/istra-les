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
    <main className="container mx-auto my-5 min-h-[350px] lg:my-10">
      <BreadCrumbs title={page.attributes.title} />
      <section className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-14">
        <div className="content">
          <h1 className="mb-5 text-2xl font-bold lg:mb-10 lg:text-3xl">{page.attributes.title}</h1>
          {/* @ts-expect-error Server Component */}
          <MDXRemote source={page.attributes.content} />
        </div>
        <div className="grid grid-cols-2 content-center justify-items-center gap-3 lg:justify-items-start">
          <Image alt="about" className="rounded-xl" height={250} src={`${process.env.STRAPI_API_URL}${page.attributes.imgs.data[0].attributes.url}`} width={275} />
          <Image alt="about" className="rounded-xl" height={250} src={`${process.env.STRAPI_API_URL}${page.attributes.imgs.data[1].attributes.url}`} width={275} />
          <Image alt="about" className="col-span-2 rounded-xl" height={180} src={`${process.env.STRAPI_API_URL}${page.attributes.imgs.data[2].attributes.url}`} width={580} />
        </div>
      </section>
      <section className="mt-6">
        <h2 className="text-xl font-bold lg:text-2xl">{info.advantages}</h2>
        {/* @ts-expect-error Server Component */}
        <Advantages />
      </section>
    </main>
  );
}
