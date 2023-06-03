import { notFound } from 'next/navigation';

import getCategories from '@/fetching/getCategories';

import CatalogList from './CatalogList';

// const categories = [
//   {
//     id: 0,
//     title: 'Вагонка',
//     products: [
//       {
//         id: 0,
//         title: 'Евровагонка',
//         link: '#',
//         sorts: [
//           'Экстра',
//           'Сорт A',
//           'Сорт B',
//           'Сорт C',
//         ],
//       },
//       {
//         id: 1,
//         title: 'Вагонка штиль',
//         link: '#',
//         sorts: [
//           'Сорт A',
//           'Сорт C',
//           'Лиственница',
//         ],
//       },
//       {
//         id: 2,
//         title: 'Вагонка для бани',
//         link: '#',
//         sorts: [
//           'Сорт A (Осина)',
//           'Сорт B (Осина)',
//         ],
//       },
//     ],
//   },
//   {
//     id: 1,
//     title: 'Доска, брус',
//     products: [
//       {
//         id: 0,
//         title: 'Доска половая',
//         link: '#',
//         sorts: [
//           'Сорт A',
//           'Сорт C',
//           'Лиственница',
//         ],
//       },
//       {
//         id: 1,
//         title: 'Доска строганная',
//         link: '#',
//         sorts: [
//           '1-й сорт',
//           '2-й сорт',
//         ],
//       },
//       {
//         id: 2,
//         title: 'Доска обрезная',
//         link: '#',
//         sorts: [
//           'Камерной сушки',
//           '1-й сорт',
//           '2-й сорт',
//         ],
//       },
//       {
//         id: 3,
//         title: 'Доска необрезная',
//         link: '#',
//         sorts: [
//           'Сухая',
//         ],
//       },
//       {
//         id: 4,
//         title: 'Палубная доска',
//         link: '#',
//         sorts: [
//           'Сосна',
//         ],
//       },
//     ],
//   },
//   {
//     id: 2,
//     title: 'Имитация бруса, блок-хаус',
//   },
//   {
//     id: 3,
//     title: 'Лиственница',
//   },
//   {
//     id: 4,
//     title: 'Листовые материалы',
//   },
//   {
//     id: 5,
//     title: 'Наличник, плинтус, уголок',
//   },
//   {
//     id: 6,
//     title: 'Планкен, полок для бани',
//   },
//   {
//     id: 7,
//     title: 'Рейка, брусок',
//   },
//   {
//     id: 8,
//     title: 'Элементы для лестниц',
//   },
// ];

export default async function Catalog() {
  const categories = await getCategories();
  if (!categories) return notFound();

  return (
    <div>
      <CatalogList categories={categories} />
    </div>
  );
}
