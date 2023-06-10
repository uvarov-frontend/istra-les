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
    <menu className="relative ml-8 flex items-center">
      {menu.map((item) => (
        <li
          key={item.id}
          className="relative z-20 px-6 after:absolute after:-right-1 after:top-1/2 after:h-2 after:w-2 after:-translate-y-1/2 after:rounded-full after:bg-gray first:pl-0 last:pr-0 last:after:content-none"
        >
          <Link className="hover:text-green_hover" href={item.link}>
            {item.title}
          </Link>
        </li>
      ))}
    </menu>
  );
}
