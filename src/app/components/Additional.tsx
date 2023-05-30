import Image from 'next/image';

export default function Additional() {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-10">Дополнительные услуги</h2>
      <ul className="grid grid-flow-col gap-8">
        <li className="relative flex flex-col bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all">
          <Image alt="item"
            className=""
            height={210}
            src="/img/additional/1.jpg"
            width={385} />
          <div className="flex flex-col p-7 pt-5 grow">
            <div className="grow">
              <b className="block text-xl font-medium mb-2">Снабжение строительных объектов под ключ</b>
              <span className="block text-dark_gray mb-2">Предоставляем все нужное для строительства. От гвоздей до арматуры.</span>
            </div>
            <button className="relative flex items-center font-medium text-green hover:text-green_hover group" type="button">
              Заказать
              <i className="block ml-2 text-none w-5 h-5 bg-green icon-arrowhead group-hover:bg-green_hover" />
            </button>
          </div>
        </li>
        <li className="relative flex flex-col bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all">
          <Image alt="item"
            className=""
            height={210}
            src="/img/additional/2.jpg"
            width={385} />
          <div className="flex flex-col p-7 pt-5 grow">
            <div className="grow">
              <b className="block text-xl font-medium mb-2">Строительство домов и бань</b>
              <span className="block text-dark_gray mb-2">Построим для вас качественный, надежный дом или баню.</span>
            </div>
            <button className="relative flex items-center font-medium text-green hover:text-green_hover group" type="button">
              Заказать
              <i className="block ml-2 text-none w-5 h-5 bg-green icon-arrowhead group-hover:bg-green_hover" />
            </button>
          </div>
        </li>
        <li className="relative flex flex-col bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all">
          <Image alt="item"
            className=""
            height={210}
            src="/img/additional/3.jpg"
            width={385} />
          <div className="flex flex-col p-7 pt-5 grow">
            <div className="grow">
              <b className="block text-xl font-medium mb-2">Регулярная доставка пиломатериалов</b>
              <span className="block text-dark_gray mb-2">Предоставляем нужные вам пиломатериалы регулярно.</span>
            </div>
            <button className="relative flex items-center font-medium text-green hover:text-green_hover group" type="button">
              Заказать
              <i className="block ml-2 text-none w-5 h-5 bg-green icon-arrowhead group-hover:bg-green_hover" />
            </button>
          </div>
        </li>
      </ul>
    </section>
  );
}
