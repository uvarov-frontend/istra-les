import Link from 'next/link';

const menu = [
  {
    id: 0,
    link: '/about',
    title: 'О компании',
  },
  {
    id: 1,
    link: '/shipping-payment',
    title: 'Доставка и оплата',
  },
  {
    id: 2,
    link: '/contacts',
    title: 'Контакты',
  },
];

export default function Navigation() {
  return (
    <menu className="relative flex items-center ml-8">
      {menu.map((item) => (
        <li key={item.id} className="relative z-20 px-6 first:pl-0 last:pr-0 last:after:content-none after:absolute after:rounded-full after:w-2 after:h-2 after:bg-gray after:-right-1 after:top-1/2 after:-translate-y-1/2">
          <Link className="hover:text-green_hover"
            href={item.link}>{item.title}</Link>
        </li>
      ))}
    </menu>
  );
}
