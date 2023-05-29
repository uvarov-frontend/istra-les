/* eslint-disable sort-keys */
import Link from 'next/link';
import { MouseEventHandler, useState } from 'react';

const catalog = [
  {
    id: 0,
    title: 'Вагонка',
    products: [
      {
        id: 0,
        title: 'Евровагонка',
        link: '#',
        sorts: [
          'Экстра',
          'Сорт A',
          'Сорт B',
          'Сорт C',
        ],
      },
      {
        id: 1,
        title: 'Вагонка штиль',
        link: '#',
        sorts: [
          'Сорт A',
          'Сорт C',
          'Лиственница',
        ],
      },
      {
        id: 2,
        title: 'Вагонка для бани',
        link: '#',
        sorts: [
          'Сорт A (Осина)',
          'Сорт B (Осина)',
        ],
      },
    ],
  },
  {
    id: 1,
    title: 'Доска, брус',
    products: [
      {
        id: 0,
        title: 'Доска половая',
        link: '#',
        sorts: [
          'Сорт A',
          'Сорт C',
          'Лиственница',
        ],
      },
      {
        id: 1,
        title: 'Доска строганная',
        link: '#',
        sorts: [
          '1-й сорт',
          '2-й сорт',
        ],
      },
      {
        id: 2,
        title: 'Доска обрезная',
        link: '#',
        sorts: [
          'Камерной сушки',
          '1-й сорт',
          '2-й сорт',
        ],
      },
      {
        id: 3,
        title: 'Доска необрезная',
        link: '#',
        sorts: [
          'Сухая',
        ],
      },
      {
        id: 4,
        title: 'Палубная доска',
        link: '#',
        sorts: [
          'Сосна',
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Имитация бруса, блок-хаус',
  },
  {
    id: 3,
    title: 'Лиственница',
  },
  {
    id: 4,
    title: 'Листовые материалы',
  },
  {
    id: 5,
    title: 'Наличник, плинтус, уголок',
  },
  {
    id: 6,
    title: 'Планкен, полок для бани',
  },
  {
    id: 7,
    title: 'Рейка, брусок',
  },
  {
    id: 8,
    title: 'Элементы для лестниц',
  },
];

export default function CatalogList() {
  const [activeID, setActiveID] = useState(0);

  const handlerHover: MouseEventHandler<HTMLDivElement> = (event) => {
    if (!(event.target instanceof HTMLElement)) return;
    const item: HTMLElement | null = event.target.closest('[data-catalog-item-id]');
    if (!item || !item.dataset.catalogItemId) return;
    setActiveID(Number(item.dataset.catalogItemId));
  };

  return (
    <div className="grid grid-cols-[auto_1fr] pt-5 bg-white rounded-bl-xl rounded-br-xl overflow-hidden shadow-sm pointer-events-auto">
      <div className="flex flex-col justify-start w-56 p-2 border-t border-gray">
        {catalog.map((item) => (
          <div key={item.id}>
            <div
              className={`flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer ${activeID === item.id ? 'bg-green text-white' : 'bg-white'}`}
              data-catalog-item-id={item.id}
              onMouseEnter={handlerHover}>
              <b className="block text-base leading-5 font-medium mr-5">{item.title}</b>
              <i className="block min-w-[1.25rem] min-h-[1.25rem] w-5 h-5 icon-arrowhead bg-white" />
            </div>
          </div>
        ))}
      </div>
      {catalog.map((item) => (
        <div key={item.id}
          className={`grid-cols-3 content-start gap-7 px-8 py-6 bg-lite border-t border-gray ${activeID === item.id ? 'grid' : 'hidden'}`}
          data-catalog-item-id={item.id}>
            {item.products?.map((product) => (
              <div key={product.id}>
                <Link className="block text-lg font-medium mb-1 hover:text-green_hover"
                  href={product.link}>{product.title}</Link>
                <ul>
                  {product.sorts.map((sort, index) => (
                    <li key={index}
                    className="relative text-sm leading-6 group max-w-max before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-[1px] before:pointer-events-none before:bg-dark hover:before:bg-green_hover">
                      <Link className="block pl-4 group-hover:text-green_hover"
                        href={product.link}>{sort}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}
