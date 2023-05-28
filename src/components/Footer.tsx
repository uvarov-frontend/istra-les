/* eslint-disable sort-keys */
import Image from 'next/image';
import Link from 'next/link';

import Contacts from './Contacts';

const menu = [
  {
    title: 'Клиенту',
    links: [
      {
        title: 'Каталог продукции',
        link: '/catalog',
      },
      {
        title: 'О компании',
        link: '/about',
      },
      {
        title: 'Доставка и оплата',
        link: '/shipping-payment',
      },
      {
        title: 'Контакты',
        link: '/contacts',
      },
    ],
  },
  {
    title: 'Информация',
    links: [
      {
        title: 'Пользовательское соглашение',
        link: '/terms-of-use',
      },
      {
        title: 'Политика конфиденциальности',
        link: '/privacy-policy',
      },
      {
        title: 'Карта сайта',
        link: '/sitemap.xml',
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
          <div>
            <b className="block font-medium mb-4 text-dark">{cols.title}</b>
            <ul>
              {cols.links.map((item) => (
                <li className="block mb-2 last:mb-0">
                  <Link className="block text-dark_gray hover:text-green_hover hover:underline"
                    href={item.title}>{item.title}</Link>
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
