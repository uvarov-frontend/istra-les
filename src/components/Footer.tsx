/* eslint-disable sort-keys */
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import getMenu from '@/fetching/getMenu';
import translation from '@/translation.yaml';

import Contacts from './Contacts';

export default async function Footer() {
  const { contacts } = translation;

  const mainMenu = await getMenu(true);
  const otherMenu = await getMenu(false);
  if (!mainMenu || !otherMenu) return notFound();

  return (
    <footer className="relative z-10 bg-lite py-7">
      <div className="container mx-auto grid auto-cols-auto grid-flow-row grid-cols-1 gap-8 sm:grid-cols-2 md:grid-flow-col md:grid-cols-[1fr_1fr_auto] md:gap-6 lg:grid-cols-[auto_1fr_1fr_auto] lg:gap-16 xl:grid-cols-[auto_auto_auto_auto]">
        <div className="hidden lg:block">
          <Link className="block" href="/">
            <Image alt={contacts.title} className="block" height={67} src="/img/logo.svg" width={125} />
          </Link>
          <small className="mt-4 block w-36 text-sm text-dark_gray">{contacts.copyright}</small>
        </div>
        <div>
          <b className="mb-4 block font-medium text-dark">{contacts.client}</b>
          <ul>
            {mainMenu.map((item) => (
              <li key={item.id} className="mb-2 block last:mb-0">
                <Link className="block text-dark_gray hover:text-green_hover hover:underline" href={item.attributes.link}>
                  {item.attributes.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <b className="mb-4 block font-medium text-dark">{contacts.info}</b>
          <ul>
            {otherMenu.map((item) => (
              <li key={item.id} className="mb-2 block last:mb-0">
                <Link className="block text-dark_gray hover:text-green_hover hover:underline" href={item.attributes.link}>
                  {item.attributes.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Contacts title={contacts.contacts} />
      </div>
      <small className="absolute bottom-2 right-2 text-xs text-dark_gray/60">{contacts.recaptcha}</small>
    </footer>
  );
}
