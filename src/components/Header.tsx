import Image from 'next/image';
import Link from 'next/link';

import Address from './Address';
import Callback from './Callback';

export default function Header() {
  return (
    <>
      <header className="py-5 border-b border-gray h-[118px]">
        <div className="container mx-auto grid gap-9 grid-flow-col justify-between">
          <div className="flex">
            <Link className="block" href="/">
              <Image alt="Истра лес" className="block" height={67} src="/img/logo.svg" width={125} />
            </Link>
          </div>
          <Address address="Московская обл., городской округ Истра, дер. Ленино, строительный рынок Ленино" />
          <Address address="Московская обл., городской округ Истра, дер. Талицы, строительный рынок Талицы" />
          <Callback phone="+7 (985) 991-66-06" />
        </div>
      </header>
    </>
  );
}
