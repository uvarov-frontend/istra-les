import Image from 'next/image';
import Link from 'next/link';

import translation from '@/translation.yaml';

import Address from './Address';
import Catalog from './Catalog';
import Logo from './Logo';
import Navigation from './Navigation';
import NavigationMobile from './NavigationMobile';
import Phone from './Phone';

export default function Header() {
  const { contacts, info } = translation;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 md:relative z-40 flex h-[70px] md:h-[90px] items-center border-b shadow-sm border-white md:shadow-none md:border-gray bg-white py-3 md:py-4">
        <div className="container mx-auto grid grid-cols-[1fr_auto_auto] md:grid-cols-[1fr_auto] lg:grid-cols-[auto_1fr_auto] items-center justify-between gap-4 lg:gap-16">
          <div className="relative z-20 flex items-center">
            <Link className="block" href="/">
              <Image alt={contacts.title} className="block w-[75px] md:w-[100px]" height={55} src="/img/logo.svg" width={100} />
            </Link>
          </div>
          <div className="hidden grid-flow-col justify-start items-center lg:gap-16 lg:grid">
            <Address address={contacts.address1.address} />
            <Address address={contacts.address2.address} />
          </div>
          <Phone callback={info.callback} phone={contacts.mainPhone} />
          <NavigationMobile />
        </div>
      </header>
      <header className="sticky top-0 z-30 hidden h-[84px] items-center border-gray bg-white py-4 shadow-sm after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:z-10 after:bg-white md:flex">
        <div className="container mx-auto flex items-center">
          <Logo />
          {/* @ts-expect-error Server Component */}
          <Catalog />
          <Navigation />
        </div>
      </header>
    </>
  );
}
