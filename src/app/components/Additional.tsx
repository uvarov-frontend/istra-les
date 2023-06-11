import Image from 'next/image';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';

import getAdditionals from '@/fetching/getAdditionals';

export default async function Additional() {
  const additionals = await getAdditionals();
  if (!additionals) return notFound();

  return (
    <section className="py-5 lg:py-8">
      <h2 className="mb-5 lg:mb-10 text-2xl lg:text-3xl font-bold">Дополнительные услуги</h2>
      <ul className="grid grid-flow-row gap-5 md:grid-cols-2 xl:gap-7 xl:grid-cols-3">
        {additionals?.map((additional) => (
          <li key={additional.id} className="relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-md">
            <Image
              alt={additional.attributes.img.data.attributes.name}
              className="w-full h-[210px] object-cover"
              height={210}
              src={`${process.env.STRAPI_API_URL}${additional.attributes.img.data.attributes.url}`}
              width={385}
            />
            <div className="flex grow flex-col p-7 pt-5">
              <div className="grow">
                <b className="mb-2 block text-xl font-medium">{additional.attributes.title}</b>
                <span className="mb-2 block text-dark_gray">
                  {/* @ts-expect-error Server Component */}
                  <MDXRemote source={additional.attributes.content} />
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
