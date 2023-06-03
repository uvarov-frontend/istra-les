import BreadCrumbs from '@/components/BreadCrumbs';
import translation from '@/translation.yaml';
import { ILink } from '@/types';

import YandexMap from './components/YandexMap';

const links: ILink[] = [
  {
    id: 0,
    title: 'Главная',
    href: '/',
  },
  {
    id: 1,
    title: 'Контакты',
    href: false,
  },
];

export const metadata = {
  description: 'Истра Лес изготавливает и продает пиломатериалы в розницу и опт. В Москве и Московской области, розничные точки находятся в Истре и Истринском районе.',
  title: 'Контакты | Истра Лес',
};

export default function Contacts() {
  const { contacts } = translation;

  return (
    <main className="container mx-auto my-10 min-h-[350px]">
      <BreadCrumbs links={links} />
      <h1 className="text-3xl font-bold mb-8">Контакты</h1>
      <div className="grid grid-cols-[3fr_4fr] gap-14">
        <div>
          <div className="relative pl-10 mb-6">
            <i className="block absolute top-1 left-0 w-6 h-6 icon-address bg-green" />
            <b className="font-bold text-lg">Адреса</b>
            <ul>
              <li className="my-2">{contacts.address1.address}</li>
              <li className="my-2">{contacts.address2.address}</li>
            </ul>
          </div>
          <div className="relative pl-10 mb-6">
            <i className="block absolute top-1 left-0 w-6 h-6 icon-phone bg-green" />
            <b className="font-bold text-lg">Телефоны</b>
            <p className="my-2">{contacts.phones}</p>
          </div>
          <div className="relative pl-10 mb-6">
            <i className="block absolute top-1 left-0 w-6 h-6 icon-clock bg-green" />
            <b className="font-bold text-lg">График работы</b>
            <p className="my-2" dangerouslySetInnerHTML={{__html: contacts.schedule }} />
          </div>
          <div className="relative pl-10 mb-6">
            <i className="block absolute top-1 left-0 w-6 h-6 icon-mail bg-green" />
            <b className="font-bold text-lg">E-Mail</b>
            <p className="my-2">{contacts.mail}</p>
          </div>
        </div>
        <YandexMap />
      </div>
    </main>
  );
}
