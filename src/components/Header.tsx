import Image from 'next/image';
import Link from 'next/link';

import translation from '@/translation.yaml';

import Address from './Address';
import Catalog from './Catalog';
import Logo from './Logo';
import Navigation from './Navigation';
import Phone from './Phone';

export default function Header() {
  const { contacts, info } = translation;

  return (
    <>
      <header className="relative z-40 flex h-[90px] items-center border-b border-gray bg-white py-4">
        <div className="container mx-auto grid grid-cols-[auto_1fr_auto] items-center justify-between gap-16">
          <div className="flex items-center">
            <Link className="block" href="/">
              <Image alt={contacts.title} className="block" height={55} src="/img/logo.svg" width={100} />
            </Link>
          </div>
          <div className="grid grid-flow-col justify-start items-center gap-16">
            <Address address={contacts.address1.address} />
            <Address address={contacts.address2.address} />
          </div>
          <Phone callback={info.callback} phone={contacts.mainPhone} />
        </div>
      </header>
      <header className="sticky top-0 z-30 flex h-[84px] items-center border-gray bg-white py-4 shadow-sm after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:z-10 after:bg-white">
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
