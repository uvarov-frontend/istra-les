/* eslint-disable sort-keys */
import Image from 'next/image';
import Link from 'next/link';

import translation from '@/translation.yaml';

import Contacts from './Contacts';

const menu = [
  {
    id: 0,
    title: 'Клиенту',
    links: [
      {
        id: 0,
        title: 'О компании',
        link: '/about',
      },
      {
        id: 1,
        title: 'Доставка и оплата',
        link: '/shipping-payment',
      },
      {
        id: 2,
        title: 'Контакты',
        link: '/contacts',
      },
    ],
  },
  {
    id: 1,
    title: 'Информация',
    links: [
      {
        id: 0,
        title: 'Пользовательское соглашение',
        link: '/terms-of-use',
      },
      {
        id: 1,
        title: 'Политика конфиденциальности',
        link: '/privacy-policy',
      },
    ],
  },
];

export default function Footer() {
  const { contacts } = translation;

  return (
    <footer className="relative z-10 bg-lite py-7">
      <div className="container mx-auto grid grid-flow-row auto-cols-auto gap-8 grid-cols-1 sm:grid-cols-2 lg:gap-16 md:grid-flow-col md:grid-cols-[1fr_1fr_auto] md:gap-6 lg:grid-cols-[auto_1fr_1fr_auto] xl:grid-cols-[auto_auto_auto_auto]">
        <div className="hidden lg:block">
          <Link className="block" href="/">
            <Image alt={contacts.title} className="block" height={67} src="/img/logo.svg" width={125} />
          </Link>
          <small className="mt-4 block w-36 text-sm text-dark_gray">{contacts.copyright}</small>
        </div>
        {menu.map((cols) => (
          <div key={cols.id}>
            <b className="mb-4 block font-medium text-dark">{cols.title}</b>
            <ul>
              {cols.links.map((item) => (
                <li key={item.id} className="mb-2 block last:mb-0">
                  <Link className="block text-dark_gray hover:text-green_hover hover:underline" href={item.link}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <Contacts />
      </div>
      <small className="absolute bottom-2 right-2 text-xs text-dark_gray/60">{contacts.recaptcha}</small>
    </footer>
  );
}
