import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';

import getPopulars from '@/fetching/getPopulars';
import translation from '@/translation.yaml';

export default async function Popular() {
  const { info } = translation;
  const populars = await getPopulars();
  if (!populars) return notFound();

  return (
    <section className="py-4 lg:py-8">
      <h2 className="mb-5 text-2xl font-bold lg:mb-10 lg:text-3xl">{info.popular}</h2>
      <ul className="grid grid-flow-row gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-7">
        {populars?.map((popular) => (
          <li
            key={popular.id}
            className="relative overflow-hidden rounded-2xl bg-white py-7 pl-7 pr-[50%] shadow-sm transition-all before:absolute
            before:-bottom-14 before:-right-5 before:h-44 before:w-44 before:rounded-full before:bg-green before:opacity-20 before:transition-all hover:shadow-md
            hover:before:-bottom-12 hover:before:-right-4"
          >
            <b className="mb-2 block text-xl font-medium">{popular.attributes.title}</b>
            <span className="mb-2 block text-dark_gray">
              {/* @ts-expect-error Server Component */}
              <MDXRemote source={popular.attributes.content} />
            </span>
            <Link className="group relative flex items-center font-medium text-green hover:text-green_hover" href={popular.attributes.link}>
              {info.look}
              <i className="icon-arrowhead ml-2 block h-5 w-5 bg-green text-none group-hover:bg-green_hover" />
            </Link>
            <Image
              alt={popular.attributes.img.data.attributes.name}
              className="absolute bottom-1 right-3"
              height={105}
              src={`${process.env.STRAPI_API_URL}${popular.attributes.img.data.attributes.url}`}
              width={124}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
