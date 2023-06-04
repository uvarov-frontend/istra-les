import { notFound } from 'next/navigation';

import BreadCrumbs from '@/components/BreadCrumbs';
import getPage from '@/fetching/getPage';
import translation from '@/translation.yaml';

import YandexMap from './components/YandexMap';

export async function generateMetadata() {
  const { contacts } = translation;
  const page = await getPage('contacts');
  if (!page) return notFound();

  return {
    description: page.attributes.description,
    title: `${page.attributes.title}  | ${contacts.title}`,
  };
}

export default async function Contacts() {
  const page = await getPage('contacts');
  if (!page) return notFound();
  const { contacts } = translation;

  return (
    <main className="container mx-auto my-10 min-h-[350px]">
      <BreadCrumbs title="Контакты" />
      <h1 className="text-3xl font-bold mb-8">{page.attributes.title}</h1>
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
