'use client';

import Link from 'next/link';
import { useState, MouseEventHandler } from 'react';

import translation from '@/translation.yaml';
import { ICategory } from '@/types';

export default function Catalog({ categories }: { categories: ICategory[] }) {
  const { catalog } = translation;
  const [open, setOpen] = useState(false);
  const [activeID, setActiveID] = useState(categories[0].id);

  const handlerWindowClick = (event: MouseEvent) => {
    if (event.target instanceof HTMLElement && event.target.closest('header') && !event.target.closest('a[href]')) return;
    setOpen(false);
    document.body.classList.remove('overlay-show');
    document.removeEventListener('click', handlerWindowClick);
  };

  const handlerClick = () => {
    if (!open) {
      document.body.classList.add('overlay-show');
      document.addEventListener('click', handlerWindowClick);
    } else {
      document.body.classList.remove('overlay-show');
      document.removeEventListener('click', handlerWindowClick);
    }
    setOpen(!open);
  };

  const handlerHover: MouseEventHandler<HTMLDivElement> = (event) => {
    if (!(event.target instanceof HTMLElement)) return;
    const item: HTMLElement | null = event.target.closest('[data-catalog-item-id]');
    if (!item || !item.dataset.catalogItemId) return;
    setActiveID(Number(item.dataset.catalogItemId));
  };

  return (
    <div>
      <button className={`btn group relative z-20 py-[0.85rem] pl-16 ${open ? 'bg-green_hover' : ''}`} type="button" onClick={handlerClick}>
        <span
          className={`absolute left-7 top-1/2 h-[2px] w-[14px] -translate-y-1/2
          before:absolute before:left-0 before:h-[2px] before:bg-white before:transition-all after:absolute
          after:left-0 after:h-[2px] after:bg-white after:transition-all group-hover:before:w-[18px]
          ${
            open
              ? 'bg-transparent before:top-0 before:w-[18px] before:rotate-45 after:bottom-0 after:w-[18px] after:-rotate-45'
              : 'bg-white before:top-[-5px] before:w-[10px] after:bottom-[-5px] after:w-[18px] group-hover:before:w-[18px] group-hover:after:w-[10px]'
          }`}
        />
        {catalog.title}
      </button>
      <div
        className={`container pointer-events-none absolute left-0 right-0 mx-auto pr-0 transition-transform xl:pr-64 ${
          open ? 'visible z-10 translate-y-0' : 'invisible -z-10 -translate-y-full'
        }`}
      >
        <div className="pointer-events-auto grid grid-cols-[auto_1fr] overflow-hidden rounded-bl-xl rounded-br-xl bg-white pt-4 shadow-sm">
          <div className="flex h-[550px] max-h-[calc(100vh_-_174px)] w-56 flex-col justify-start overflow-y-auto overflow-x-hidden border-t border-gray p-2">
            {categories.map((category) => (
              <div key={category.id}>
                <div
                  className={`flex cursor-pointer items-center justify-between rounded-lg px-4 py-3 ${activeID === category.id ? 'bg-green text-white' : 'bg-white'}`}
                  data-catalog-item-id={category.id}
                  onMouseEnter={handlerHover}
                >
                  <b className="mr-5 block text-base font-medium leading-5">{category.attributes.title}</b>
                  <i className="icon-arrowhead block h-5 min-h-[1.25rem] w-5 min-w-[1.25rem] bg-white" />
                </div>
              </div>
            ))}
          </div>
          {categories.map((category) => {
            const products = category.attributes.products?.data ? category.attributes.products?.data.sort((a, b) => Number(a.attributes.sortID) - Number(b.attributes.sortID)) : [];
            return (
              <div
                key={category.id}
                data-catalog-item-id={category.id}
                className={`max-h-[calc(100vh_-_174px)] grid-cols-3 content-start gap-7 overflow-y-auto overflow-x-hidden border-t border-gray bg-lite px-8 py-6 ${
                  activeID === category.id ? 'grid' : 'hidden'
                }`}
              >
                {products.map((product) => (
                  <div key={product.id}>
                    <Link className="mb-1 block text-lg font-medium hover:text-green_hover" href={`/catalog/${product.attributes.slug}`}>
                      {product.attributes.title}
                    </Link>
                    <ul>
                      {product.attributes.sorts?.data?.map((sort, index) => (
                        <li
                          key={index}
                          className="relative max-w-max text-sm leading-6 before:pointer-events-none before:absolute before:left-0 before:top-1/2 before:h-[1px] before:w-2 before:-translate-y-1/2 before:bg-gray_dark"
                        >
                          <span className="block pl-4 text-gray_dark">{sort.attributes.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
