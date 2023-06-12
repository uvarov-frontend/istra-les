import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import getCategories from '@/fetching/getCategories';
import translation from '@/translation.yaml';

import Address from './Address';
import Catalog from './Catalog';
import Logo from './Logo';
import Navigation from './Navigation';
import NavigationMobile from './NavigationMobile';
import Phone from './Phone';

export default async function Header() {
  const { contacts, info } = translation;

  const categories = await getCategories();
  if (!categories) return notFound();

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-40 flex h-[70px] items-center border-b border-white bg-white py-3 shadow-sm md:relative md:h-[90px] md:border-gray/50 md:py-4 md:shadow-none">
        <div
          className="container mx-auto grid grid-cols-[1fr_auto_auto] items-center justify-between gap-4 after:absolute after:bottom-[-1px] after:left-0
          after:right-0 after:top-0 after:z-10 after:border-b after:border-gray/50 after:bg-white md:grid-cols-[1fr_auto] md:after:content-none lg:grid-cols-[auto_1fr_auto] lg:gap-16"
        >
          <div className="relative z-20 flex items-center">
            <Link className="block" href="/">
              <Image alt={contacts.title} className="block w-[75px] md:w-[100px]" height={55} src="/img/logo.svg" width={100} />
            </Link>
          </div>
          <div className="hidden grid-flow-col items-center justify-start lg:grid lg:gap-16">
            <Address address={contacts.address1.address} />
            <Address address={contacts.address2.address} />
          </div>
          <Phone callback={info.callback} phone={contacts.mainPhone} />
          <NavigationMobile categories={categories} />
        </div>
      </header>
      <header className="sticky top-0 z-30 hidden h-[84px] items-center border-gray bg-white py-4 shadow-sm after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:z-10 after:bg-white md:flex">
        <div className="container mx-auto flex items-center">
          <Logo />
          <Catalog categories={categories} />
          {/* @ts-expect-error Server Component */}
          <Navigation />
        </div>
      </header>
    </>
  );
}
