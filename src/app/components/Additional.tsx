import Image from 'next/image';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';

import getAdditionals from '@/fetching/getAdditionals';

export default async function Additional() {
  const additionals = await getAdditionals();
  if (!additionals) return notFound();

  return (
    <section className="py-8">
      <h2 className="mb-10 text-3xl font-bold">Дополнительные услуги</h2>
      <ul className="grid grid-flow-col gap-7">
        {additionals?.map((additional) => (
          <li key={additional.id} className="relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-md">
            <Image
              alt={additional.attributes.img.data.attributes.name}
              className=""
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
