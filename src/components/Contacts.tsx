import translation from '@/translation.yaml';

export default function Contacts() {
  const { contacts } = translation;

  return (
    <div className="sm:col-span-2 md:col-span-1">
      <b className="mb-4 block font-medium text-dark">Контакты</b>
      <ul className="grid sm:grid-flow-col grid-cols-1 gap-3 sm:grid-cols-2 grid-rows-2 gap-x-16 sm:gap-x-7 md:grid-cols-[auto_auto]">
        <li className="relative block">
          <i className="icon-phone absolute left-0 top-1/2 block h-5 w-5 -translate-y-1/2 bg-dark_gray" />
          <span className="block pl-8 text-dark_gray">{contacts.mainPhone}</span>
        </li>
        <li className="relative block">
          <i className="icon-mail absolute left-0 top-1/2 block h-5 w-5 -translate-y-1/2 bg-dark_gray" />
          <span className="block pl-8 text-dark_gray">{contacts.mail}</span>
        </li>
        <li className="relative block">
          <i className="icon-telegram absolute left-0 top-1/2 block h-5 w-5 -translate-y-1/2 bg-dark_gray" />
          <a className="block pl-8 text-dark_gray hover:text-green_hover" href="tg://resolve?domain=alexandr7846" rel="noreferrer" target="_blank">
            Telegram
          </a>
        </li>
        <li className="relative block">
          <i className="icon-whatsapp absolute left-0 top-1/2 block h-5 w-5 -translate-y-1/2 bg-dark_gray" />
          <a className="block pl-8 text-dark_gray hover:text-green_hover" href="https://wa.me/79269107846" rel="noreferrer" target="_blank">
            WhatApp
          </a>
        </li>
      </ul>
    </div>
  );
}
