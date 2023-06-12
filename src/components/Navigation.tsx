import Link from 'next/link';
import { notFound } from 'next/navigation';

import getMenu from '@/fetching/getMenu';

export default async function Navigation() {
  const mainMenu = await getMenu(true);
  if (!mainMenu) return notFound();

  return (
    <menu className="relative ml-8 flex items-center">
      {mainMenu.map((item) => (
        <li
          key={item.id}
          className="relative z-20 px-6 after:absolute after:-right-1 after:top-1/2 after:h-2 after:w-2 after:-translate-y-1/2 after:rounded-full after:bg-gray first:pl-0 last:pr-0 last:after:content-none"
        >
          <Link className="hover:text-green_hover" href={item.attributes.link}>
            {item.attributes.title}
          </Link>
        </li>
      ))}
    </menu>
  );
}
