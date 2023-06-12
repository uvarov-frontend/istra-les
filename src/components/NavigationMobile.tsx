'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NavigationMobile() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add('overlay-show');
      document.body.classList.add('scroll-off');
    } else {
      document.body.classList.remove('overlay-show');
      document.body.classList.remove('scroll-off');
    }
  }, [open]);

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
        />Меню</button>
        <div className={`fixed z-10 top-[70px] left-0 bottom-0 right-0 bg-white py-5 transition-all duration-300 ${open ? 'translate-0' : '-translate-y-full'}`}>
          <ul>
            <li>
              <button className="flex items-center py-3 px-[15px] w-full font-medium bg-lite" type="button">
                Каталог продукции
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.25 4.5l7.5 7.5-7.5 7.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </li>
            <li>
              <Link className="block py-2 px-[15px]" href="/about" onClick={() => setOpen(!open)}>О компании</Link>
            </li>
            <li>
              <Link className="block py-2 px-[15px]" href="/shipping-payment" onClick={() => setOpen(!open)}>Доставка и оплата</Link>
            </li>
            <li>
              <Link className="block py-2 px-[15px]" href="/contacts" onClick={() => setOpen(!open)}>Контакты</Link>
            </li>
          </ul>
        </div>
    </div>
  );
}
