/* eslint-disable sort-keys */
import Image from 'next/image';
import Link from 'next/link';

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
  return (
    <footer className="relative z-10 bg-lite py-7">
      <div className="container mx-auto grid grid-cols-[repeat(4,auto)] gap-16 ">
        <div>
          <Link className="block" href="/">
            <Image alt="Истра лес" className="block" height={67} src="/img/logo.svg" width={125} />
          </Link>
          <small className="w-36 block mt-4 text-sm text-dark_gray">© 2021 Истра Лес. Все права защищены.</small>
        </div>
        {menu.map((cols) => (
          <div key={cols.id}>
            <b className="block font-medium mb-4 text-dark">{cols.title}</b>
            <ul>
              {cols.links.map((item) => (
                <li key={item.id} className="block mb-2 last:mb-0">
                  <Link className="block text-dark_gray hover:text-green_hover hover:underline"
                    href={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <Contacts />
      </div>
    </footer>
  );
}
