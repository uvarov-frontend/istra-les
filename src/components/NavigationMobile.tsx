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
  const [open, setOpen] = useState(false);
  const [level, setLevel] = useState(0);
  const [currentMenu, setCurrentMenu] = useState<IProduct[] | null>(categories[0].attributes.products.data);

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
      <button className="relative z-20 text-[0] w-10 h-9 bg-green rounded p-2"
        type="button"
        onClick={() => setOpen(!open)}>
          <span
          className={`absolute left-2 top-1/2 h-[2px] w-[calc(100%_-_16px)] -translate-y-1/2
          before:absolute before:left-0 before:h-[2px] before:bg-white before:transition-all after:absolute
          after:left-0 after:h-[2px] after:bg-white after:transition-all before:w-full after:w-full
          ${open ? 'bg-transparent before:top-0 before:rotate-45 after:bottom-0 after:-rotate-45'
              : 'bg-white before:top-[-8px] after:bottom-[-8px]'
          }`}
        />{info.menu}</button>
        <div className={`fixed z-10 top-[70px] left-0 bottom-0 right-0 bg-white transition-transform duration-300 ${open ? 'translate-0' : '-translate-y-full'}`}>
          <div className={`absolute z-20 left-0 top-0 flex items-center justify-end h-11 py-3 px-[15px] w-full bg-green_lite duration-300 ${level > 0 ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
            <button className="flex items-center text-sm font-bold w-max"
              type="button"
              onClick={() => {
                if (level > 0) selectLevel(level - 1);
              }}>
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path d="M15.75 19.5L8.25 12l7.5-7.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {info.prev}
            </button>
          </div>
          <div ref={refContent} className="grid grid-flow-col auto-cols-[100%] transition-transform duration-300 h-full">
            <ul className="py-2 h-full overflow-x-hidden overflow-y-auto">
              <li>
                <button className="flex items-center py-3 px-[15px] w-max font-medium" type="button" onClick={() => selectLevel(1)}>
                  {catalog.title}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path d="M8.25 4.5l7.5 7.5-7.5 7.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </li>
              {menu.map((item) => (
                <li key={item.id}>
                  <Link className="block py-2 px-[15px] w-max" href={item.link} onClick={() => setOpen(!open)}>{item.title}</Link>
                </li>
              ))}
            </ul>
            <ul className="pt-12 pb-2 h-full overflow-x-hidden overflow-y-auto">
              {categories.map((category) => (
                <li key={category.id}>
                  <button className="flex items-center py-3 px-[15px] w-max text-sm font-medium" type="button" onClick={() => selectLevel(2, category.attributes.products?.data)}>
                    {category.attributes.title}
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path d="M8.25 4.5l7.5 7.5-7.5 7.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
            <div className="pt-12 pb-4 h-full overflow-x-hidden overflow-y-auto">
              <ul className="grid grid-cols-2 gap-x-2 gap-y-3">
                {currentMenu?.map((product) => (
                  <li key={product.id}>
                    <Link className="block py-2 px-[15px] font-medium w-max" href={`/catalog/${product.attributes.slug}`} onClick={() => setOpen(!open)}>
                      {product.attributes.title}
                    </Link>
                    <ul className="px-[15px]">
                      {product.attributes.sorts?.data?.map((sort, index) => (
                        <li
                          key={index}
                          className="relative max-w-max text-sm leading-6 before:pointer-events-none before:absolute before:left-0 before:top-1/2 before:h-[1px] before:w-2 before:-translate-y-1/2 before:bg-dark_gray"
                        >
                          <Link className="block pl-4 text-dark_gray" href={`/catalog/${product.attributes.slug}`} onClick={() => setOpen(!open)}>{sort.attributes.title}</Link>
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
