import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';

import getPopulars from '@/fetching/getPopulars';

export default async function Popular() {
  const populars = await getPopulars();
  if (!populars) return notFound();

  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-10">Популярные товары</h2>
      <ul className="grid grid-flow-col gap-8">
        {populars?.map((popular) => (
          <li key={popular.id} className="relative overflow-hidden bg-white shadow-sm rounded-2xl py-7 pl-7 pr-[50%] hover:shadow-md transition-all
            before:absolute before:-right-5 before:-bottom-14 before:w-44 before:h-44 before:bg-green before:opacity-20 before:rounded-full before:transition-all
            hover:before:-bottom-12 hover:before:-right-4">
            <b className="block text-xl font-medium mb-2">{popular.attributes.title}</b>
            <span className="block text-dark_gray mb-2">
              {/* @ts-expect-error Server Component */}
              <MDXRemote source={popular.attributes.content} />
            </span>
            <Link className="relative flex items-center font-medium text-green hover:text-green_hover group" href={popular.attributes.link}>
              Посмотреть
              <i className="block ml-2 text-none w-5 h-5 bg-green icon-arrowhead group-hover:bg-green_hover" />
            </Link>
            <Image alt={popular.attributes.img.data.attributes.name}
              className="absolute right-3 bottom-1"
              height={105}
              src={`${process.env.STRAPI_API_URL}${popular.attributes.img.data.attributes.url}`}
              width={124} />
          </li>
        ))}
      </ul>
    </section>
  );
}
