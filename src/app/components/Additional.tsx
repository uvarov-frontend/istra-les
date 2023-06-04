import Image from 'next/image';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';

import getAdditionals from '@/fetching/getAdditionals';

export default async function Additional() {
  const additionals = await getAdditionals();
  if (!additionals) return notFound();

  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-10">Дополнительные услуги</h2>
      <ul className="grid grid-flow-col gap-8">
        {additionals?.map((additional) => (
          <li key={additional.id} className="relative flex flex-col bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all">
            <Image alt={additional.attributes.img.data.attributes.name}
              className=""
              height={210}
              src={`${process.env.STRAPI_API_URL}${additional.attributes.img.data.attributes.url}`}
              width={385} />
            <div className="flex flex-col p-7 pt-5 grow">
              <div className="grow">
                <b className="block text-xl font-medium mb-2">{additional.attributes.title}</b>
                <span className="block text-dark_gray mb-2">
                  {/* @ts-expect-error Server Component */}
                  <MDXRemote source={additional.attributes.content} />
                </span>
              </div>
              <button className="relative flex items-center font-medium text-green hover:text-green_hover group" type="button">
                Заказать
                <i className="block ml-2 text-none w-5 h-5 bg-green icon-arrowhead group-hover:bg-green_hover" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
