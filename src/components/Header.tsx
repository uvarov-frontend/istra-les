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
      <header className="relative z-40 flex items-center bg-white py-4 border-b border-gray h-[90px]">
        <div className="container mx-auto grid gap-9 grid-flow-col justify-between items-center">
          <div className="flex items-center">
            <Link className="block" href="/">
              <Image alt={contacts.title} className="block" height={55} src="/img/logo.svg" width={100} />
            </Link>
          </div>
          <Address address={contacts.address1.address} />
          <Address address={contacts.address2.address} />
          <Phone callback={info.callback} phone={contacts.mainPhone} />
        </div>
      </header>
      <header className="sticky z-30 top-0 bg-white py-4 h-[84px] flex items-center border-gray shadow-sm after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-white after:z-10">
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
