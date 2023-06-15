import Image from 'next/image';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';

import getAdditionals from '@/fetching/getAdditionals';
import translation from '@/translation.yaml';

export default async function Additional() {
  const { info } = translation;
  const additionals = await getAdditionals();
  if (!additionals) return notFound();

  return (
    <section className="py-5 lg:py-8">
      <h2 className="mb-5 text-2xl font-bold lg:mb-10 lg:text-3xl">{info.additionally}</h2>
      <ul className="grid grid-flow-row gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-7">
        {additionals?.map((additional) => (
          <li key={additional.id} className="relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-md">
            <Image
              alt={additional.attributes.img.data.attributes.name}
              className="h-[210px] w-full object-cover"
              height={210}
              src={`${process.env.STRAPI_API_URL}${additional.attributes.img.data.attributes.url}`}
              width={385}
            />
            <div className="flex grow flex-col p-7 pt-5">
              <div className="grow">
                <b className="mb-2 block text-xl font-medium">{additional.attributes.title}</b>
                <span className="mb-2 block text-gray_dark">
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
