'use client';

import { useStore } from '@/store';
import { ITranslate } from '@/types';

export default function Callback({ callback, className }: { callback: ITranslate; className: string }) {
  const handlerClose = (e: MouseEvent) => {
    const htmlEl = e.target as HTMLElement;
    if (htmlEl.closest('[data-modal-content]') && !htmlEl.closest('[data-modal-close]')) return;
    useStore.setState({ modalCallbackIsOpen: false });
    document.removeEventListener('click', handlerClose);
  };

  const handlerOpen = () => {
    useStore.setState({ modalCallbackIsOpen: true });
    document.addEventListener('click', handlerClose);
  };

  return (
    <button className={className} type="button" onClick={handlerOpen}>
      {callback.title}
    </button>
  );
}
