export default function Contacts() {
  return (
    <div>
      <b className="block font-medium mb-4 text-dark">Контакты</b>
      <ul className="grid grid-flow-col gap-5 grid-cols-2 grid-rows-2">
        <li className="block relative">
          <i className="block absolute top-1/2 left-0 w-5 h-5 icon-phone bg-dark_gray -translate-y-1/2" />
          <span className="block pl-8 text-dark_gray">+7 (985) 991-66-06</span>
        </li>
        <li className="block relative">
          <i className="block absolute top-1/2 left-0 w-5 h-5 icon-mail bg-dark_gray -translate-y-1/2" />
          <span className="block pl-8 text-dark_gray">9916606@mail.ru</span>
        </li>
        <li className="block relative">
          <i className="block absolute top-1/2 left-0 w-5 h-5 icon-telegram bg-dark_gray -translate-y-1/2" />
          <a className="block pl-8 text-dark_gray hover:text-green_hover"
            href="tg://resolve?domain=alexandr7846" rel="noreferrer" target="_blank">Telegram</a>
        </li>
        <li className="block relative">
          <i className="block absolute top-1/2 left-0 w-5 h-5 icon-whatsapp bg-dark_gray -translate-y-1/2" />
          <a className="block pl-8 text-dark_gray hover:text-green_hover"
            href="https://wa.me/79269107846" rel="noreferrer" target="_blank">WhatApp</a>
        </li>
      </ul>
    </div>
  );
}
