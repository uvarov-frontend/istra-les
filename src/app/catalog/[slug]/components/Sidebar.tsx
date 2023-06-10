import Link from 'next/link';

// import Callback from '@/components/Callback';
import getCategory from '@/fetching/getCategory';
import { IProduct, ITranslate } from '@/types';

export default async function Sidebar({ contacts, info, product }: { contacts: ITranslate; info: ITranslate; product: IProduct }) {
  const categories = await getCategory(product.attributes.categories.data[0].id);
  return (
    <div className="sticky z-40 top-32 grid grid-flow-row items-start gap-5">
      <div>
        <b className="mb-4 block text-xl">{categories.attributes.title}</b>
        <ul>
          {categories.attributes.products.data.map((p) => (
            <li key={p.id}>
              <Link
                className={`block w-full border-l-2 px-4 py-2 hover:bg-lite ${product.id === p.id ? 'border-green text-green' : 'border-transparent hover:border-x-dark_gray'}`}
                href={`/catalog/${p.attributes.slug}`}
              >
                {p.attributes.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className=" rounded-xl border border-green bg-green_hover/10 px-6 py-5">
        <p className="mb-3 text-sm" dangerouslySetInnerHTML={{ __html: info.bigDelivery }} />
        <b className="block text-lg text-dark">{contacts.mainPhone}</b>
        {/* <span className="mr-1 text-sm">{info.or}</span> */}
        {/* <Callback callback={info.callback} className="text-sm lowercase text-green hover:text-green_hover" /> */}
      </div>
    </div>
  );
}
