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
    <main className="container mx-auto my-5 lg:my-10 min-h-[350px]">
      <BreadCrumbs title="Контакты" />
      <h1 className="mb-5 lg:mb-10 text-2xl lg:text-3xl font-bold">{page.attributes.title}</h1>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[3fr_4fr] lg:gap-14">
        <div>
          <div className="relative mb-6 pl-10">
            <i className="icon-address absolute left-0 top-1 block h-6 w-6 bg-green" />
            <b className="text-lg font-bold">{contacts.addressTitle}</b>
            <ul>
              <li className="my-2">{contacts.address1.address}</li>
              <li className="my-2">{contacts.address2.address}</li>
            </ul>
          </div>
          <div className="relative mb-6 pl-10">
            <i className="icon-phone absolute left-0 top-1 block h-6 w-6 bg-green" />
            <b className="text-lg font-bold">{contacts.phonesTitle}</b>
            <p className="my-2">{contacts.phones}</p>
          </div>
          <div className="relative mb-6 pl-10">
            <i className="icon-clock absolute left-0 top-1 block h-6 w-6 bg-green" />
            <b className="text-lg font-bold">{contacts.scheduleTitle}</b>
            <p className="my-2" dangerouslySetInnerHTML={{ __html: contacts.schedule }} />
          </div>
          <div className="relative mb-6 pl-10">
            <i className="icon-mail absolute left-0 top-1 block h-6 w-6 bg-green" />
            <b className="text-lg font-bold">{contacts.mailTitle}</b>
            <p className="my-2">{contacts.mail}</p>
          </div>
        </div>
        <YandexMap />
      </div>
    </main>
  );
}
