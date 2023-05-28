'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Catalog() {
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
        <span className={`absolute left-7 top-1/2 -translate-y-1/2 w-[14px] h-[2px] bg-white
          before:bg-white before:transition-all before:absolute before:left-0 before:h-[2px] before:top-[-5px] before:w-[10px] group-hover:before:w-[18px]
          after:bg-white after:transition-all after:absolute after:left-0 after:h-[2px] after:bottom-[-5px] after:w-[18px] group-hover:after:w-[10px]
          ${open ? 'before:w-[18px] after:w-[10px]' : ''}`} />
        Каталог продукции
      </button>
      <div className={`bg-white absolute left-0 right-0 container mx-auto p-6 rounded-xl transition-all ${open ? 'translate-y-0 z-10 shadow-sm' : '-translate-y-full -z-10'}
      h-[300px]`}>
        <Link className="font-medium text-green hover:text-green_hover" href="/catalog">
          Посмотреть каталог на странице
        </Link>
      </div>
    </div>
  );
}
