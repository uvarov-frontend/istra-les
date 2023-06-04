import Image from 'next/image';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';

import getAdvantages from '@/fetching/getAdvantages';

export default async function Advantages() {
  const advantages = await getAdvantages();
  if (!advantages) return notFound();

  return (
    <section className="py-8">
      <h2 className="sr-only">Преимущества</h2>
      <ul className="grid grid-flow-col gap-8">
        {advantages?.map((advantage) => (
          <li key={advantage.id} className="relative bg-white rounded-2xl shadow-sm py-6 px-5 pl-[100px] hover:shadow-md transition-all
            before:absolute before:left-5 before:top-1/2 before:-translate-y-1/2 before:w-[60px] before:h-[60px] before:rounded-full before:bg-green before:opacity-30">
            <Image
              alt={advantage.attributes.icon.data.attributes.name}
              className="block absolute top-1/2 left-[38px] w-6 h-6 -translate-y-1/2"
              height={24}
              src={`${process.env.STRAPI_API_URL}${advantage.attributes.icon.data.attributes.url}`}
              width={24} />
            <b className="block font-medium mb-1">{advantage.attributes.title}</b>
            <span className="block text-dark_gray text-sm">
              {/* @ts-expect-error Server Component */}
              <MDXRemote source={advantage.attributes.content} />
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
