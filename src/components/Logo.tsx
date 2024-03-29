'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Logo() {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    setScrollTop(window.scrollY);

    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Link className={`relative z-20 hidden lg:block ${scrollTop > 118 ? 'logo-transition-show w-32 opacity-100' : 'logo-transition-hidden w-0 opacity-0'}`} href="/">
      <Image alt="Истра лес" className="block" height={50} src="/img/logo.svg" width={92} />
    </Link>
  );
}
