'use client';

import { useState } from 'react';

// import { onSubmitCallback } from '@/helper';

export default function Callback({ callback, className }: { callback: {[key:string]: string}, className: string }) {
  const [open, setOpen] = useState(false);

  const handlerClose = (e: MouseEvent) => {
    const htmlEl = e.target as HTMLElement;
    if (htmlEl.closest('[data-modal-content]') && !htmlEl.closest('[data-modal-close]')) return;
    setOpen(false);
    document.removeEventListener('click', handlerClose);
  };

  const handlerOpen = () => {
    setOpen(true);
    document.addEventListener('click', handlerClose);
    // onSubmitCallback({
    //   name: 'Юрий',
    //   phone: '+79852873874',
    // });
  };

  return (
    <>
      <button className={className} type="button" onClick={handlerOpen}>{callback.title}</button>
      <div className={`fixed z-40 left-0 top-0 right-0 bottom-0 bg-dark/50 ${open ? 'block' : 'hidden'}`}>
        <div data-modal-content className="p-7 absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 min-h-[100px] bg-white rounded-lg shadow-sm">
          <button data-modal-close className="absolute right-4 top-4 text-[0] hover:text-red" type="button">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <b className="block text-xl mb-2">{callback.titleForm}</b>
          <p className="text-dark_gray text-sm">{callback.descriptionForm}</p>
        </div>
      </div>
    </>
  );
}
