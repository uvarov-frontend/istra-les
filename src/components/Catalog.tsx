'use client';

import { useState } from 'react';

import translation from '@/translation.yaml';

import CatalogList from './CatalogList';

export default function Catalog() {
  const { catalog } = translation;
  const [open, setOpen] = useState(false);

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
        <CatalogList />
      </div>
    </div>
  );
}
