import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="sticky top-32 grid grid-flow-row gap-5 items-start">
      <div>
        <b className="block text-xl mb-4">Вагонка</b>
        <ul>
          <li>
            <Link className="block py-2 px-4 w-full hover:bg-lite border-l-2 border-green text-green" href="/">Евровагонка</Link>
          </li>
          <li>
            <Link className="block py-2 px-4 w-full hover:bg-lite border-l-2 border-transparent hover:border-x-dark_gray" href="/">Вагонка штиль</Link>
          </li>
          <li>
            <Link className="block py-2 px-4 w-full hover:bg-lite border-l-2 border-transparent hover:border-x-dark_gray" href="/">Вагонка для бани</Link>
          </li>
        </ul>
      </div>
      <div className=" bg-green_hover/10 border border-green rounded-xl py-5 px-6">
        <p className="text-sm mb-3"><strong>Для крупных заказов</strong> мы предоставляем персональную <strong>скидку</strong>, детали уточняйте по телефону:</p>
        <b className="text-dark">+7 (985) 991-66-06</b>
      </div>
    </div>
  );
}
