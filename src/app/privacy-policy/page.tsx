import BreadCrumbs from '@/components/BreadCrumbs';
import { ILink } from '@/types';

const links: ILink[] = [
  {
    id: 0,
    title: 'Главная',
    href: '/',
  },
  {
    id: 1,
    title: 'Политика конфиденциальности',
    href: false,
  },
];

export const metadata = {
  description: 'Истра Лес изготавливает и продает пиломатериалы в розницу и опт. В Москве и Московской области, розничные точки находятся в Истре и Истринском районе.',
  title: 'Политика конфиденциальности | Истра Лес',
};

export default function Contacts() {
  return (
    <main className="container mx-auto my-10 min-h-[350px]">
      <BreadCrumbs links={links} />
      <h1 className="text-3xl font-bold">Политика конфиденциальности</h1>
    </main>
  );
}
