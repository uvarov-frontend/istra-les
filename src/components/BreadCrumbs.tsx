/* eslint-disable sort-keys */
import Link from 'next/link';

import { ILink } from '@/types';

export default function BreadCrumbs({ title = '' }: { title: string }) {
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
    <ul className="mb-4 block">
      {links.map((link) => (
        <li
          key={link.id}
          className="relative mr-2 inline-block pr-4 align-bottom after:absolute after:right-0
          after:top-1/2 after:-translate-y-1/2 after:text-sm after:content-['/'] last:text-dark_gray last:after:content-none last:hover:text-dark_gray"
        >
          {link.href ? (
            <Link className="text-dark hover:text-green_hover" href={link.href}>
              {link.title}
            </Link>
          ) : (
            <span>{link.title}</span>
          )}
        </li>
      ))}
    </ul>
  );
}
