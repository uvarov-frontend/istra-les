'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import translation from '@/translation.yaml';
import { ICategory, IProduct } from '@/types';

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

export default function NavigationMobile({ categories }: { categories: ICategory[] }) {
  const { info, catalog } = translation;
  const refContent = useRef<HTMLDivElement>(null);

  const firstProducts = categories[0].attributes.products?.data
    ? categories[0].attributes.products?.data.sort((a, b) => Number(a.attributes.sortID) - Number(b.attributes.sortID))
    : [];

  const [open, setOpen] = useState(false);
  const [level, setLevel] = useState(0);
  const [currentMenu, setCurrentMenu] = useState<IProduct[] | null>(firstProducts);

  useEffect(() => {
    if (open) {
      document.body.classList.add('overlay-show');
      document.body.classList.add('scroll-off');
    } else {
      document.body.classList.remove('overlay-show');
      document.body.classList.remove('scroll-off');
    }
  }, [open]);

  useEffect(() => {
    if (!refContent.current) return;
    refContent.current.style.transform = `translateX(-${level * 100}%)`;
  }, [level, refContent]);

  const selectLevel = (l: number, m?: IProduct[]) => {
    setLevel(l);
    if (m) setCurrentMenu(m);
  };

  return (
    <div className="relative md:hidden">
      <button className="relative z-20 h-9 w-10 rounded bg-green p-2 text-[0]" type="button" onClick={() => setOpen(!open)}>
        <span
          className={`absolute left-2 top-1/2 h-[2px] w-[calc(100%_-_16px)] -translate-y-1/2
          before:absolute before:left-0 before:h-[2px] before:w-full before:bg-white before:transition-all
          after:absolute after:left-0 after:h-[2px] after:w-full after:bg-white after:transition-all
          ${open ? 'bg-transparent before:top-0 before:rotate-45 after:bottom-0 after:-rotate-45' : 'bg-white before:top-[-8px] after:bottom-[-8px]'}`}
        />
        {info.menu}
      </button>
      <div className={`fixed bottom-0 left-0 right-0 top-[70px] z-10 bg-white transition-transform duration-300 ${open ? 'translate-0' : '-translate-y-full'}`}>
        <div
          className={`absolute left-0 top-0 z-20 flex h-11 w-full items-center justify-end bg-green_lite px-[15px] py-3 duration-300 ${
            level > 0 ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
          }`}
        >
          <button
            className="flex w-max items-center text-sm font-bold"
            type="button"
            onClick={() => {
              if (level > 0) selectLevel(level - 1);
            }}
          >
            <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path d="M15.75 19.5L8.25 12l7.5-7.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {info.prev}
          </button>
        </div>
        <div ref={refContent} className="grid h-full auto-cols-[100%] grid-flow-col transition-transform duration-300">
          <ul className="h-full overflow-y-auto overflow-x-hidden py-2">
            <li>
              <button className="flex w-max items-center px-[15px] py-3 font-medium" type="button" onClick={() => selectLevel(1)}>
                {catalog.title}
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path d="M8.25 4.5l7.5 7.5-7.5 7.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </li>
            {menu.map((item) => (
              <li key={item.id}>
                <Link className="block w-max px-[15px] py-2" href={item.link} onClick={() => setOpen(!open)}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="h-full overflow-y-auto overflow-x-hidden pb-2 pt-12">
            {categories.map((category) => {
              const products = category.attributes.products?.data
                ? category.attributes.products?.data.sort((a, b) => Number(a.attributes.sortID) - Number(b.attributes.sortID))
                : [];
              return (
                <li key={category.id}>
                  <button className="flex w-max items-center px-[15px] py-3 font-medium" type="button" onClick={() => selectLevel(2, products)}>
                    {category.attributes.title}
                    <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path d="M8.25 4.5l7.5 7.5-7.5 7.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="h-full overflow-y-auto overflow-x-hidden pb-4 pt-12">
            <ul className="grid grid-cols-2 gap-x-2 gap-y-3">
              {currentMenu?.map((product) => (
                <li key={product.id}>
                  <Link className="block w-max max-w-full px-[15px] py-2 font-medium" href={`/catalog/${product.attributes.slug}`} onClick={() => setOpen(!open)}>
                    {product.attributes.title}
                  </Link>
                  <ul className="px-[15px]">
                    {product.attributes.sorts?.data?.map((sort, index) => (
                      <li
                        key={index}
                        className="relative max-w-max text-sm leading-6 before:pointer-events-none before:absolute before:left-0 before:top-1/2 before:h-[1px] before:w-2 before:-translate-y-1/2 before:bg-gray_dark"
                      >
                        <Link className="block pl-4 text-gray_dark" href={`/catalog/${product.attributes.slug}`} onClick={() => setOpen(!open)}>
                          {sort.attributes.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
