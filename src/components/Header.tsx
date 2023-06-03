import Image from 'next/image';
import Link from 'next/link';

import translation from '@/translation.yaml';

import Address from './Address';
import Callback from './Callback';
import Catalog from './Catalog';
import Logo from './Logo';
import Navigation from './Navigation';

export default function Header() {
  const { contacts } = translation;

  return (
    <>
      <header className="relative z-40 bg-white py-5 border-b border-gray h-[118px]">
        <div className="container mx-auto grid gap-9 grid-flow-col justify-between">
          <div className="flex">
            <Link className="block" href="/">
              <Image alt={contacts.title} className="block" height={67} src="/img/logo.svg" width={125} />
            </Link>
          </div>
          <Address address={contacts.address1.address} />
          <Address address={contacts.address2.address} />
          <Callback phone={contacts.mainPhone} />
        </div>
      </header>
      <header className="sticky z-30 top-0 bg-white py-5 border-gray shadow-sm after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-white after:z-10">
        <div className="container mx-auto flex">
          <Logo />
          {/* @ts-expect-error Server Component */}
          <Catalog />
          <Navigation />
        </div>
      </header>
    </>
  );
}
