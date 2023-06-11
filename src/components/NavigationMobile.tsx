'use client';

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
        <div className={`fixed z-10 top-[70px] left-0 bottom-0 right-0 bg-white transition-all duration-300 ${open ? 'translate-0' : '-translate-y-full'}`}> </div>
    </div>
  );
}
