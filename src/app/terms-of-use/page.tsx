import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';

import BreadCrumbs from '@/components/BreadCrumbs';
import getPage from '@/fetching/getPage';
import translation from '@/translation.yaml';

export async function generateMetadata() {
  const { contacts } = translation;
  const page = await getPage('terms-of-use');
  if (!page) return notFound();

  return {
    description: page.attributes.description,
    title: `${page.attributes.title}  | ${contacts.title}`,
  };
}

export default async function termsOfUse() {
  const page = await getPage('terms-of-use');
  if (!page) return notFound();

  return (
    <main className="container mx-auto my-5 lg:my-10 min-h-[350px]">
      <BreadCrumbs title={page.attributes.title} />
      <h1 className="mb-5 lg:mb-10 text-2xl lg:text-3xl font-bold">{page.attributes.title}</h1>
      <div className="content">
        {/* @ts-expect-error Server Component */}
        <MDXRemote source={page.attributes.content} />
      </div>
    </main>
  );
}
