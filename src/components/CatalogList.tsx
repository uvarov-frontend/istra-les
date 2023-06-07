'use client';

import Link from 'next/link';
import { useState , MouseEventHandler } from 'react';

import translation from '@/translation.yaml';
import { ICategory } from '@/types';

export default function CatalogList({ categories }: {categories: ICategory[]} ) {
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
      <button className={`relative z-20 pl-16 py-[0.85rem] btn group ${open ? 'bg-green_hover' : ''}`}
        type="button"
        onClick={handlerClick}>
        <span className={`absolute left-7 top-1/2 -translate-y-1/2 w-[14px] h-[2px]
          before:bg-white before:transition-all before:absolute before:left-0 before:h-[2px] group-hover:before:w-[18px]
          after:bg-white after:transition-all after:absolute after:left-0 after:h-[2px]
          ${open ? 'bg-transparent before:w-[18px] before:rotate-45 before:top-0 after:w-[18px] after:-rotate-45 after:bottom-0' : 'bg-white before:top-[-5px] after:bottom-[-5px] before:w-[10px] after:w-[18px] group-hover:before:w-[18px] group-hover:after:w-[10px]'}`} />
        {catalog.title}
      </button>
      <div className={`pointer-events-none absolute left-0 right-0 container mx-auto pr-64 transition-all ${open ? 'translate-y-0 z-10' : '-translate-y-full -z-10'}`}>
        <div className="grid grid-cols-[auto_1fr] pt-4 bg-white rounded-bl-xl rounded-br-xl overflow-hidden shadow-sm pointer-events-auto">
          <div className="flex flex-col justify-start w-56 p-2 border-t border-gray">
            {categories.map((category) => (
              <div key={category.id}>
                <div
                  className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer ${activeID === category.id ? 'bg-green text-white' : 'bg-white'}`}
                  data-catalog-item-id={category.id}
                  onMouseEnter={handlerHover}>
                  <b className="block text-base leading-5 font-medium mr-5">{category.attributes.title}</b>
                  <i className="block min-w-[1.25rem] min-h-[1.25rem] w-5 h-5 icon-arrowhead bg-white" />
                </div>
              </div>
            ))}
          </div>
          {categories.map((category) => (
            <div key={category.id}
              className={`grid-cols-3 content-start gap-7 px-8 py-6 bg-lite border-t border-gray ${activeID === category.id ? 'grid' : 'hidden'}`}
              data-catalog-item-id={category.id}>
                {category.attributes.products?.data?.map((product) => (
                  <div key={product.id}>
                    <Link className="block text-lg font-medium mb-1 hover:text-green_hover"
                      href={`/catalog/${product.attributes.slug}`}>{product.attributes.title}</Link>
                    <ul>
                      {product.attributes.sorts?.data?.map((sort, index) => (
                        <li key={index}
                        className="relative text-sm leading-6 max-w-max before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-[1px] before:pointer-events-none before:bg-dark_gray">
                          <span className="block pl-4 text-dark_gray">{sort.attributes.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
