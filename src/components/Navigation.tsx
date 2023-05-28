import Link from 'next/link';

const menu = [
  {
    link: '/about',
    title: 'О компании',
  },
  {
    link: '/shipping-payment',
    title: 'Доставка и оплата',
  },
  {
    link: '/contacts',
    title: 'Контакты',
  },
];

export default function Navigation() {
  return (
    <menu className="relative flex items-center ml-8">
      {menu.map((item) => (
        <li className="relative z-20 px-6 first:pl-0 last:pr-0 last:after:content-none after:absolute after:rounded-full after:w-2 after:h-2 after:bg-gray after:-right-1 after:top-1/2 after:-translate-y-1/2">
          <Link className="hover:text-green_hover"
            href={item.link}>{item.title}</Link>
        </li>
      ))}
    </menu>
  );
}
