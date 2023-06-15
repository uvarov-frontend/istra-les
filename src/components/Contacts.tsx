import translation from '@/translation.yaml';

export default function Contacts({ title }: { title: string }) {
  const { contacts } = translation;

  return (
    <div className="sm:col-span-2 md:col-span-1">
      <b className="mb-4 block font-medium text-dark">{title}</b>
      <ul className="grid grid-cols-1 grid-rows-2 gap-3 gap-x-16 sm:grid-flow-col sm:grid-cols-2 sm:gap-x-7 md:grid-cols-[auto_auto]">
        <li className="relative block">
          <i className="icon-phone absolute left-0 top-1/2 block h-5 w-5 -translate-y-1/2 bg-gray_dark" />
          <span className="block pl-8 text-gray_dark">{contacts.mainPhone}</span>
        </li>
        <li className="relative block">
          <i className="icon-mail absolute left-0 top-1/2 block h-5 w-5 -translate-y-1/2 bg-gray_dark" />
          <span className="block pl-8 text-gray_dark">{contacts.mail}</span>
        </li>
        <li className="relative block">
          <i className="icon-telegram absolute left-0 top-1/2 block h-5 w-5 -translate-y-1/2 bg-gray_dark" />
          <a className="block pl-8 text-gray_dark hover:text-green_hover" href="tg://resolve?domain=alexandr7846" rel="noreferrer" target="_blank">
            Telegram
          </a>
        </li>
        <li className="relative block">
          <i className="icon-whatsapp absolute left-0 top-1/2 block h-5 w-5 -translate-y-1/2 bg-gray_dark" />
          <a className="block pl-8 text-gray_dark hover:text-green_hover" href="https://wa.me/79269107846" rel="noreferrer" target="_blank">
            WhatApp
          </a>
        </li>
      </ul>
    </div>
  );
}
