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
          <li
            key={advantage.id}
            className="relative rounded-2xl bg-white px-5 py-6 pl-[100px] shadow-sm transition-all before:absolute
            before:left-5 before:top-1/2 before:h-[60px] before:w-[60px] before:-translate-y-1/2 before:rounded-full before:bg-green before:opacity-30 hover:shadow-md"
          >
            <Image
              alt={advantage.attributes.icon.data.attributes.name}
              className="absolute left-[38px] top-1/2 block h-6 w-6 -translate-y-1/2"
              height={24}
              src={`${process.env.STRAPI_API_URL}${advantage.attributes.icon.data.attributes.url}`}
              width={24}
            />
            <b className="mb-1 block font-medium">{advantage.attributes.title}</b>
            <span className="block text-sm text-dark_gray">
              {/* @ts-expect-error Server Component */}
              <MDXRemote source={advantage.attributes.content} />
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
