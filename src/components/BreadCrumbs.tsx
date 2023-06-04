/* eslint-disable sort-keys */
import Link from 'next/link';

import { ILink } from '@/types';

export default function BreadCrumbs({ title = '' } : { title: string }) {
  const links: ILink[] = [
    {
      id: 0,
      title: 'Главная',
      href: '/',
    },
    {
      id: 1,
      title,
      href: false,
    },
  ];

  return (
    <ul className="block mb-4">
      {links.map((link) => (
        <li key={link.id}
          className="relative inline-block align-bottom pr-4 mr-2 last:text-dark_gray last:hover:text-dark_gray
          after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:content-['/'] after:text-sm last:after:content-none">

          {link.href ? <Link className="text-dark hover:text-green_hover" href={link.href}>{link.title}</Link> : <span>{link.title}</span>}
        </li>
      ))}
    </ul>
  );
}
