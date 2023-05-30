export default function Advantages() {
  return (
    <div className="py-8">
      <ul className="grid grid-flow-col gap-8 justify-start">
        <li className="relative bg-white rounded-2xl shadow-sm py-6 px-5 pl-[100px] before:absolute before:left-5 before:top-1/2 before:-translate-y-1/2 before:w-[60px] before:h-[60px] before:rounded-full before:bg-green before:opacity-30">
          <i className="block absolute top-1/2 left-[38px] w-6 h-6 icon-shield bg-green -translate-y-1/2" />
          <b className="block font-medium mb-1">Гарантия качества</b>
          <span className="block text-dark_gray text-sm">Мы заботимся о своих клиентах и репутации</span>
        </li>
        <li className="relative bg-white rounded-2xl shadow-sm py-6 px-5 pl-[100px] before:absolute before:left-5 before:top-1/2 before:-translate-y-1/2 before:w-[60px] before:h-[60px] before:rounded-full before:bg-green before:opacity-30">
          <i className="block absolute top-1/2 left-[38px] w-6 h-6 icon-star bg-green -translate-y-1/2" />
          <b className="block font-medium mb-1">20 лет опыта</b>
          <span className="block text-dark_gray text-sm">Наш магазин работает уже более 20 лет!</span>
        </li>
        <li className="relative bg-white rounded-2xl shadow-sm py-6 px-5 pl-[100px] before:absolute before:left-5 before:top-1/2 before:-translate-y-1/2 before:w-[60px] before:h-[60px] before:rounded-full before:bg-green before:opacity-30">
          <i className="block absolute top-1/2 left-[38px] w-6 h-6 icon-truck bg-green -translate-y-1/2" />
          <b className="block font-medium mb-1">Доставка</b>
          <span className="block text-dark_gray text-sm">Быстрая доставка по Москве и области</span>
        </li>
        <li className="relative bg-white rounded-2xl shadow-sm py-6 px-5 pl-[100px] before:absolute before:left-5 before:top-1/2 before:-translate-y-1/2 before:w-[60px] before:h-[60px] before:rounded-full before:bg-green before:opacity-30">
          <i className="block absolute top-1/2 left-[38px] w-6 h-6 icon-discount bg-green -translate-y-1/2" />
          <b className="block font-medium mb-1">Скидки</b>
          <span className="block text-dark_gray text-sm">Еще более низкие цены постоянным клиентам</span>
        </li>
      </ul>
    </div>
  );
}
