import Image from 'next/image';
import Link from 'next/link';

export default function Popular() {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-10">Популярные товары</h2>
      <ul className="grid grid-flow-col gap-8">
        <li className="relative overflow-hidden bg-white shadow-sm rounded-2xl py-7 pl-7 pr-[50%] hover:shadow-md transition-all
          before:absolute before:-right-5 before:-bottom-14 before:w-44 before:h-44 before:bg-green before:opacity-20 before:rounded-full before:transition-all
          hover:before:-bottom-12 hover:before:-right-4">
          <b className="block text-xl font-medium mb-2">Евровагонка</b>
          <span className="block text-dark_gray mb-2">Различные сорта, отличные характеристики!</span>
          <Link className="relative flex items-center font-medium text-green hover:text-green_hover group" href="/">
            Посмотреть
            <i className="block ml-2 text-none w-5 h-5 bg-green icon-arrowhead group-hover:bg-green_hover" />
          </Link>
          <Image alt="item"
            className="absolute right-3 bottom-1"
            height={105}
            src="/img/popular/2.png"
            width={124} />
        </li>
        <li className="relative overflow-hidden bg-white shadow-sm rounded-2xl py-7 pl-7 pr-[50%] hover:shadow-md transition-all
          before:absolute before:-right-5 before:-bottom-14 before:w-44 before:h-44 before:bg-green before:opacity-20 before:rounded-full before:transition-all
          hover:before:-bottom-12 hover:before:-right-4">
          <b className="block text-xl font-medium mb-2">Имитация бруса</b>
          <span className="block text-dark_gray mb-2">Простота монтажа, практичность, невысокая цена!</span>
          <Link className="relative flex items-center font-medium text-green hover:text-green_hover group" href="/">
            Посмотреть
            <i className="block ml-2 text-none w-5 h-5 bg-green icon-arrowhead group-hover:bg-green_hover" />
          </Link>
          <Image alt="item"
            className="absolute right-3 bottom-1"
            height={105}
            src="/img/popular/1.png"
            width={124} />
        </li>
        <li className="relative overflow-hidden bg-white shadow-sm rounded-2xl py-7 pl-7 pr-[50%] hover:shadow-md transition-all
          before:absolute before:-right-5 before:-bottom-14 before:w-44 before:h-44 before:bg-green before:opacity-20 before:rounded-full before:transition-all
          hover:before:-bottom-12 hover:before:-right-4">
          <b className="block text-xl font-medium mb-2">Доска обрезная</b>
          <span className="block text-dark_gray mb-2">Исходный материал для каркаса, полок, дверей и т.п.</span>
          <Link className="relative flex items-center font-medium text-green hover:text-green_hover group" href="/">
            Посмотреть
            <i className="block ml-2 text-none w-5 h-5 bg-green icon-arrowhead group-hover:bg-green_hover" />
          </Link>
          <Image alt="item"
            className="absolute right-3 bottom-1"
            height={105}
            src="/img/popular/3.png"
            width={124} />
        </li>
      </ul>
    </section>
  );
}
