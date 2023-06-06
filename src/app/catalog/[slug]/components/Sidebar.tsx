import Link from 'next/link';

import getCategory from '@/fetching/getCategory';
import { IProduct } from '@/types';

export default async function Sidebar({ contacts, info, product }: { contacts: {[key: string]: string}, info: {[key: string]: string}, product: IProduct }) {
  const categories = await getCategory(product.attributes.categories.data[0].id);
  return (
    <div className="sticky top-32 grid grid-flow-row gap-5 items-start">
      <div>
        <b className="block text-xl mb-4">{categories.attributes.title}</b>
        <ul>
          {categories.attributes.products.data.map((p) => (
            <li key={p.id}>
              <Link className={`block py-2 px-4 w-full hover:bg-lite border-l-2 ${product.id === p.id ? 'border-green text-green' : 'border-transparent hover:border-x-dark_gray' }`}
                href={`/catalog/${p.attributes.slug}`}>{p.attributes.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className=" bg-green_hover/10 border border-green rounded-xl py-5 px-6">
        <p className="text-sm mb-3" dangerouslySetInnerHTML={{ __html: info.bigDelivery}} />
        <b className="text-dark">{contacts.mainPhone}</b>
      </div>
    </div>
  );
}
